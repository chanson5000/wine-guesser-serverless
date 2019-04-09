import * as WineUtil from '../../../src/backend/wineUtil';

describe('Wine Scorer', () => {
  describe('When given wine object and wine references', () => {
    const wineToScore = {
      varietal: 'Cabernet Sauvignon',
      isNewWorld: true,
      description: 'A bold red wine.',
      notes: 'Red and black dominant fruits.',
      confusion: 'Merlot',
      descriptors: {
        colorRuby: 1,
        colorPurple: 1,
        fruitRed: 1,
        fruitBlack: 1,
        characterRipe: 1,
        characterOverripe: 1,
        vegetalPyrazine: 1,
        herbalTobacco: 1,
        spiceOther: 1,
        cocoa: 1,
        oak: 2,
        tanninModeratePlus: 2,
        tanninHigh: 1,
        acidModerate: 1,
        acidModeratePlus: 1,
        climateModerate: 1,
        climateWarm: 1
      }
    };

    const wineRecords = [
      {
        varietal: 'Gamay',
        isNewWorld: false,
        descriptors: {
          colorGarnet: 1,
          fruitRed: 1,
          characterTart: 1,
          floral: 2,
          herbalDried: 1,
          carbonicMaceration: 2,
          organic: 2,
          tanninLow: 2,
          acidModeratePlus: 2,
          acidHigh: 1,
          climateCool: 1
        }
      },
      {
        varietal: 'Cabernet Sauvignon',
        isNewWorld: true,
        descriptors: {
          colorRuby: 1,
          colorPurple: 1,
          fruitRed: 1,
          fruitBlack: 1,
          fruitBlue: 1,
          characterRipe: 2,
          characterOverripe: 1,
          tanninModeratePlus: 2,
          tanninHigh: 1,
          acidModeratePlus: 2,
          acidHigh: 1,
          climateWarm: 2
        }
      },
      {
        varietal: 'Pinot Noir',
        isNewWorld: false,
        descriptors: {
          colorGarnet: 1,
          colorRuby: 2,
          fruitRed: 1,
          characterTart: 1,
          tanninModerate: 2,
          tanninModerateMinus: 1,
          acidModeratePlus: 2,
          climateCool: 1
        }
      }
    ];

    it('returns correct wine record with varietal and score', () => {
      const actual = WineUtil.getHighestMatchWine(wineToScore, wineRecords);

      expect(actual.varietal).toEqual('Cabernet Sauvignon');
      expect(actual.score).toEqual(14);
    });
  });
});
