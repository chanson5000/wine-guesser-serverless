const commonHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json'
};

export function invalidRequestProxyResponse() {
  return {
    statusCode: 400,
    body: JSON.stringify({ message: 'Invalid request. Invalid parameters.' }),
    headers: commonHeaders
  };
}

export function successProxyResponse(response) {
  return {
    statusCode: 200,
    body: JSON.stringify(response),
    headers: commonHeaders
  };
}

// TODO: Add logging of errors.
export function errorProxyResponse(response) {
  return {
    statusCode: 500,
    body: JSON.stringify(response),
    headers: commonHeaders
  };
}
