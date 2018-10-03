const aws = require('aws-sdk');
aws.config.update({region: 'us-east-2'});
export const findAllRedWines = (scanParams) => {
  const docClient = new aws.DynamoDB.DocumentClient();

  docClient.scan(scanParams).then((data) => {
    return {
      success: true,
      response: data.Items
    };
  }).catch((err) => {
    return {
      success: false,
      response: err
    };
  });
};

export default findAllRedWines;
