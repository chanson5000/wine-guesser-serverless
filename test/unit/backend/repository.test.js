import Repository from '../../../src/backend/Repository';

describe('repository tests', () => {

  describe('when getting all wines', () => {

    it('it should return success response', async () => {
      const scanParams = {
        TableName: 'redWines'
      };
      const response = await Repository.findAllRedWines(scanParams);
      expect(response.success).toEqual(true);
    });
  });

  describe('when putting new red wine', () => {
    it('it should successfully add wine', async () => {
      const params = {
        TableName: 'redWines',
        Item: {
          "varietal": {
            S: "Unit Test Varietal A"
          },
          "world": {
            S: "new"
          }
        }
      };
      const response = await Repository.putRedWine(params);
      expect(response.success).toEqual(true);
    });
  });

  describe('when deleting red wine', () => {
    it('it should successfully remove wine', async () => {
      const varietal = 'Unit Test Varietal A';
      const world = 'new';

      const response = await Repository.deleteRedWine(varietal, world);
      console.log(response);
      expect(response.success).toEqual(true);
    });
  });
});