import { makeValidWineObject } from './util';
import {
  getAllRedWines,
  getAllWhiteWines,
  getRedWineByVarietal,
  getWhiteWineByVarietal,
  addRedWine,
  addWhiteWine,
  deleteRedWine,
  deleteWhiteWine
} from './dbActions';
import { errorProxyResponse, invalidRequestProxyResponse, successProxyResponse } from './proxyResponseBuilder';

exports.getAllRedWinesHandler = async (event) => {
  try {
    const response = await getAllRedWines();
    return successProxyResponse(response);
  } catch (e) {
    return handleGenericFailure(e, event);
  }
};

exports.getAllWhiteWinesHandler = async (event) => {
  try {
    const response = await getAllWhiteWines();
    return successProxyResponse(response);
  } catch (e) {
    return handleGenericFailure(e, event);
  }
};

exports.getRedWineByVarietalHandler = async (event) => {
  const redWineSearchParams = makeValidWineObject(event);
  if (!redWineSearchParams.varietal) {
    return invalidRequestProxyResponse;
  }
  try {
    const response = await getRedWineByVarietal(redWineSearchParams);
    return successProxyResponse(response);
  } catch (e) {
    return handleGenericFailure(e, event);
  }
};

exports.getWhiteWineByVarietalHandler = async (event) => {
  const whiteWineSearchParams = makeValidWineObject(event);
  if (!whiteWineSearchParams.varietal) {
    return invalidRequestProxyResponse;
  }
  try {
    const response = await getWhiteWineByVarietal(whiteWineSearchParams);
    return successProxyResponse(response);
  } catch (e) {
    return handleGenericFailure(e, event);
  }
};

exports.addRedWineHandler = async (event, context, callback) => {
  const redWine = makeValidWineObject(event);
  const operationResult = await addRedWine(redWine);

  callback(null, operationResult);
};

exports.addWhiteWineHandler = async (event, context, callback) => {
  const whiteWine = makeValidWineObject(event);
  const operationResult = await addWhiteWine(whiteWine);

  callback(null, operationResult);
};

exports.deleteRedWineHandler = async (event, context, callback) => {
  const redWineDeleteParams = makeValidWineObject(event);
  const operationResult = await deleteRedWine(redWineDeleteParams);

  callback(null, operationResult);
};

exports.deleteWhiteWineHandler = async (event, context, callback) => {
  const whiteWineDeleteParams = makeValidWineObject(event);
  const operationResult = await deleteWhiteWine(whiteWineDeleteParams);

  callback(null, operationResult);
};

const handleGenericFailure = (error, event) => {
  console.log(`Threw error for ${event}:`);
  console.log(error);
  return errorProxyResponse('Failed to retrieve results.');
};
