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
import { errorProxyResponse, successProxyResponse } from './proxyResponseBuilder';

exports.getAllRedWinesHandler = async (event) => {
  try {
    return await successProxyResponse(getAllRedWines());
  } catch (e) {
    console.log(`Threw error for ${event}:`);
    console.log(e);
    return errorProxyResponse("Failed to retrieve results.");
  }
};

exports.getAllWhiteWinesHandler = async (event, context, callback) => {
  const whiteWinesArray = await getAllWhiteWines();
  callback(null, whiteWinesArray);
};

exports.getRedWineByVarietalHandler = async (event, context, callback) => {
  const redWineSearchParams = makeValidWineObject(event);
  const redWine = await getRedWineByVarietal(redWineSearchParams);

  callback(null, redWine);
};

exports.getWhiteWineByVarietalHandler = async (event, context, callback) => {
  const whiteWineSearchParams = makeValidWineObject(event);
  const whiteWine = await getWhiteWineByVarietal(whiteWineSearchParams);

  callback(null, whiteWine);
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
