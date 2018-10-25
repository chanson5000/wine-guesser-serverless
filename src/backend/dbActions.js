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

export const getRedWineByVarietal = async wine =>
  await getWineByVarietal(wine, true);

export const getWhiteWineByVarietal = async wine =>
  await getWineByVarietal(wine);

const getWineByVarietal = async (wine, isRedWine = false) => {
  if (wine.varietal === null) {
    return invalidRequestProxyResponse;
  }

  let result;
  if (isRedWine) {
    result = await Repository.findRedWineByVarietal(wine.varietal, wine.world);
  } else {
    result = await Repository.findWhiteWineByVarietal(
      wine.varietal,
      wine.world
    );
  }

  if (result.success) {
    return successProxyResponse(result.response);
  } else {
    return errorProxyResponse(result.response);
  }
};

export const addRedWine = async wine => addWine(wine, true);

export const addWhiteWine = async wine => addWine(wine);

const addWine = async (wine, isRedWine = false) => {
  if (!validAddWineParams(wine)) {
    return invalidRequestProxyResponse;
  }

  let result;
  if (isRedWine) {
    result = await Repository.putRedWine(wine);
  } else {
    result = await Repository.putWhiteWine(wine);
  }

  if (result.success) {
    // TODO: Replace with custom response message.
    return successProxyResponse(result.response);
  } else {
    return errorProxyResponse(result.response);
  }
};

export const deleteRedWine = async wine => await deleteWine(wine, true);

export const deleteWhiteWine = async wine => await deleteWine(wine);

const deleteWine = async (wine, isRedWine = false) => {
  if (wine.varietal === null) {
    return invalidRequestProxyResponse;
  }

  let result;
  if (isRedWine) {
    result = await Repository.deleteRedWine(wine);
  } else {
    result = await Repository.deleteWhiteWine(wine);
  }

  if (result.success) {
    // TODO: Replace with custom response message.
    return successProxyResponse(result.response);
  } else {
    return errorProxyResponse(result.response);
  }
};

const validAddWineParams = wine => {
  const world = wine.world;
  return !(
    wine.varietal === null ||
    world === null ||
    !(world === 'old' || world === 'new')
  );
};
