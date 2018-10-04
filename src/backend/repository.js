import {makeWineQueryParams} from './util';
const aws = require('aws-sdk');
aws.config.update({region: 'us-east-2'});
const docClient = new aws.DynamoDB.DocumentClient();
const db = new aws.DynamoDB();

class Repository {
  static async findAllRedWines(scanParams) {

    return await docClient.scan(scanParams).promise()
        .then((data) => {
          return {
            success: true,
            results: data.Items
          };
        }).catch((err) => {
          return {
            success: false,
            results: err
          }
        });
  };

  async findRedWine(varietal, world = null) {
    const docClient = new this.db.DocumentClient();

    let queryParams;
    if (world === null) {
      queryParams = makeWineQueryParams(varietal);
    } else {
      queryParams = makeWineQueryParams(varietal, world);
    }

    docClient.query(queryParams).then(data => ({
      success: true,
      response: data.Items,
    })).catch(err => ({
      success: false,
      response: err,
    }));
  }

  static async putRedWine(params) {
    return await db.putItem(params).promise()
        .then(data => {
          return {
            success: true,
            response: data
          }
        }).catch(err => {
          return {
            success: false,
            response: err
          }
        });
  };

  static async deleteRedWine(varietal, world) {
    const params = {
      TableName: 'redWines',
      Key: {
        "varietal": {"S": varietal},
        "world": {"S": world}
      }
    };

    const db = new aws.DynamoDB();

    return await db.deleteItem(params).promise()
        .then(data => {
          return {
            success: true,
            response: data
          }
        }).catch(err => {
          return {
            success: false,
            response: err
          }
        });
  }
}

export default Repository;
