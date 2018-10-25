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

exports.getAllRedWinesHandler = async (event, context, callback) => {
  const result = await getAllRedWines();
  callback(null, result);
};

exports.getAllWhiteWinesHandler = async (event, context, callback) => {
  const result = await getAllWhiteWines();
  callback(null, result);
};

exports.getRedWineByVarietalHandler = async (event, context, callback) => {
  const wine = makeValidWineObject(event);
  const result = await getRedWineByVarietal(wine);

  callback(null, result);
};

exports.getWhiteWineByVarietalHandler = async (event, context, callback) => {
  const wine = makeValidWineObject(event);
  const result = await getWhiteWineByVarietal(wine);

  callback(null, result);
};

exports.addRedWineHandler = async (event, context, callback) => {
  const wine = makeValidWineObject(event);
  const result = await addRedWine(wine);

  callback(null, result);
};

exports.addWhiteWineHandler = async (event, context, callback) => {
  const wine = makeValidWineObject(event);
  const result = await addWhiteWine(wine);

  callback(null, result);
};

exports.deleteRedWineHandler = async (event, context, callback) => {
  const wine = makeValidWineObject(event);
  const result = await deleteRedWine(wine);

  callback(null, result);
};

exports.deleteWhiteWineHandler = async (event, context, callback) => {
  const wine = makeValidWineObject(event);
  const result = await deleteWhiteWine(wine);

  callback(null, result);
};
