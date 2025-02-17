Project Two Conference Presentation: Cloud Development
Bradley Jackson  
Tech Innovators Inc.

https://youtu.be/GHFlng6UzuQ

Good morning everyone. My name is Bradley Jackson, and I am a Senior Software Engineer at Tech Innovators Inc.
The subject of this talk is to familiarize you with serverless applications on Amazon Web Services.

-1-

I specialize in cloud security, applied machine learning, and full-stack development.
Today, I'm excited to share with you insights on migrating complex applications to a serverless architecture using AWS.

-2-

Here is what we'll cover today, starting with docker. And if you are wondering, I will send out the slide deck and link to the internal repo after the presentation.

-3-


Docker allows us to package applications and their dependencies into containers, ensuring consistency across different environments. This is crucial for reliable deployments. The benefits include consistent environments, ease of sharing and deploying, and being lightweight and efficient. We use tools like Docker CLI and Docker Hub.

-4-

Docker Compose is essential for managing multi-container applications. It simplifies multi-container management, enables easy configuration with YAML files, and facilitates environment replication. We define services, networks, and volumes, allowing for version control of infrastructure.

-5-

Moving to serverless architecture with AWS has numerous benefits: no server management, automatic scaling, and pay-as-you-go pricing. Key services include AWS Lambda, which runs code in response to events, and AWS S3 for scalable object storage.

-6-

Lambda functions are triggered by events such as HTTP requests via API Gateway. These functions can interact with other AWS services like S3 and DynamoDB. The steps to create a Lambda function include setting up the API Gateway and deploying the API.

-7-

When comparing MongoDB and DynamoDB, MongoDB is a document-based NoSQL database that allows flexible schema and complex queries. DynamoDB, on the other hand, is managed by AWS, offering automatic scaling and high availability, suitable for predictable access patterns and high performance.

-8-

Cloud services provide dynamic scalability and a pay-for-use model. Resources can scale up or down automatically, matching capacity to demand, and ensuring cost efficiency by only paying for actual resource usage.

-9-

Securing cloud applications is essential. This involves defining and enforcing permissions through IAM roles and policies, creating custom policies, and securing connections between services like Lambda and API Gateway. Proper access control ensures robust security and compliance.

-10-

To wrap up, we've explored the migration to serverless architecture, the benefits of using AWS services, and essential security measures. I'm happy to take any questions you might have.

-11-

Thank you for your time and attention. If you have any further questions or need assistance, feel free to reach out. Have a great day!
