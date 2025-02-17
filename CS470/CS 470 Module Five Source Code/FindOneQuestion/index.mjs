/**********************************************************************
 *  Get single record from table
 **********************************************************************/

import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument, GetCommand, PutCommand, DeleteCommand, QueryCommand, UpdateCommand, ScanCommand, } from '@aws-sdk/lib-dynamodb';

const dynamoDbClient = new DynamoDBClient();
const docClient = DynamoDBDocument.from(dynamoDbClient);

const responseHeaders = {
  // HTTP headers to pass back to the client
  "Content-Type": "application/json",
  // the next headers support CORS
  "X-Requested-With": "*",
  "Access-Control-Allow-Headers":
    "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,x-requested-with",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "OPTIONS,*",
  // for proxies
  Vary: "Origin",
  // the "has-cors" library used by the Angular application wants this set
  "Access-Control-Allow-Credentials": "true",
};

async function queryDatabase(tableName, includeClause, whereClause) {
  // create the query params
  const paramQuery = async () => {
    // define our query
    let params = {
      TableName: tableName,
    };

    if (whereClause) {
      // get the key and value
      let whereKey = Object.keys(whereClause)[0];
      let whereValue = whereClause[whereKey];

      //  set our values
      params.ExpressionAttributeNames = { "#whereKey": whereKey };
      params.ExpressionAttributeValues = { ":whereValue": whereValue };
      params.FilterExpression = "#whereKey = :whereValue";
    }

    // log the params sent for the query
    //console.log(params);

    //  run the query and get the promise
    return new Promise((resolve, reject) => {
      var queryParams = docClient.send(new ScanCommand(params));
      queryParams
        .then(function (data) {
          resolve(data.Items);
        })
        .catch(function (err) {
          reject(err);
        });
    });
  };

  // wait for the promise and return the result
  return await paramQuery();
}

export const handler = async (event) => {
  // lets get the path and/or query parameters
  let pathParameters = event.pathParameters;
  let query = event.queryStringParameters;
  var whereClause = "";
  var includeClause = "";

  if (query && query.filter && query.filter.trim()) {
    // we need some filter information
    let filter = JSON.parse(query.filter);

    if (filter && filter.where) {
      whereClause = filter.where;
    }

    if (filter && filter.include) {
      includeClause = filter.include;
    }
  }

  // findOne is only used on the Questions resource
  // Angular is not expecting an array, so we need to take the first element only
  var data = (await queryDatabase("Question", includeClause, whereClause))[0];

  // lets handle the include relations case.
  // we do it here instead of inside of queryDatabase to avoid recursion
  if (data && includeClause) {
    // need to query an nested includes
    // we are cheating a bit here, since we know that for this application
    // the only include is for Question to include the Answer
    // we need to do this because DynamoDB does not have support for Joins

    // get the requested relation
    let relation = includeClause.relation;

    // make sure the relation is not null and is answers
    if (relation && relation == "answers") {
      // need to get answers for each data elements
      let answerWhere = { questionId: data.id };
      const subData = await queryDatabase("Answer", null, answerWhere);
      if (subData) {
        data.answers = subData;
      }
    }
  }

  let response = {
    statusCode: 200,
    body: JSON.stringify(data),
    // HTTP headers to pass back to the client
    headers: responseHeaders,
  };
  return response;
};
