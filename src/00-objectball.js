function gameObject() {
  return {
    "home": {
      "teamName": "Brooklyn Nets",
      "colors": ["Black", "White"],
      "players": {
        "Alan Anderson": {
          "number": 0,
          "shoe": 16,
          "points": 22,
          "rebounds": 12,
          "assists": 12,
          "steals": 3,
          "blocks": 1,
          "slamDunks": 1
        },
        "Reggie Evans": {
          "number": 30,
          "shoe": 14,
          "points": 12,
          "rebounds": 12,
          "assists": 12,
          "steals": 1,
          "blocks": 1,
          "slamDunks": 1
        },
        "Brook Lopez": {
          "number": 11,
          "shoe": 17,
          "points": 17,
          "rebounds": 19,
          "assists": 10,
          "steals": 2,
          "blocks": 2,
          "slamDunks": 5
        },
        "Mason Plumlee": {
          "number": 1,
          "shoe": 19,
          "points": 26,
          "rebounds": 12,
          "assists": 6,
          "steals": 3,
          "blocks": 1,
          "slamDunks": 5
        },
        "Jason Terry": {
          "number": 31,
          "shoe": 15,
          "points": 19,
          "rebounds": 2,
          "assists": 2,
          "steals": 3,
          "blocks": 1,
          "slamDunks": 1
        }
      }
    },
    "away": {
      "teamName": "Charlotte Hornets",
      "colors": ["Turquoise", "Purple"],
      "players": {
        "Jeff Adrien": {
          "number": 4,
          "shoe": 18,
          "points": 10,
          "rebounds": 14,
          "assists": 7,
          "steals": 2,
          "blocks": 7,
          "slamDunks": 2
        },
        "Bismak Biyombo": {
          "number": 0,
          "shoe": 16,
          "points": 12,
          "rebounds": 12,
          "assists": 1,
          "steals": 7,
          "blocks": 15,
          "slamDunks": 10
        },
        "DeSagna Diop": {
          "number": 28,
          "shoe": 14,
          "points": 2,
          "rebounds": 3,
          "assists": 2,
          "steals": 4,
          "blocks": 5,
          "slamDunks": 5
        },
        "Ben Gordon": {
          "number": 33,
          "shoe": 15,
          "points": 33,
          "rebounds": 1,
          "assists": 2,
          "steals": 1,
          "blocks": 1,
          "slamDunks": 0
        },
        "Brendan Haywood": {
          "number": 34,
          "shoe": 15,
          "points": 6,
          "rebounds": 12,
          "assists": 2,
          "steals": 2,
          "blocks": 1,
          "slamDunks": 2
        }
      }
    }
  };
}

function findPlayer(playerName) {
  const game = gameObject();
  for (const teamKey in game) {
    const teamPlayers = game[teamKey].players;
    if (teamPlayers.hasOwnProperty(playerName)) {
      return teamPlayers[playerName];
    }
  }
  return undefined;
}

function getAllPlayers() {
  const game = gameObject();
  let allPlayers = [];
  for (const teamKey in game) {
    for (const playerName in game[teamKey].players) {
      allPlayers.push({ name: playerName, stats: game[teamKey].players[playerName] });
    }
  }
  return allPlayers;
}

function numPointsScored(playerName) {
  const player = findPlayer(playerName);
  return player ? player.points : undefined;
}

function shoeSize(playerName) {
  const player = findPlayer(playerName);
  return player ? player.shoe : undefined;
}

function teamColors(teamName) {
  const game = gameObject();
  if (game.home.teamName === teamName) {
    return game.home.colors;
  } else if (game.away.teamName === teamName) {
    return game.away.colors;
  }
  return undefined;
}

function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
  const game = gameObject();
  let playersObject;
  if (game.home.teamName === teamName) {
    playersObject = game.home.players;
  } else if (game.away.teamName === teamName) {
    playersObject = game.away.players;
  } else {
    return undefined;
  }

  return Object.values(playersObject).map(player => player.number);
}

function playerStats(playerName) {
  return findPlayer(playerName);
}

function bigShoeRebounds() {
  const allPlayers = getAllPlayers();

  if (allPlayers.length === 0) {
    return undefined;
  }

  let largestShoeSize = 0;
  let playerWithLargestShoe = null;

  for (const player of allPlayers) {
    if (player.stats.shoe > largestShoeSize) {
      largestShoeSize = player.stats.shoe;
      playerWithLargestShoe = player.stats;
    }
  }

  return playerWithLargestShoe ? playerWithLargestShoe.rebounds : undefined;
}

function mostPointsScored() {
  const allPlayers = getAllPlayers();

  if (allPlayers.length === 0) {
    return undefined;
  }

  let highestPoints = -1;
  let playerWithMostPoints = null;

  for (const playerInfo of allPlayers) {
    if (playerInfo.stats.points > highestPoints) {
      highestPoints = playerInfo.stats.points;
      playerWithMostPoints = playerInfo.name;
    }
  }

  return playerWithMostPoints;
}

function winningTeam() {
  const game = gameObject();
  let homePoints = 0;
  let awayPoints = 0;

  for (const playerName in game.home.players) {
    homePoints += game.home.players[playerName].points;
  }

  for (const playerName in game.away.players) {
    awayPoints += game.away.players[playerName].points;
  }

  if (homePoints > awayPoints) {
    return game.home.teamName;
  } else if (awayPoints > homePoints) {
    return game.away.teamName;
  } else {
    return "It's a tie!";
  }
}

function playerWithLongestName() {
  const allPlayers = getAllPlayers();

  if (allPlayers.length === 0) {
    return undefined;
  }

  let longestName = "";
  for (const playerInfo of allPlayers) {
    if (playerInfo.name.length > longestName.length) {
      longestName = playerInfo.name;
    }
  }

  return longestName;
}

function doesLongNameStealATon() {
  const allPlayers = getAllPlayers();

  if (allPlayers.length === 0) {
    return false;
  }

  let playerWithLongestName = "";
  let longestNameLength = -1;
  let playerWithMostSteals = "";
  let mostSteals = -1;

  for (const playerInfo of allPlayers) {
    if (playerInfo.name.length > longestNameLength) {
      longestNameLength = playerInfo.name.length;
      playerWithLongestName = playerInfo.name;
    }

    if (playerInfo.stats.steals > mostSteals) {
      mostSteals = playerInfo.stats.steals;
      playerWithMostSteals = playerInfo.name;
    }
  }

  return playerWithLongestName === playerWithMostSteals;
}
