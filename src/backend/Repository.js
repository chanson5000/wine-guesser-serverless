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

const putWine = async (params, isRedWine = false) => {
  let putParams = {
    Item: {
      varietal: { S: params.varietal },
      world: { S: params.world }
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

  static async findRedWineByVarietal(varietal, world = null) {
    return await queryWines(makeWineQueryParams('redWines', varietal, world));
  }

  static async findWhiteWineByVarietal(varietal, world = null) {
    return await queryWines(makeWineQueryParams('whiteWines', varietal, world));
  }

  static async putRedWine(params) {
    return await putWine(params, true);
  }

  static async putWhiteWine(params) {
    return await putWine(params);
  }

  static async deleteRedWine(varietal, world) {
    return await deleteWine({
      TableName: 'redWines',
      Key: { varietal: { S: varietal }, world: { S: world } }
    });
  }

  static async deleteWhiteWine(varietal, world) {
    return await deleteWine({
      TableName: 'whiteWines',
      Key: { varietal: { S: varietal }, world: { S: world } }
    });
  }
}

export default Repository;
