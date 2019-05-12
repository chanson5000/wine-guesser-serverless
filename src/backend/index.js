import WineController from './WineController';

exports.getAllRedWinesHandler = async () => {
  return await WineController.getAllRedWines();
};

exports.getAllWhiteWinesHandler = async () => {
  return await WineController.getAllWhiteWines();
};

exports.getRedWineByVarietalHandler = async event => {
  const wineRequest = makeWineRequestObject(event);
  return await WineController.getRedWineByVarietal(
    wineRequest
  );
};

exports.getWhiteWineByVarietalHandler = async event => {
  return await WineController.getWhiteWineByVarietal(
    makeWineRequestObject(event)
  );
};

exports.addRedWineHandler = async (event) => {
  console.log('AddRedWineHandler>Receive Event:');
  console.log(event);
  console.log('AddRedWineHandler>Make wine request object:');
  const wine = makeWineRequestObject(event);
  console.log(wine)
  return await WineController.addRedWine(wine);
};

exports.addWhiteWineHandler = async (event) => {
  return await WineController.addWhiteWine(makeWineRequestObject(event));
};

exports.deleteRedWineHandler = async (event) => {
  return await WineController.deleteRedWine(makeWineRequestObject(event));
};

exports.deleteWhiteWineHandler = async (event) => {
  return await WineController.deleteWhiteWhine(makeWineRequestObject(event));
};

const makeWineRequestObject = event => {
  const combinedParams = {
    ...event.queryStringParameters,
    ...event.pathParameters
  };

  let wine = {};

  for (const key in combinedParams) {
    wine = {
      ...wine,
      [decodeURIComponent(key)]: decodeURIComponent(combinedParams[key])
    };
  }

  return wine;
};
