import findAllRedWines from '../../../backend/src/newRepository';

describe('repository tests', () => {

  describe('when getting all wines', () => {
    const scanParams = {
      TableName: 'redWines'
    };
    const tableName = 'redWines';

    test('it should return response with table', () => {
      const response = findAllRedWines(scanParams);
      console.log(response);
      expect('a').to.equal('b)');
    })

  })
});