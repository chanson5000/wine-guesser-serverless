import Joi from 'joi';

const RedWine = Joi.object().keys({
  varietal: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  isNewWorld: Joi.boolean().required(),
  description: Joi.string(),
  notes: Joi.string(),
  confusion: Joi.string(),
  descriptors: Joi.object().keys({
    colorGarnet: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    colorRuby: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    colorPurple: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    fruitRed: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    fruitBlack: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    fruitBlue: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    characterTart: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    characterRipe: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    characterOverripe: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    characterBaked: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    floral: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    vegetalPyrazine: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    vegetalTomatoLeaf: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    herbalTobacco: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    herbalMint: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    herbalThyme: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    herbalTea: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    herbalOregano: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    herbalDried: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    spicePepper: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    spiceAnise: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    spiceOther: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    coffee: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    cocoa: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    game: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    smoke: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    balsamic: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    carbonicMaceration: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    volatileOxidation: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    organic: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    inorganic: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    oak: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    tanninLow: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    tanninModerate: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    tanninModeratePlus: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    tanninHigh: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    acidLow: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    acidModerate: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    acidModeratePlus: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    acidHigh: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    alcoholLow: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    alcoholModerate: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    alcoholModeratePlus: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    alcoholHigh: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    climateCool: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    climateModerate: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    climateWarm: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0)
  })
});

export default RedWine;
