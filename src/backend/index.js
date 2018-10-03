import {
  makeJsonProxyResponse,
  tryParameter,
  isNullOrUndef,
} from './util';
import { invalidRequest } from './staticProxyResponse';
import Repository from './repository';

const aws = require('aws-sdk');

aws.config.update({ region: 'us-east-2' });

exports.getAllRedWines = async (event, context, callback) => {
  const scanParams = {
    TableName: 'redWines',
  };

  const db = aws.DynamoDB;
  const repository = new Repository(db);

  const result = await Repository.findAllRedWines(scanParams);
  if (result.success) {
    const proxyResponse = makeJsonProxyResponse(200, result.response);
    callback(null, proxyResponse);
  } else {
    const proxyResponse = makeJsonProxyResponse(500, result.response);
    callback(null, proxyResponse);
  }
};

exports.doGetRedByVarietal = async (event, context, callback) => {
  if (isNullOrUndef(event) || isNullOrUndef(event.pathParameters)) {
    callback(null, invalidRequest);
  }

  const varietal = tryParameter(event.pathParameters, 'varietal');
  if (varietal === null) {
    callback(null, invalidRequest);
  }

  let world = tryParameter(event.pathParameters, 'world');
  if (world === null) {
    world = tryParameter(event.queryStringParameters);
  }

  const db = aws.DynamoDB;
  const repository = new Repository(db);

  let result;
  if (world === null) {
    result = await repository.findRedWine(varietal);
  } else {
    result = await repository.findRedWine(varietal, world);
  }

  if (result.success) {
    const proxyResponse = makeJsonProxyResponse(200, result.response);
    callback(null, proxyResponse);
  } else {
    const proxyResponse = makeJsonProxyResponse(500, result.response);
    callback(null, proxyResponse);
  }
};

exports.doPutRedWine = async (event, context, callback) => {
  const db = new aws.DynamoDB({ apiVersion: '2012-10-08' });

  if (isNullOrUndef(event) || isNullOrUndef(event.pathParameters)) {
    callback(null, invalidRequest);
  }

  const varietal = tryParameter(event.pathParameters, 'varietal');
  if (varietal === null) {
    callback(null, invalidRequest);
  }

  let world = tryParameter(event.pathParameters, 'world');
  if (world === null) {
    world = tryParameter(event.queryStringParameters);
    if (world === null) {
      callback(null, invalidRequest);
    }
  }

  if (!(world === 'old' || world === 'new')) {
    callback(null, invalidRequest);
  }

  // Change this to work with a schema.
  const params = {
    TableName: 'redWines',
    Item: {
      varietal: { S: varietal },
      world: { S: world },
    },
  };

  const repository = new Repository(db);
  const result = await repository.putRedWine(params);

  if (result.success) {
    const successMessage = { successMessage: `Added ${varietal} to the database.` };
    const proxyResponse = makeJsonProxyResponse(200, successMessage);
    callback(null, proxyResponse);
  } else {
    const proxyResponse = makeJsonProxyResponse(500, result.response);
    callback(null, proxyResponse);
  }
};

exports.doDeleteRedWine = async (event, context, callback) => {
  if (isNullOrUndef(event) || isNullOrUndef(event.pathParameters)) {
    callback(null, invalidRequest);
  }

  const varietal = tryParameter(event.pathParameters, 'varietal');
  if (varietal === null) {
    callback(null, invalidRequest);
  }

  let world = tryParameter(event.pathParameters, 'world');
  if (world === null) {
    world = tryParameter(event.queryStringParameters);
    if (world === null) {
      callback(null, invalidRequest);
    }
  }

  const db = new aws.DynamoDB();
  const repository = new Repository(db);

  const result = await repository.deleteRedWine(varietal, world);

  if (result.success) {
    const successMessage = { successMessage: `Removed ${varietal} from the database.` };
    const proxyResponse = makeJsonProxyResponse(200, successMessage);
    callback(null, proxyResponse);
  } else {
    const proxyResponse = makeJsonProxyResponse(500, result.response);
    callback(null, proxyResponse);
  }
};
