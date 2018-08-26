d3.json('data/stats.json').then(res => {
  const headers = res.resultSets[0].headers;
  const dataSet = res.resultSets[0].rowSet;

  // Player must play 70% of his team's games (58 in 82-game season)
  const qualifiedPlayers = dataSet.filter(player => {
    return player[4] >= 58;
  });

});
