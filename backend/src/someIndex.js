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
  });
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

exports.getWhiteByVarietal = (event, context, callback) => {
  const varietal = event.varietal;
  const world = event.world;

  const queryParams = {
    TableName: 'whiteWines',
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


// docClient.scan(scanParams, (err, data) => {
//   if (err) {
//     console.log(err);
//     const proxyResponse = makeJsonProxyResponse(500, err);
//     callback(null, proxyResponse);
//   }
//   else {
//     const proxyResponse = makeJsonProxyResponse(200, data.Items);
//     callback(null, proxyResponse);
//   }
// });

// let queryParams;
// if (worldParam === null) {
//   queryParams = makeWineQueryParams(varietalParam);
// }
// else {
//   queryParams = makeWineQueryParams(varietalParam, worldParam);
// }


// db.query(queryParams, (err, data) => {
//   if (err) {
//     console.log(err);
//     callback(err, null);
//   }
//   else {
//     const items = data['Items'];
//     if (items.length === 0) {
//       callback(null, invalidRequest);
//     }
//     else {
//       const proxyResponse = makeJsonProxyResponse(200, data);
//       callback(null, proxyResponse);
//     }
//   }
// });

// Call DynamoDB to add the item to the table
// db.putItem(params, (err, data) => {
//   if (err) {
//     callback(err, null);
//   }
//   else {
//     const successMessage = { successMessage: `Added ${varietal} to the database.` };
//     const proxyResponse = makeJsonProxyResponse(200, successMessage);
//
//     callback(null, proxyResponse);
//   }
// });
