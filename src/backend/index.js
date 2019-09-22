import * as WineController from './WineController';
import { makeValidWineObject } from './util'

exports.getAllRedWinesHandler = async function() {
  return await WineController.getAllRedWines();
};

exports.getAllWhiteWinesHandler = async function() {
  return await WineController.getAllWhiteWines();
};

exports.getRedWineByVarietalHandler = async function(event) {
  console.log('getRedWineByVarietalHandler>Receive event:');
  console.log(event);
  const wineRequest = makeValidWineObject(event);
  const result = await WineController.getRedWineByVarietal(
    wineRequest
  );
  console.log('getRedWineByVarietalHandler>Returned');
  console.log(result);
  return result;
};

exports.getWhiteWineByVarietalHandler = async function(event) {
  return await WineController.getWhiteWineByVarietal(
    makeValidWineObject(event)
  );
};

exports.addRedWineHandler = async function(event) {
  console.log('AddRedWineHandler>Receive event:');
  console.log(event);
  console.log('AddRedWineHandler>Make wine request object:');
  const wine = makeValidWineObject(event);
  console.log(wine);
  return await WineController.addRedWine(wine);
};

exports.addWhiteWineHandler = async function(event) {
  console.log('AddWhiteWineHandler>Receive event:');
  console.log(event);
  console.log('AddRedWineHandler>make wine request object:');
  const wine = makeValidWineObject(event);
  console.log(wine);
  return await WineController.addWhiteWine(wine);
};

exports.deleteRedWineHandler = async function(event) {
  return await WineController.deleteRedWine(makeValidWineObject(event));
};

exports.deleteWhiteWineHandler = async function(event) {
  return await WineController.deleteWhiteWhine(makeValidWineObject(event));
};
