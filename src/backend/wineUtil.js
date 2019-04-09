const getHighestMatchWine = (wineToScore, referenceWines) => {
  const wineScoreMap = {};

  referenceWines.forEach(referenceWine => {
    Object.entries(referenceWine.descriptors)
      .filter(descriptor => {
        return Object.keys(wineToScore.descriptors).includes(descriptor[0]);
      })
      .forEach(descriptor => {
        if (wineScoreMap[referenceWine.varietal]) {
          wineScoreMap[referenceWine.varietal] += descriptor[1];
        } else {
          wineScoreMap[referenceWine.varietal] = 1;
        }
      });
  });

  const highestEntry = Object.entries(wineScoreMap).reduce((prev, next) => {
    return prev[1] > next[1] ? prev : next;
  });

  const winner = referenceWines.find(referenceWine => {
    return referenceWine.varietal === highestEntry[0];
  });

  winner.score = highestEntry[1];

  return winner;
};

export { getHighestMatchWine };
