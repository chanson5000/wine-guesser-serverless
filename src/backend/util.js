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

  return decodeURI(parameters[key]);
};

export const parseValidEventParams = event => {
  if (isNullOrUndef(event) || isNullOrUndef(event.pathParameters)) {
    return {varietal: null, world: null};
  }

  const varietal = tryParameter(event.pathParameters, 'varietal');
  if (varietal === null) {
    return {varietal: null, world: null};
  }

  let world = tryParameter(event.pathParameters, 'world');
  if (world === null) {
    world = tryParameter(event.queryStringParameters, 'world');
  }

  return {
    varietal: varietal,
    world: world
  };
};
