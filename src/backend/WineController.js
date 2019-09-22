import {
  errorProxyResponse,
  invalidRequestProxyResponse,
  successProxyResponse
} from './proxyResponseBuilder';
import WineService from './WineService';

export async function getAllRedWines() {
  try {
    const result = await WineService.getAllRedWines();
    return successProxyResponse(result);
  } catch (e) {
    return handleGenericFailure(e, 'getAllRedWines');
  }
}

export async function getAllWhiteWines() {
  try {
    const result = await WineService.getAllWhiteWines();
    return successProxyResponse(result);
  } catch (e) {
    return handleGenericFailure(e, 'getAllWhiteWines');
  }
}

export async function getRedWineByVarietal(request) {
  if (!request.varietal || !request.world) {
    return invalidRequestProxyResponse;
  }
  try {
    const result = await WineService.getRedWineByVarietal(request);
    return successProxyResponse(result);
  } catch (e) {
    return handleGenericFailure(e, 'getRedWineByVarietal');
  }
}

export async function getWhiteWineByVarietal(request) {
  if (!request.varietal || !request.world) {
    return invalidRequestProxyResponse;
  }
  try {
    const result = await WineService.getWhiteWineByVarietal(request);
    return successProxyResponse(result);
  } catch (e) {
    return handleGenericFailure(e, 'getWhiteWineByVarietal');
  }
}

export async function addRedWine(request) {
  if (!request.varietal || !request.world) {
    return invalidRequestProxyResponse;
  }
  try {
    const result = await WineService.addRedWine(request);
    return successProxyResponse(result);
  } catch (e) {
    return handleGenericFailure(e, 'addRedWine');
  }
}

export async function addWhiteWine(request) {
  if (!request.varietal || !request.world) {
    return invalidRequestProxyResponse;
  }
  try {
    const result = await WineService.addWhiteWine(request);
    return successProxyResponse(result);
  } catch (e) {
    return handleGenericFailure(e, 'addWhiteWine');
  }
}

export async function deleteRedWine(request) {
  if (!request.varietal || !request.world) {
    return invalidRequestProxyResponse;
  }
  try {
    const result = await WineService.deleteRedWine(request);
    return successProxyResponse(result);
  } catch (e) {
    return handleGenericFailure(e, 'deleteRedWine');
  }
}

export async function deleteWhiteWhine(request) {
  if (!request.varietal || !request.world) {
    return invalidRequestProxyResponse;
  }
  try {
    const result = await WineService.deleteWhiteWine(request);
    return successProxyResponse(result);
  } catch (e) {
    return handleGenericFailure(e, 'deleteWhiteWine');
  }
}

function handleGenericFailure(error, event) {
  console.log(`Threw error for ${event}:`);
  console.log(error);
  return errorProxyResponse('Failed to retrieve results.');
}
