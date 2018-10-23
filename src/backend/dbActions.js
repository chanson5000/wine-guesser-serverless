import Repository from './Repository';
import {
  successProxyResponse,
  errorProxyResponse,
  invalidRequestProxyResponse
} from './proxyResponseBuilder';

export const getAllRedWines = async () => await getAllWines(true);

export const getAllWhiteWines = async () => await getAllWines();

const getAllWines = async (isRedWine = false) => {
  let result;
  if (isRedWine) {
    result = await Repository.findAllRedWines();
  } else {
    result = await Repository.findAllWhiteWines();
  }

  if (result.success) {
    return successProxyResponse(result.response);
  } else {
    return errorProxyResponse(result.response);
  }
};

export const getRedWineByVarietal = async (varietal, world = null) =>
  await getWineByVarietal({ varietal: varietal, world: world }, true);

export const getWhiteWineByVarietal = async (varietal, world = null) =>
  await getWineByVarietal({ varietal: varietal, world: world });

const getWineByVarietal = async (params, isRedWine = false) => {
  if (params.varietal === null) {
    return invalidRequestProxyResponse;
  }

  let result;
  if (isRedWine) {
    result = await Repository.findRedWineByVarietal(
      params.varietal,
      params.world
    );
  } else {
    result = await Repository.findWhiteWineByVarietal(
      params.varietal,
      params.world
    );
  }

  if (result.success) {
    return successProxyResponse(result.response);
  } else {
    return errorProxyResponse(result.response);
  }
};

export const addRedWine = async params => addWine(params, true);

export const addWhiteWine = async params => addWine(params);

const addWine = async (params, isRedWine = false) => {
  if (!validAddWineParams(params)) {
    return invalidRequestProxyResponse;
  }

  let result;
  if (isRedWine) {
    result = await Repository.putRedWine(params);
  } else {
    result = await Repository.putWhiteWine(params);
  }

  if (result.success) {
    // TODO: Replace with custom response message.
    return successProxyResponse(result.response);
  } else {
    return errorProxyResponse(result.response);
  }
};

export const deleteRedWine = async (varietal, world = null) =>
  await deleteWine({ varietal: varietal, world: world }, true);

export const deleteWhiteWine = async (varietal, world = null) =>
  await deleteWine({ varietal: varietal, world: world });

const deleteWine = async (params, isRedWine = false) => {
  if (params.varietal === null) {
    return invalidRequestProxyResponse;
  }

  let result;
  if (isRedWine) {
    result = await Repository.deleteRedWine(params.varietal, params.world);
  } else {
    result = await Repository.deleteWhiteWine(params.varietal, params.world);
  }

  if (result.success) {
    // TODO: Replace with custom response message.
    return successProxyResponse(result.response);
  } else {
    return errorProxyResponse(result.response);
  }
};

const validAddWineParams = params => {
  const world = params.world;
  return !(
    params.varietal === null ||
    world === null ||
    !(world === 'old' || world === 'new')
  );
};
