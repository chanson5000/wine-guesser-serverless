import { makeWineQueryParams } from './util';

const aws = require('aws-sdk');

aws.config.update({ region: 'us-east-2' });


class Repository {
  static async findAllRedWines(scanParams) {
    const docClient = new aws.DynamoDB.DocumentClient();

    docClient.scan(scanParams).then(data => ({
      success: true,
      response: data.Items,
    })).catch(err => ({
      success: false,
      response: err,
    }));
  }

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

  async putRedWine(params) {
    this.db.putItem(params).then(data => ({
      success: true,
      response: data,
    })).catch(err => ({
      success: false,
      response: err,
    }));
  }

  async deleteRedWine(varietal, world) {
    const params = {
      TableName: 'redWines',
      Item: {
        varietal: { S: varietal },
        world: { S: world },
      },
    };

    this.db.deleteItem(params).then(data => ({
      success: true,
      response: data,
    })).catch(err => ({
      success: false,
      response: err,
    }));
  }
}

export default Repository;
