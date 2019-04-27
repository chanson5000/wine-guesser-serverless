import Repository from './Repository';

class WineService {
  static async getAllRedWines() {
    return await getAllWines(true);
  }

  static async getAllWhiteWines() {
    return await getAllWines();
  }

  static async getRedWineByVarietal(wine) {
    return await getWineByVarietal(wine, true);
  }

  static async getWhiteWineByVarietal(wine) {
    return await getWineByVarietal(wine);
  }

  static async addRedwine(wine) {
    return await addWine(wine, true);
  }

  static async addWhiteWine(wine) {
    return await addWine(wine);
  }

  static async deleteRedWine(wine) {
    return await deleteWine(wine, true);
  }

  static async deleteWhiteWine(wine) {
    return await deleteWine(wine);
  }
}

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
  let result;
  if (isRedWine) {
    result = await Repository.findRedWineByVarietal(wine.varietal, wine.world);
  } else {
    result = await Repository.findWhiteWineByVarietal(
      wine.varietal,
      wine.world
    );
  }
  return result.data;
};

const addWine = async (wine, isRedWine = false) => {
  let result;
  if (isRedWine) {
    result = await Repository.putRedWine(wine);
  } else {
    result = await Repository.putWhiteWine(wine);
  }
  return result.data;
};

const deleteWine = async (wine, isRedWine = false) => {
  let result;
  if (isRedWine) {
    result = await Repository.deleteRedWine(wine);
  } else {
    result = await Repository.deleteWhiteWine(wine);
  }
  return result.data;
};

export default WineService;