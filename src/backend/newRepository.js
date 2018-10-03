const aws = require('aws-sdk');
aws.config.update({region: 'us-east-2'});

export const findAllRedWines = async (scanParams) => {
  const docClient = new aws.DynamoDB.DocumentClient();

  await docClient.scan(scanParams, (err, data) => {
    if (err) {
      return {
        success: false,
        response: err
      }
    } else {
      console.log(data);
      return {
        success: true,
        response: data
      }
    }
  });


  // docClient.scan(scanParams).promise().then(data => ({
  //   success: true,
  //   response: data.Items,
  // })).catch(err => ({
  //   success: false,
  //   response: err,
  // }));
};

export default findAllRedWines;
