const Joi = require('joi');

const WhiteWine = Joi.object().keys({
  varietal: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  world: Joi.string()
    .valid('old', 'new')
    .required(),
  description: Joi.string(),
  notes: Joi.string(),
  confusion: Joi.string(),
  descriptors: Joi.object().keys({
    straw: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    yellow: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    gold: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    apple: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    citrus: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    stone: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    tropical: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    noseTart: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    noseRipe: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    noseOverripe: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    noseBaked: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    floralFruitBlossom: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    floralRedFlowers: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    floralLightFlowers: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    herbalLemongrass: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    herbalDry: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    herbalSageMint: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    herbalTea: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    vegetalPyrazine: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    spice: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    terpene: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    wax: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    soap: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    oysterShell: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    botrytis: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    oxidative: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    lees: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    buttery: Joi.number()
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
    bitter: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    dry: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    offDry: Joi.number()
      .integer()
      .min(0)
      .max(2)
      .default(0),
    sweet: Joi.number()
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

export default WhiteWine;
