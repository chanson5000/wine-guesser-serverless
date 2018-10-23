const commonHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json'
};

export const invalidRequestProxyResponse = {
  statusCode: 400,
  body: JSON.stringify({ message: 'Invalid request. Invalid Parameters.' }),
  headers: commonHeaders
};

export const successProxyResponse = response => ({
  statusCode: response.statusCode,
  body: JSON.stringify(response.body),
  headers: commonHeaders
});

export const errorProxyResponse = response => ({
  // TODO: Add some logging of errors.
  statusCode: response.statusCode,
  body: JSON.stringify(response.body),
  headers: commonHeaders
});
