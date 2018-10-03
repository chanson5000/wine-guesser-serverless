import findAllRedWines from '../../../src/backend/newRepository';

describe('repository tests', () => {

  describe('when getting all wines', () => {

    test('it should return response with table', async done => {
      const scanParams = {
        TableName: 'redWines'
      };

      const response = await findAllRedWines(scanParams);
      done();
      console.log(response);
      expect(response).toEqual('b');
    })

  })
});