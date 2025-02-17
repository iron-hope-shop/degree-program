/**********************************************************************
 *  Upsert Answer item into table
 **********************************************************************/

import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument, GetCommand, PutCommand, DeleteCommand, QueryCommand, UpdateCommand, ScanCommand, } from '@aws-sdk/lib-dynamodb';

const dynamoDbClient = new DynamoDBClient();
const docClient = DynamoDBDocument.from(dynamoDbClient);

// we need uuid to generate unique ids
import { v4 } from 'uuid';

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

export const handler = async (event) => {
  // get the HTTP Method used
  var httpMethod = event.httpMethod;
  // get the HTTP body sent
  var payload = JSON.parse(event.body);

  // time to prepare the upsert
  const paramQuery = async () => {
    // define our query
    let params = {
      TableName: "Answer",
      Key: { id: "" },
      UpdateExpression: "set #qi = :qi, #a = :a, #nv = :nv, #pv = :pv",
      ExpressionAttributeNames: {
        // define the attributes used in the update expression
        "#qi": "questionId",
        "#a": "answer",
        "#nv": "negativeVotes",
        "#pv": "positiveVotes",
      },
      ExpressionAttributeValues: {
        // set default values
        ":qi": "",
        ":a": "",
        ":nv": 0,
        ":pv": 0,
      },
      // this tells DynamoDB to return the new records with all fields, not just the changed ones
      // see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateItem.html for
      // information on the possible values
      ReturnValues: "ALL_NEW",
    };

    // these three fields can be set during create or update
    //  set the answer if there is one
    if (payload.answer && payload.answer.trim())
      params.ExpressionAttributeValues[":a"] = payload.answer;

    //  set the category slug if there is one
    if (payload.questionId && payload.questionId.trim())
      params.ExpressionAttributeValues[":qi"] = payload.questionId;

    if (httpMethod == "PUT") {
      // PUTs are updates but the ID is passed as a path paremeter
      // lets get the path parameters
      let pathParameters = event.pathParameters;

      //  set the unique key of the item to be modified
      params.Key.id = pathParameters.id;

      // these two values are only changed - they are always defaulted during create
      //  set the negativeVotes
      params.ExpressionAttributeValues[":nv"] = payload.negativeVotes;

      //  set the positiveVotes
      params.ExpressionAttributeValues[":pv"] = payload.positiveVotes;
    } else {
      // POSTs are inserts
      // create and set the unique key. its a uuid without the '-'
      var id = v4().replace(/\-/g, "");
      params.Key.id = id;
    }

    // uncomment the next line to see the parameters as sent to DynamoDB
    //console.log(JSON.stringify(params));

    // we create a promise to wrap the async DynamoDB execution
    return new Promise((resolve, reject) => {
      var queryParams = docClient.send(new UpdateCommand(params));
      queryParams
        .then(function (data) {
          resolve({
            statusCode: 200,
            body: JSON.stringify(data),
            // HTTP headers to pass back to the client
            headers: responseHeaders,
          });
        })
        .catch(function (err) {
          reject(err);
        });
    });
  };
  // we await our promise here and return the result (see the resolve above)
  return await paramQuery();
};
