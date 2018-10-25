import { makeValidWineObject } from '../../../src/backend/util';

describe('makeValidWineObject', () => {
  describe('when parsing pathParameters and queryStringParameters', () => {
    const varietal = 'Test Varietal';
    const world = 'new';

    test('when have varietal and world', () => {
      const params = {
        pathParameters: {
          varietal: varietal
        },
        queryStringParameters: {
          world: world
        }
      };

      const result = makeValidWineObject(params);

      expect(result.varietal).toEqual(varietal);
      expect(result.world).toEqual(world);
    });

    test('with more queryStringParameters', () => {
      const params = {
        pathParameters: {
          varietal: varietal
        },
        queryStringParameters: {
          world: world,
          testOne: 'Test One',
          testTwo: 'Test Two'
        }
      };

      const result = makeValidWineObject(params);

      expect(result.varietal).toEqual(varietal);
      expect(result.world).toEqual(world);
      expect(result.testOne).toEqual('Test One');
      expect(result.testTwo).toEqual('Test Two');
    });

    test('with parameters missing', () => {
      const params = {
        pathParameters: {},
        queryStringParameters: {}
      };

      const result = makeValidWineObject(params);

      expect(result.varietal).toEqual(null);
      expect(result.world).toEqual(null);
    });
  });
});
