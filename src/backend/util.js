export const makeWineQueryParams = (table, varietal, world = null) => {
  if (world !== null) {
    return {
      TableName: table,
      KeyConditionExpression: 'varietal = :v and world = :w',
      ExpressionAttributeValues: {
        ':v': varietal,
        ':w': world
      }
    };
  }
  return {
    TableName: table,
    KeyConditionExpression: 'varietal = :v',
    ExpressionAttributeValues: {
      ':v': varietal
    }
  };
};

export const isNullOrUndef = object => object === null || object === undefined;

export const tryParameter = (parameters, key) => {
  if (isNullOrUndef(parameters) || isNullOrUndef(parameters[key])) {
    return null;
  }

  return decodeURIComponent(parameters[key]);
};

export const makeValidWineObject = event => {
  const combinedParams = {
    ...event.queryStringParameters,
    ...event.pathParameters
  };

  let wine = {};

  for (const key in combinedParams) {
    wine = {
      ...wine,
      [decodeURIComponent(key)]: decodeURIComponent(combinedParams[key])
    };
  }

  if (wine.varietal === undefined) {
    wine.varietal = null;
  }
  if (wine.world === undefined) {
    wine.world = null;
  }

  return wine;
};
