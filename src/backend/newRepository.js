const aws = require('aws-sdk');
aws.config.update({region: 'us-east-2'});

export const findAllRedWines = async (scanParams) => {
  const docClient = new aws.DynamoDB.DocumentClient();

  return await docClient.scan(scanParams).promise()
      .then((data) => {
        return {
          success: true,
          results: data.Items
        };
      }).catch((err) => {
        return {
          success: false,
          results: err
        }
      });
};

export default findAllRedWines;
