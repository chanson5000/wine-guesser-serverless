const aws = require('aws-sdk');
aws.config.update({ region: 'us-east-2' });
const docClient = new aws.DynamoDB.DocumentClient();
const db = new aws.DynamoDB({ apiVersion: '2012-10-08' });
const redWineTable = 'redWines';
const whiteWineTable = 'whiteWines';

class Repository {
  static async findAllRedWines() {
    return await scanWines({ TableName: redWineTable });
  }

  static async findAllWhiteWines() {
    return await scanWines({ TableName: whiteWineTable });
  }

  static async findRedWineByVarietal(wine) {
    return await queryWines(
      makeWineQueryParams(redWineTable, wine.varietal, wine.world)
    );
  }

  static async findWhiteWineByVarietal(wine) {
    return await queryWines(
      makeWineQueryParams(whiteWineTable, wine.varietal, wine.world)
    );
  }

  static async putRedWine(wine) {
    return await putWine(wine, true);
  }

  static async putWhiteWine(wine) {
    return await putWine(wine);
  }

  static async deleteRedWine(wine) {
    return await deleteWine(makeDeleteWineParams(wine, true));
  }

  static async deleteWhiteWine(wine) {
    return await deleteWine(makeDeleteWineParams(wine));
  }
}

const scanWines = async scanParams => {
  const result = await docClient.scan(scanParams).promise();
  return result.Items;
};

const queryWines = async queryParams => {
  const result = await docClient.query(queryParams).promise();
  return result.Items;
};

const putWine = async (wine, isRedWine = false) => {
  console.log('Repository>Got for put:');
  console.log(wine);

  const type = makeWineTypeParams(wine, isRedWine);
  const nonFruit = makeNonFruitParams(wine, isRedWine);
  const additionalParams = makeUniqueParams(wine, isRedWine);

  let putParams = {
    Item: {
      varietal: { S: wine.varietal },
      world: { S: wine.world },
      acidity: { S: wine.acidity },
      alcohol: { S: wine.alcohol },
      climate: { S: wine.climate },
      color: { S: wine.color },
      condition: {
        M: {
          tart: {
            BOOL: wine.condition.tart
          },
          ripe: {
            BOOL: wine.condition.ripe
          },
          overripe: {
            BOOL: wine.condition.overripe
          },
          baked: {
            BOOL: wine.condition.baked
          }
        }
      },
      ...type,
      ...nonFruit,
      ...additionalParams
    }
  };

  if (isRedWine) {
    putParams.TableName = redWineTable;
  } else {
    putParams.TableName = whiteWineTable;
  }
  console.log('Repository>Putting Item:');
  console.log(putParams);
  return await db.putItem(putParams).promise();
};

const deleteWine = async params => {
  return await db.deleteItem(params).promise();
};

const makeWineQueryParams = (table, varietal, world = null) => {
  if (world !== null) {
    return {
      TableName: table,
      KeyConditionExpression: 'varietal = :v and world = :w',
      ExpressionAttributeValues: {
        ':v': varietal,
        ':w': world
      }
    };
  }
  return {
    TableName: table,
    KeyConditionExpression: 'varietal = :v',
    ExpressionAttributeValues: {
      ':v': varietal
    }
  };
};

const makeDeleteWineParams = (wine, isRedWine = false) => {
  let params = {
    Key: { varietal: { S: wine.varietal }, world: { S: wine.world } }
  };

  if (isRedWine) {
    return {
      TableName: redWineTable,
      ...params
    };
  } else {
    return {
      TableName: whiteWineTable,
      ...params
    };
  }
};

const makeUniqueParams = (wine, isRedWine = false) => {
  if (isRedWine) {
    return {
      tannin: { S: wine.tannin }
    };
  } else {
    return {
      sweetness: { S: wine.sweetness }
    };
  }
};

