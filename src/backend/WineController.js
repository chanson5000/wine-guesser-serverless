import {
  errorProxyResponse,
  invalidRequestProxyResponse,
  successProxyResponse
} from './proxyResponseBuilder';
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

class WineController {
  static async getAllRedWines() {
    try {
      const result = await getAllRedWines();
      return successProxyResponse(result);
    } catch (e) {
      return handleGenericFailure(e, 'getAllRedWines');
    }
  }

  static async getAllWhiteWines() {
    try {
      const result = await getAllWhiteWines();
      return successProxyResponse(result);
    } catch (e) {
      return handleGenericFailure(e, 'getAllWhiteWines');
    }
  }

  static async getRedWineByVarietal(request) {
    if (!request.varietal) {
      return invalidRequestProxyResponse;
    }
    try {
      const result = await getRedWineByVarietal(request);
      return successProxyResponse(result);
    } catch (e) {
      return handleGenericFailure(e, 'getRedWineByVarietal');
    }
  }

  static async getWhiteWineByVarietal(request) {
    if (!request.varietal) {
      return invalidRequestProxyResponse;
    }
    try {
      const result = await getWhiteWineByVarietal(request);
      return successProxyResponse(result);
    } catch (e) {
      return handleGenericFailure(e, 'getWhiteWineByVarietal');
    }
  }

  static async addRedWine(request) {
    if (!request.varietal || !request.world) {
      return invalidRequestProxyResponse;
    }
    try {
      const result = await addRedWine(request);
      return successProxyResponse(result);
    } catch (e) {
      return handleGenericFailure(e, 'addRedWine');
    }
  }

  static async addWhiteWine(request) {
    if (!request.varietal || !request.world) {
      return invalidRequestProxyResponse;
    }
    try {
      const result = await addWhiteWine(request);
      return successProxyResponse(result);
    } catch (e) {
      return handleGenericFailure(e, 'addWhiteWine');
    }
  }

  static async deleteRedWine(request) {
    if (!request.varietal || !request.world) {
      return invalidRequestProxyResponse;
    }
    try {
      const result = await deleteRedWine(request);
      return successProxyResponse(result);
    } catch (e) {
      return handleGenericFailure(e, 'deleteRedWine')
    }
  }

  static async deleteWhiteWhine(request) {
    if (!request.varietal || !request.world) {
      return invalidRequestProxyResponse;
    }
    try {
      const result = await deleteWhiteWine(request);
      return successProxyResponse(result);
    } catch (e) {
      return handleGenericFailure(e, 'deleteWhiteWine');
    }
  }
}

const handleGenericFailure = (error, event) => {
  console.log(`Threw error for ${event}:`);
  console.log(error);
  return errorProxyResponse('Failed to retrieve results.');
};

export default WineController;
