const calculateWineScore = (wineToScore, referenceWines) => {
  const descriptors = wineToScore.descriptors;
  const wineScoreMap = {};

  for (let i = 0; i < referenceWines.length; i++) {

    Object.entries(referenceWines[i].descriptors).
    wineScoreMap[referenceWines[i].varietal].score =

  }
// referenceWines.forEach(referenceWine => {
//       wineScoreMap.put(referenceWine.varietal,
//           referenceWine.descriptors.filter(d => descriptors.contains(d)).reduce((total, amount) => )
//           )
//     }
// )
  const wine = {
    varietal: 'notGamay'
  };
  return wine;
};

export {calculateWineScore};