const makeWineTypeParams = (wine, isRedWine = false) => {
  if (isRedWine) {
    return {
      type: {
        M: {
          red: {
            BOOL: wine.type.red
          },
          black: {
            BOOL: wine.type.black
          },
          blue: {
            BOOL: wine.type.blue
          }
        }
      }
    };
  } else {
    return {
      type: {
        M: {
          applePear: {
            BOOL: wine.type.applePear
          },
          citrus: {
            BOOL: wine.type.citrus
          },
          stone: {
            BOOL: wine.type.stone
          },
          tropical: {
            BOOL: wine.type.tropical
          }
        }
      }
    };
  }
};

const makeNonFruitParams = (wine, isRedWine) => {
  if (isRedWine) {
    return {
      nonFruit: {
        M: {
          floral: {
            BOOL: wine.nonFruit.floral
          },
          vegetalPyrazine: {
            BOOL: wine.nonFruit.vegetalPyrazine
          },
          vegetalTomato: {
            BOOL: wine.nonFruit.vegetalTomato
          },
          herbalTobacco: {
            BOOL: wine.nonFruit.herbalTobacco
          },
          herbalMint: {
            BOOL: wine.nonFruit.herbalMint
          },
          herbalThyme: {
            BOOL: wine.nonFruit.herbalThyme
          },
          herbalTea: {
            BOOL: wine.nonFruit.herbalTea
          },
          herbalOregano: {
            BOOL: wine.nonFruit.herbalOregano
          },
          herbalDried: {
            BOOL: wine.nonFruit.herbalDried
          },
          spicePepper: {
            BOOL: wine.nonFruit.spicePepper
          },
          spiceAnise: {
            BOOL: wine.nonFruit.spiceAnise
          },
          spiceOther: {
            BOOL: wine.nonFruit.spiceOther
          },
          coffee: {
            BOOL: wine.nonFruit.coffee
          },
          cocoa: {
            BOOL: wine.nonFruit.cocoa
          },
          game: {
            BOOL: wine.nonFruit.game
          },
          smoke: {
            BOOL: wine.nonFruit.smoke
          },
          balsamic: {
            BOOL: wine.nonFruit.balsamic
          },
          carbonicMaceration: {
            BOOL: wine.nonFruit.carbonicMaceration
          },
          volatileAcidity: {
            BOOL: wine.nonFruit.volatileAcidity
          },
          oxidization: {
            BOOL: wine.nonFruit.oxidization
          },
          organic: {
            BOOL: wine.nonFruit.organic
          },
          inorganic: {
            BOOL: wine.nonFruit.inorganic
          },
          oak: {
            BOOL: wine.nonFruit.oak
          }
        }
      }

    };
  } else {
    return {
      nonFruit: {
        M: {
          fruitBlossoms: {
            BOOL: wine.type.fruitBlossoms
          },
          redFlowers: {
            BOOL: wine.type.redFlowers
          },
          hay: {
            BOOL: wine.type.hay
          },
          herbalFresh: {
            BOOL: wine.type.herbalFresh
          },
          chive: {
            BOOL: wine.type.chive
          },
          herbalDried: {
            BOOL: wine.type.herbalDried
          },
          herbalSage: {
            BOOL: wine.type.herbalSage
          },
          herbalTea: {
            BOOL: wine.type.herbalTea
          },
          vegetalPyrazine: {
            BOOL: wine.type.vegetalPyrazine
          },
          spice: {
            BOOL: wine.type.spice
          },
          terpene: {
            BOOL: wine.type.terpene
          },
          wax: {
            BOOL: wine.type.wax
          },
          soap: {
            BOOL: wine.type.soap
          },
          oysterShell: {
            BOOL: wine.type.oysterShell
          },
          botrytis: {
            BOOL: wine.type.botrytis
          },
          oxidative: {
            BOOL: wine.type.oxidative
          },
          lees: {
            BOOL: wine.type.lees
          },
          organic: {
            BOOL: wine.type.organic
          },
          inorganic: {
            BOOL: wine.type.inorganic
          }
        }
      }
    };
  }
};

export default Repository;
