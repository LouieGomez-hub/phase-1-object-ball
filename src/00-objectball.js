function gameObject() {
    return (
        {
            "home": {
                "teamName": "Brooklyn Nets",
                "colors": ["Black", "White"],
                "players": [
                    {
                       "playerName": "Alan Anderson",
                       "number": 0,
                       "shoe": 16,
                       "points": 22,
                       "rebounds": 12,
                       "assists": 12,
                       "steals": 3,
                       "blocks": 1,
                       "slamDunks": 1
                    },
                    {
                        "playerName": "Reggie Evans",
                        "number": 30,
                        "shoe": 14,
                        "points": 12,
                        "rebounds": 12,
                        "assists": 12,
                        "steals": 12,
                        "blocks": 12,
                        "slamDunks": 7
                    },
                    {
                        "playerName": "Brook Lopez",
                        "number": 11,
                        "shoe": 17,
                        "points": 17,
                        "rebounds": 19,
                        "assists": 10,
                        "steals": 3,
                        "blocks": 1,
                        "slamDunks": 15
                    },
                    {
                        "playerName": "Mason Plumlee",
                        "number": 1,
                        "shoe": 19,
                        "points": 26,
                        "rebounds": 12,
                        "assists": 6,
                        "steals": 3,
                        "blocks": 8,
                        "slamDunks": 5
                    },
                    {
                        "playerName": "Jason Terry",
                        "number": 31,
                        "shoe": 15,
                        "points": 19,
                        "rebounds": 2,
                        "assists": 2,
                        "steals": 4,
                        "blocks": 11,
                        "slamDunks": 1
                    }
                ]
            },
            "away": {
                "teamName": "Charlotte Hornets",
                "colors": ["Turquoise", "Purple"],
                "players": [
                    {
                        "playerName": "Jeff Adrien",
                        "number": 4,
                        "shoe": 18,
                        "points": 10,
                        "rebounds": 1,
                        "assists": 1,
                        "steals": 2,
                        "blocks": 7,
                        "slamDunks": 2
                    },
                    {
                        "playerName": "Bismak Biyombo",
                        "number": 0,
                        "shoe": 16,
                        "points": 12,
                        "rebounds": 4,
                        "assists": 7,
                        "steals": 7,
                        "blocks": 15,
                        "slamDunks": 10
                    },
                    {
                        "playerName": "DeSagna Diop",
                        "number": 2,
                        "shoe": 14,
                        "points": 24,
                        "rebounds": 12,
                        "assists": 12,
                        "steals": 4,
                        "blocks": 5,
                        "slamDunks": 5
                    },
                    {
                        "playerName": "Ben Gordon",
                        "number": 8,
                        "shoe": 15,
                        "points": 33,
                        "rebounds": 3,
                        "assists": 2,
                        "steals": 1,
                        "blocks": 1,
                        "slamDunks": 0
                    },
                    {
                        "playerName": "Brendan Haywood",
                        "number": 33,
                        "shoe": 15,
                        "points": 6,
                        "rebounds": 12,
                        "assists": 12,
                        "steals": 22,
                        "blocks": 5,
                        "slamDunks": 12
                    }
                ]
            }
        }
    ) 
}
function oneArrayOfObjs() {
    return Object.values(gameObject());
}

function numPointsScored(name) {
    return players().find(player => name === player.playerName).points;
}

function shoeSize(name) {
    return players().find(player => name === player.playerName).shoe;
}

function teamColors(name) {
    return oneArrayOfObjs().find(team => name === team.teamName).colors
}

function teamNames() {
    return oneArrayOfObjs().map(team => team.teamName)
}

function playerNumbers(teamName) {
    return oneArrayOfObjs().find(team => team.teamName === teamName).players.map(player =>
        player.number);
}

function playerStats(name) {
    const returnValue = players().find(player => player.playerName === name);
    delete returnValue["playerName"];
    return returnValue;
}

function bigShoeRebounds() {
    let largeShoeSize = 0;
    let bigShoePlayer;
    for(let i = 0; i < players().length; i++) {
        if(players()[i].shoe >= largeShoeSize) {
            largeShoeSize = players()[i].shoe;
            bigShoePlayer = players()[i];
        }
    }
    return bigShoePlayer.rebounds;
}

function mostPointsScored() {
	let maxPoints = 0;
	let mvp;
    for (let i = 0; i < players().length; i++) {
		if (players()[i].points >= maxPoints) {
			maxPoints = players()[i].points;
			mvp = players()[i];
		}
	}
    return mvp;
}

function winningTeam() {
	const team1Info = [oneArrayOfObjs()[0].teamName, oneArrayOfObjs()[0].players.reduce((accumulator, player) => 
    ({"points": accumulator.points + player.points}))];
	const team2Info = [oneArrayOfObjs()[1].teamName, oneArrayOfObjs()[1].players.reduce((accumulator, player) => 
    ({"points": accumulator.points + player.points}))];
    return team1Info[1] >= team2Info[1] ? team1Info[0] : team2Info[0]; 
}

function playerWithLongestName() {
	let maxNameLength = 0;
	let longName;
    for (let i = 0; i < players().length; i++) {
		if (players()[i].playerName.length >= maxNameLength) {
			maxNameLength = players()[i].playerName.length;
			longName = players()[i];
		}
	}
    return longName;
}

function doesLongNameStealATon() {
	let maxSteals = 0;
	let stealer;
    for (let i = 0; i < players().length; i++) {
		if (players()[i].steals >= maxSteals) {
			maxSteals = players()[i].steals;
			stealer = players()[i];
		}
	}
    return playerWithLongestName().playerName === stealer.playerName;
}