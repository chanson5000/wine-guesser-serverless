import { makeWineQueryParams } from './util';
const aws = require('aws-sdk');
aws.config.update({ region: 'us-east-2' });
const docClient = new aws.DynamoDB.DocumentClient();
const db = new aws.DynamoDB({ apiVersion: '2012-10-08' });

const scanWines = async scanParams => {
  return await docClient
    .scan(scanParams)
    .promise()
    .then(data => {
      return {
        success: true,
        response: data.Items
      };
    })
    .catch(err => {
      return {
        success: false,
        response: err
      };
    });
};

const queryWines = async queryParams => {
  return await docClient
    .query(queryParams)
    .promise()
    .then(data => {
      return {
        success: true,
        response: data.Items
      };
    })
    .catch(err => {
      return {
        success: false,
        response: err
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
    putParams.TableName = 'redWines';
  } else {
    putParams.TableName = 'whiteWines';
  }

  return await db
    .putItem(putParams)
    .promise()
    .then(data => {
      return {
        success: true,
        response: data
      };
    })
    .catch(err => {
      return {
        success: false,
        response: err
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
        response: data
      };
    })
    .catch(err => {
      return {
        success: false,
        response: err
      };
    });
};

class Repository {
  static async findAllRedWines() {
    return await scanWines({ TableName: 'redWines' });
  }

  static async findAllWhiteWines() {
    return await scanWines({ TableName: 'whiteWines' });
  }

  static async findRedWineByVarietal(wine) {
    return await queryWines(
      makeWineQueryParams('redWines', wine.varietal, wine.world)
    );
  }

  static async findWhiteWineByVarietal(wine) {
    return await queryWines(
      makeWineQueryParams('whiteWines', wine.varietal, wine.world)
    );
  }

  static async putRedWine(wine) {
    return await putWine(wine, true);
  }

  static async putWhiteWine(wine) {
    return await putWine(wine);
  }

  static async deleteRedWine(wine) {
    return await deleteWine({
      TableName: 'redWines',
      Key: { varietal: { S: wine.varietal }, world: { S: wine.world } }
    });
  }

  static async deleteWhiteWine(wine) {
    return await deleteWine({
      TableName: 'whiteWines',
      Key: { varietal: { S: wine.varietal }, world: { S: wine.world } }
    });
  }
}

export default Repository;
