import * as WineController from './WineController';
import { makeValidWineObject } from './util';

exports.getAllRedWinesHandler = async function() {
  console.debug('getAllRedWinesHandler');
  const result = await WineController.getAllRedWines();
  console.debug(result);
  return result;
};

exports.getAllWhiteWinesHandler = async function() {
  console.debug('getAllWhiteWinesHandler');
  const result = await WineController.getAllWhiteWines();
  console.debug(result)
  return result;
};

exports.getRedWineByVarietalHandler = async function(event) {
  console.debug('getRedWineByVarietalHandler>Receive event:');
  console.debug(event);
  const wineRequest = makeValidWineObject(event);
  const result = await WineController.getRedWineByVarietal(
    wineRequest
  );
  console.debug('getRedWineByVarietalHandler>Returned');
  console.debug(result);
  return result;
};

exports.getWhiteWineByVarietalHandler = async function(event) {
  return await WineController.getWhiteWineByVarietal(
    makeValidWineObject(event)
  );
};

exports.addRedWineHandler = async function(event) {
  console.debug('AddRedWineHandler>Receive event:');
  console.debug(event);
  console.debug('AddRedWineHandler>Make wine request object:');
  const wine = makeValidWineObject(event);
  console.debug(wine);
  return await WineController.addRedWine(wine);
};

exports.addWhiteWineHandler = async function(event) {
  console.debug('AddWhiteWineHandler>Receive event:');
  console.debug(event);
  console.debug('AddRedWineHandler>make wine request object:');
  const wine = makeValidWineObject(event);
  console.debug(wine);
  return await WineController.addWhiteWine(wine);
};

exports.deleteRedWineHandler = async function(event) {
  return await WineController.deleteRedWine(makeValidWineObject(event));
};

exports.deleteWhiteWineHandler = async function(event) {
  return await WineController.deleteWhiteWhine(makeValidWineObject(event));
};
