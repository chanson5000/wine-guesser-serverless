import {
  makeWineQueryParams,
  tryParameter,
  isNullOrUndef
} from '../../../src/backend/util';

import Chance from 'chance';

const chance = new Chance();

describe('utility tests', () => {
//   describe('successProxyResponse', () => {
//     const inputStatusCode = chance.integer({ min: 0, max: 999 });
//     const inputBody = chance.string();
//
//     const result = makeJsonProxyResponse(inputStatusCode, inputBody);
//
//     test('it should return correct proxy response', () => {
//       expect(result.statusCode).toEqual(inputStatusCode);
//       expect(result.body).toEqual(JSON.stringify(inputBody));
//       expect(result.headers).toEqual({ 'Content-Type': 'application/json' });
//     });
//   });

  describe('makeWineQueryParams', () => {
    describe('when world is not provided', () => {
      const inputTable = chance.string();
      const inputVarietal = chance.string();

      const result = makeWineQueryParams(inputTable, inputVarietal);

      test('it should return correct params', () => {
        expect(result.TableName).toEqual(inputTable);
        expect(result.KeyConditionExpression).toEqual('varietal = :v');
        expect(result.ExpressionAttributeValues).toEqual({
          ':v': inputVarietal
        });
      });
    });

    describe('when world is provided', () => {
      const inputTable = chance.string();
      const inputVarietal = chance.string();
      const inputWorld = chance.string();

      const result = makeWineQueryParams(inputTable, inputVarietal, inputWorld);

      test('it should return correct params', () => {
        expect(result.TableName).toEqual(inputTable);
        expect(result.KeyConditionExpression).toEqual(
          'varietal = :v and world = :w'
        );
        expect(result.ExpressionAttributeValues).toEqual({
          ':v': inputVarietal,
          ':w': inputWorld
        });
      });
    });
  });

  describe('isNullOrUndef', () => {
    describe('when null is argument', () => {
      const nullArgument = null;
      const result = isNullOrUndef(nullArgument);

      test('it should return true', () => {
        expect(result).toEqual(true);
      });
    });

    describe('when undefined is argument', () => {
      let undefinedArgument;
      const result = isNullOrUndef(undefinedArgument);

      test('it should return true', () => {
        expect(result).toEqual(true);
      });
    });

    describe('when non-null or non-undefined is argument', () => {
      const stringArgument = chance.string();
      const result = isNullOrUndef(stringArgument);

      test('it should return false', () => {
        expect(result).toEqual(false);
      });
    });
  });

  describe('tryParameter', () => {
    describe('when given valid parameters', () => {
      const validParameterKey = chance.string();
      const returnValue = chance.string();

      let inputParameters = [];
      inputParameters[validParameterKey] = returnValue;

      const result = tryParameter(inputParameters, validParameterKey);

      test('it should return the value', () => {
        expect(result).toEqual(returnValue);
      });
    });

    describe('when parameters are null', () => {
      const inputParameters = null;
      const anyKey = chance.string();

      const result = tryParameter(inputParameters, anyKey);

      test('it should return null', () => {
        expect(result).toEqual(null);
      });
    });

    describe('when parameters are undefined', () => {
      let inputParameters;
      const anyKey = chance.string();

      const result = tryParameter(inputParameters, anyKey);

      test('it should return null', () => {
        expect(result).toEqual(null);
      });
    });

    describe('when key is not in parameters', () => {
      let inputParameters = [];
      const anyParameterKey = 'someKey';
      const inputParameterKey = 'keyToSearch';

      inputParameters[anyParameterKey] = chance.string();

      const result = tryParameter(inputParameters, inputParameterKey);

      test('it should return null', () => {
        expect(result).toEqual(null);
      });
    });

    describe('when key is in parameters', () => {
      let inputParameters = [];
      const inputParameterKey = chance.string();
      const valueToReturn = chance.string();

      inputParameters[inputParameterKey] = valueToReturn;

      const result = tryParameter(inputParameters, inputParameterKey);

      test('it should return key value', () => {
        expect(result).toEqual(valueToReturn);
      });
    });
  });
});
