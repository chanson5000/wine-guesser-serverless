import Repository from '../../../src/backend/Repository';

describe('Database integration tests', () => {
  describe('when querying all red wines', () => {
    const scanParams = {
      TableName: 'redWines'
    };

    test('body is not empty', async () => {
      const result = await Repository.findAllRedWines(scanParams);
      console.log('Part One:');
      console.log(result.response);
      expect(result.response).not.toEqual(undefined);
    });
  });

  describe('when querying for specific wine', () => {
    test('result is valid', async () => {
      const result = await Repository.findRedWineByVarietal(
        'Cabernet Sauvignon',
        'new'
      );
      console.log('Part Two:');
      console.log(result.response);

      expect(result.response).not.toEqual(undefined);
    });
  });
});
//
// describe('dbActions', () => {
//   test('when getting all red wines', async () => {
//     const result = await getAllRedWines();
//
//     console.log('dbActions getAllRedWines()');
//     console.log(result);
//
//     expect(result).not.toEqual(undefined);
//   });
//
// });
