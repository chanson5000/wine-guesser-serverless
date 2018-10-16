import {
  makeJsonProxyResponse,
  makeWineQueryParams,
  tryParameter,
  isNullOrUndef
} from "../../../src/backend/util";

import Chance from 'chance';

const chance = new Chance();

describe('utility tests', () => {

  describe('makeJsonProxyResponse', () => {

    const inputStatusCode = chance.number();
    const inputBody = chance.string();

    const result = makeJsonProxyResponse(inputStatusCode, inputBody);

    test('it should return correct proxy response', () => {

    });
  });
});