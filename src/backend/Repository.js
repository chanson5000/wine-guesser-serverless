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
  return { success: true, data: result.Items } ;
};

const queryWines = async queryParams => {
  return await docClient
    .query(queryParams)
    .promise()
    .then(data => {
      return {
        success: true,
        data: data.Items
      };
    })
    .catch(err => {
      return {
        success: false,
        data: err
      };
    });
};

const putWine = async (wine, isRedWine = false) => {
  let putParams = {
    Item: {
      varietal: { S: wine.varietal },
      world: { S: wine.world }
    }
  };

  if (isRedWine) {
    putParams.TableName = redWineTable;
  } else {
    putParams.TableName = whiteWineTable;
  }

  return await db
    .putItem(putParams)
    .promise()
    .then(data => {
      return {
        success: true,
        data: data
      };
    })
    .catch(err => {
      return {
        success: false,
        data: err
      };
    });
};

const deleteWine = async params => {
  return await db
    .deleteItem(params)
    .promise()
    .then(data => {
      return {
        success: true,
        data: data
      };
    })
    .catch(err => {
      return {
        success: false,
        data: err
      };
    });
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
