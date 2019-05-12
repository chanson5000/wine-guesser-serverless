import WineController from './WineController';
import { makeValidWineObject } from './util'

exports.getAllRedWinesHandler = async () => {
  return await WineController.getAllRedWines();
};

exports.getAllWhiteWinesHandler = async () => {
  return await WineController.getAllWhiteWines();
};

exports.getRedWineByVarietalHandler = async event => {
  const wineRequest = makeValidWineObject(event);
  return await WineController.getRedWineByVarietal(
    wineRequest
  );
};

exports.getWhiteWineByVarietalHandler = async event => {
  return await WineController.getWhiteWineByVarietal(
    makeValidWineObject(event)
  );
};

exports.addRedWineHandler = async (event) => {
  console.log('AddRedWineHandler>Receive Event:');
  console.log(event);
  console.log('AddRedWineHandler>Make wine request object:');
  const wine = makeValidWineObject(event);
  console.log(wine);
  return await WineController.addRedWine(wine);
};

exports.addWhiteWineHandler = async (event) => {
  return await WineController.addWhiteWine(makeValidWineObject(event));
};

exports.deleteRedWineHandler = async (event) => {
  return await WineController.deleteRedWine(makeValidWineObject(event));
};

exports.deleteWhiteWineHandler = async (event) => {
  return await WineController.deleteWhiteWhine(makeValidWineObject(event));
};
