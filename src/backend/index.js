import WineController from './WineController';

exports.getAllRedWinesHandler = async () => {
  return await WineController.getAllRedWines();
};

exports.getAllWhiteWinesHandler = async () => {
  return await WineController.getAllWhiteWines();
};

exports.getRedWineByVarietalHandler = async event => {
  return await WineController.getRedWineByVarietal(
    makeWineRequestObject(event)
  );
};

exports.getWhiteWineByVarietalHandler = async event => {
  return await WineController.getWhiteWineByVarietal(
    makeWineRequestObject(event)
  );
};

exports.addRedWineHandler = async (event) => {
  console.log('Add Red Wine Event:');
  console.log(event);
  const wineRequestObject = makeWineRequestObject(event);
  console.log('Request Object:');
  console.log(wineRequestObject);
  return await WineController.addRedWine(wineRequestObject);
};

exports.addWhiteWineHandler = async (event) => {
  return await WineController.addWhiteWine(makeWineRequestObject(event));
};

exports.deleteRedWineHandler = async (event) => {
  console.log('Delete Red Wine Event');
  console.log(event);
  const wineRequestObject = makeWineRequestObject(event);
  console.log('Request Object:');
  console.log(wineRequestObject);
  return await WineController.deleteRedWine(wineRequestObject);
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
