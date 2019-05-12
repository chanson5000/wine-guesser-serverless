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
  console.log("Repository>Got for put:");
  console.log(wine);

  let putParams = {
    Item: {
      varietal: { S: wine.varietal },
      world: { S: wine.world },
      acidity: { S: wine.acidity },
      alcohol: { S: wine.alcohol },
      climate: { S: wine.climate },
      tannin: { S: wine.tannin },
      color: { S: wine.color },
      condition: {
        M: wine.condition
      },
      nonFruit: {
        M: wine.nonFruit
      },
      type: {
        M: wine.type
      }
    }
  };

  if (isRedWine) {
    putParams.TableName = redWineTable;
  } else {
    putParams.TableName = whiteWineTable;
  }
  console.log("Repository>Putting Item:");
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

export default Repository;
