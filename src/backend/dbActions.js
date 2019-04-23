import Repository from './Repository';
import {
  errorProxyResponse,
  invalidRequestProxyResponse,
  successProxyResponse
} from './proxyResponseBuilder';

export const getAllRedWines = async () => await getAllWines(true);
export const getAllWhiteWines = async () => await getAllWines();
export const getRedWineByVarietal = async wine =>
  await getWineByVarietal(wine, true);
export const getWhiteWineByVarietal = async wine =>
  await getWineByVarietal(wine);
export const addRedWine = async wine => addWine(wine, true);
export const addWhiteWine = async wine => addWine(wine);
export const deleteRedWine = async wine => await deleteWine(wine, true);
export const deleteWhiteWine = async wine => await deleteWine(wine);

const getAllWines = async (isRedWine = false) => {
  let result;

  if (isRedWine) {
    result = await Repository.findAllRedWines();
  } else {
    result = await Repository.findAllWhiteWines();
  }
  return result.data;
};

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
    return successProxyResponse(result.data);
  } else {
    return errorProxyResponse(result.data);
  }
};

const addWine = async (wine, isRedWine = false) => {
  if (!validWineParams(wine)) {
    return invalidRequestProxyResponse;
  }

  let result;
  if (isRedWine) {
    result = await Repository.putRedWine(wine);
  } else {
    result = await Repository.putWhiteWine(wine);
  }

  if (result.success) {
    // TODO: Replace with custom data message.
    return successProxyResponse(result.data);
  } else {
    return errorProxyResponse(result.data);
  }
};

const deleteWine = async (wine, isRedWine = false) => {
  if (!validWineParams(wine)) {
    return invalidRequestProxyResponse;
  }

  let result;
  if (isRedWine) {
    result = await Repository.deleteRedWine(wine);
  } else {
    result = await Repository.deleteWhiteWine(wine);
  }

  if (result.success) {
    // TODO: Replace with custom data message.
    return successProxyResponse(result.data);
  } else {
    return errorProxyResponse(result.data);
  }
};

const validWineParams = wine => {
  const world = wine.world;
  return !(
    wine.varietal === null ||
    world === null ||
    !(world === 'old' || world === 'new')
  );
};
