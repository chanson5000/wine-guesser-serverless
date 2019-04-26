import { makeValidWineObject } from './util';
import WineController from 'WineController';

exports.getAllRedWinesHandler = async () => {
  return await WineController.getAllRedWines();
};

exports.getAllWhiteWinesHandler = async () => {
  return await WineController.getAllWhiteWines();
};

exports.getRedWineByVarietalHandler = async event => {
  return await WineController.getRedWineByVarietal(
    makeWineRequestObject(event)
  );
};

exports.getWhiteWineByVarietalHandler = async event => {
  return await WineController.getWhiteWineByVarietal(
    makeWineRequestObject(event)
  );
};

exports.addRedWineHandler = async (event) => {
  return await WineController.addRedWine(makeWineRequestObject(event));
};

exports.addWhiteWineHandler = async (event) => {
  return await WineController.addWhiteWine(makeWineRequestObject(event));
};

exports.deleteRedWineHandler = async (event) => {
  return await WineController.deleteRedWine(makeWineRequestObject(event));
};

exports.deleteWhiteWineHandler = async (event) => {
  return await WineController.deleteWhiteWhine(makeWineRequestObject(event));
};

const makeWineRequestObject = event => {
  const combinedParams = {
    ...event.queryStringParameters,
    ...event.pathParameters
  };

  let wine = {};

  for (const [key, value] in combinedParams) {
    wine = {
      ...wine,
      [decodeURIComponent(key)]: decodeURIComponent(value)
    };
  }

  return wine;
};
