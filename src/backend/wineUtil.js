const calculateWineScore = (wineToScore, referenceWines) => {
  const wineScoreMap = {};

  referenceWines.forEach(referenceWine => {
    Object.entries(referenceWine.descriptors).filter(descriptor => {
      return Object.keys(wineToScore.descriptors).includes(descriptor[0]);
    }).forEach(() => {
      if (wineScoreMap[referenceWine.varietal]) {
        wineScoreMap[referenceWine.varietal]++;
      } else {
        wineScoreMap[referenceWine.varietal] = 1;
      }
    })
  });

  const winningVarietalName = Object.entries(wineScoreMap).reduce((prev, next) => {
    return prev[1] > next[1] ? prev : next;
  })[0];

  return referenceWines.find((referenceWine) => {
    return referenceWine.varietal === winningVarietalName;
  });
};

export {calculateWineScore};
