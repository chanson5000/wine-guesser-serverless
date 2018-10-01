const aws = require('aws-sdk');
aws.config.update({region: 'us-east-2'});
const docClient = new aws.DynamoDB.DocumentClient();

exports.getAllRed = (event, context, callback) => {
  const scanParams = {
    TableName: 'redWines'
  };

  docClient.scan(scanParams, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  })
};

exports.getRedByVarietal = (event, context, callback) => {
  const varietal = event.varietal;
  const world = event.world;

  const queryParams = {
    TableName: 'redWines',
    KeyConditionExpression: "varietal = :v and world = :w",
    ExpressionAttributeValues: {
      ":v": varietal,
      ":w": world
    }
  };

  docClient.query(queryParams, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  })
};

exports.getAllWhite = (event, context, callback) => {
  const scanParams = {
    TableName: 'whiteWines'
  };

  docClient.scan(scanParams, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data)
    }
  })
};
