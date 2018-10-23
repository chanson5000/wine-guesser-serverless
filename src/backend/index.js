import { parseValidEventParams } from './util';
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
  const params = parseValidEventParams(event);
  const result = await getRedWineByVarietal(params.varietal, params.world);

  callback(null, result);
};

exports.getWhiteWineByVarietalHandler = async (event, context, callback) => {
  const params = parseValidEventParams(event);
  const result = await getWhiteWineByVarietal(params.varietal, params.world);

  callback(null, result);
};

exports.addRedWineHandler = async (event, context, callback) => {
  const params = parseValidEventParams(event);
  const result = await addRedWine(params);

  callback(null, result);
};

exports.addWhiteWineHandler = async (event, context, callback) => {
  const params = parseValidEventParams(event);
  const result = await addWhiteWine(params);

  callback(null, result);
};

exports.deleteRedWineHandler = async (event, context, callback) => {
  const params = parseValidEventParams(event);
  const result = await deleteRedWine(params);

  callback(null, result);
};

exports.deleteWhiteWineHandler = async (event, context, callback) => {
  const params = parseValidEventParams(event);
  const result = await deleteWhiteWine(params);

  callback(null, result);
};
