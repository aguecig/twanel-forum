const checkCircle = `<i class="fa fa-check-circle" style="color:green;"></i>`;
const crossCircle = `<i class="fa fa-times-circle" style="color:red;"></i>`;

const bugs = [
  {
    date: "12/05/20",
    resolved: true,
    description: "If a player selects planets for use during secondary abilities of strategy cards or during production step, then chooses to pass, these planets become exhausted."
  },
  {
    date: "11/05/20",
    resolved: true,
    description: "Units that had previously sustained damage and were destroyed and then produced are being returned to the board having sustained damage."
  },
  {
    date: "10/05/20",
    resolved: true,
    description: "After obtaining the War Sun technology, players cannot produce the War Sun unit during Production."
  },
  {
    date: "05/05/20",
    resolved: true,
    description: "Faction ability Munitions Reserves will prompt The Barony of Letnev player even if they are not involved in the combat."
  },
  {
    date: "28/04/20",
    resolved: true,
    description: "Movement bug after committing infantry to Mecatol Rex."
  },
  {
    date: "28/04/20",
    resolved: false,
    description: "After producing infantry, that same infantry cannot be moved without reloading the game (game does not recognize unit id)."
  },
  {
    date: "27/04/20",
    resolved: true,
    description: "Movements bug after ground forces are committed to a planet."
  },
  {
    date: "26/04/20",
    resolved: true,
    description: "The action card Lucky Shot does not function properly under some instances."
  },
  {
    date: "26/04/20",
    resolved: true,
    description: "The action card Uprising does not exhaust the targeted player's planet."
  },
  {
    date: "23/04/20",
    resolve: false,
    description: "When a player activates construction primary, then on their next turn tries to move infantry off the planet they built a PDS/Space Dock on, game says the movement is invalid and that only infantry can be transported off the surface of a planet."
  },
  {
    date: "22/04/20",
    resolved: true,
    description: "After scoring objectives that require spending tactic/strategy tokens, an incorrect ammount of command tokens are given for redistribution during the status phase."
  }
];

bugs.forEach(bug => {
  let image;

  if (bug.resolved) image = checkCircle;
  else image = crossCircle;

  $("#bug-log-list").append(`
    <li>${image} ${bug.date}: ${bug.description}</li>
    `);
});
