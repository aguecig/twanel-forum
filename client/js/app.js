$("#about-twanel").append(`
  Twilight Imperium is a 3-6 player board game that relies on diplomacy, tactics, and army building. To win, a player
  must gain a predetermined number of Victory Points by scoring game objectives. Before the game begins, each player
  chooses 1 of 17 playable factions, each with their own unique capabilities. On this site, you will find information
  on the online implementation of the game.
  `);

const iconSize = "3";

const robot = `<i class="fa fa-robot fa-${iconSize}x" style="color: grey;"></i>`;
const warning = `<i class="fa fa-exclamation-circle fa-${iconSize}x" style="color: red;"></i>`;
const secret = `<i class="fa fa-user-secret fa-${iconSize}x" style="color: black;"></i>`;
const bell = `<i class="fa fa-bell fa-${iconSize}x" style="color: yellow;"></i>`;
const firefox = `<i class="fa fa-firefox fa-${iconSize}x" style="color: orange;"></i>`;
const mobile = `<i class="fa fa-mobile fa-${iconSize}x" style="color: black;"></i>`;
const cloud = `<i class="fa fa-cloud-upload-alt fa-${iconSize}x" style="color: blue;"></i>`;

$("#factions").append(`
The following factions are currently fully implemented into the app:
  <ul>
    <li>The Federation of Sol</li>
    <li>The Barony of Letnex</li>
    <li>The Embers of Muaat</li>
  </ul>
  `);

  $("#app-functionality").append(`
    Benefits of using the app:
      <ul>
        <li>${robot} Fully automated: Never worry about checking if someone is following the rules correctly</li>
        <li>${warning} Warning messages: Are you overspending on production because you forgot you have Sarween Tools? Don't fear, the app will notify you!</li>
        <li>${secret} Private trading: Trades are not made public until the transaction is completed</li>
        <li>${bell} Notifications: Get notified on your device when it's your turn to make a move</li>
        <li>${firefox} No downloads! Entirely browser based</li>
        </li>${mobile} Mobile compatible</li>
        <li>${cloud} Automatic saving: Never worry about saving your game.</li>
      </ul>
    `);
