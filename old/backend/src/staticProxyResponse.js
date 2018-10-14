export const invalidRequest = {
  statusCode: 400,
  body: JSON.stringify({errorMessage: 'Invalid or malformed request.'}),
  headers: {
    'Content-Type': 'application/json'
  }
};

