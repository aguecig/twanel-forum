const bugs = [];

bugs.push({
  resolved: false,
  date: "05/05/20",
  gamePhase: "Combat",
  description: "The faction ability (The Barony of Letnev) Munitions Reserves text interaction can be accessed by the player even if they have no units involved in the combat."
});

bugs.push({
  resolved: false,
  date: "05/03/20",
  gamePhase: "Movement",
  description: "Ships cannot pick up infantry as they pass through a system."
});

bugs.push({
  resolved: false,
  date: "28/04/20",
  gamePhase: "Movement",
  description: "After producing units that do no have a limit to their reinforcements (Infantry of Fighters), the game will not recognize these units if you attempt to move them later on."
});

bugs.push({
  resolved: true,
  date: "27/04/20",
  gamePhase: "Movement",
  description: "Player commits infantry to a planet and establishes control. On their next turn if they attempt movement with any units, the game tells the player they cannot move units out of the system they had previously committed infantry to, even if they are not moving units out of that system.",
  solution: "Reset the units to move array."
});

bugs.push({
  resolved: true,
  date: "26/04/20",
  gamePhase: "Action Card",
  description: "The action card Lucky Shot does not function properly under certain circumstances",
  solution: "Re-write checks for having destroyer/cruiser/dreadnought in the system."
});

bugs.push({
  resolved: true,
  date: "26/04/20",
  gamePhase: "Action Card",
  description: "The action card Uprising does not properly exhaust the targeted player's planet.",
  solution: "Fix the exhaust planets socket.io event on the client side."
});

bugs.push({
  resolved: false,
  date: "23/04/10",
  gamePhase: "Strategy Card",
  description: "When a player uses Construction to build a PDS/Space Dock on a planet, if the player attempts to move infantry off the planet on their next turn, they get the message: 'Can only transport infantry off a planet'."
});

bugs.push({
  resolved: true,
  date: "22/04/20",
  gamePhase: "Status Phase",
  description: "After scoring objectives that require spending tactic/strategy tokens, an incorrect number of command tokens is given to redistribute during status phase.",
  solution: "Typo in code."
});

export { bugs }
