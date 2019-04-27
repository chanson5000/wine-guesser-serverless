import {
  errorProxyResponse,
  invalidRequestProxyResponse,
  successProxyResponse
} from './proxyResponseBuilder';
import WineService from './WineService';

class WineController {
  static async getAllRedWines() {
    try {
      const result = WineService.getAllRedWines();
      return successProxyResponse(result);
    } catch (e) {
      return handleGenericFailure(e, 'getAllRedWines');
    }
  }

  static async getAllWhiteWines() {
    try {
      const result = await WineService.getAllWhiteWines();
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
      const result = await WineService.getRedWineByVarietal(request);
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
      const result = await WineService.getWhiteWineByVarietal(request);
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
      const result = await WineService.addRedWine(request);
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
      const result = await WineService.addWhiteWine(request);
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
      const result = await WineService.deleteRedWine(request);
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
      const result = await WineService.deleteWhiteWine(request);
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
