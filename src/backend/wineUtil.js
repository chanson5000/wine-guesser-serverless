const calculateWineScore = (wineToScore, referenceWines) => {
  const descriptors = wineToScore.descriptors;
  const wineScoreMap = {};

  for (let i = 0; i < referenceWines.length; i++) {
    Object.entries(referenceWines[i].descriptors)
      .filter(entry => Object.keys(descriptors).includes(entry[0]))
      .forEach(entry => {
        if (wineScoreMap[referenceWines[i]]) {
          wineScoreMap[referenceWines[i]].score += entry[1];
        } else {
          wineScoreMap[referenceWines[i]].score = entry[1];
        }
      });
    // Object.entries(referenceWines[i].descriptors).wineScoreMap[referenceWines[i].varietal].score

  }
// referenceWines.forEach(referenceWine => {
//       wineScoreMap.put(referenceWine.varietal,
//           referenceWine.descriptors.filter(d => descriptors.contains(d)).reduce((total, amount) => )
//           )
//     }
// )

  return Object.entries(wineScoreMap).reduce((prev, next) => {
    return prev.score > next.score ? prev : next;
  });
};

export {calculateWineScore};
