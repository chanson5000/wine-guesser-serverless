export const makeJsonProxyResponse = (statusCode, body) => ({
  statusCode: statusCode,
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
});

export const makeWineQueryParams = (table, varietal, world = null) => {
  if (world !== null) {
    return {
      TableName: table,
      KeyConditionExpression: 'varietal = :v and world = :w',
      ExpressionAttributeValues: {
        ':v': varietal,
        ':w': world,
      },
    };
  }
  return {
    TableName: table,
    KeyConditionExpression: 'varietal = :v',
    ExpressionAttributeValues: {
      ':v': varietal,
    },
  };
};

export const isNullOrUndef = object => object === null || object === undefined;

export const tryParameter = (parameters, key) => {
  if (isNullOrUndef(parameters)
      || isNullOrUndef(parameters[key])) {
    return null;
  }

  return parameters[key];
};
