import { bugs } from './bugs.js';

bugs.forEach(bug => {
  let icon;

  if (bug.resolved) icon = `<i class="fa fa-check-circle" style="color: green;"></i>`;
  else icon = `<i class="fa fa-times-circle" style="color: red;"></i>`;

  $("#bugs").append(`
    <div class="box">
      ${icon} ${bug.date} <br>
      <b>${bug.gamePhase}</b> <br>
      ${bug.description} <br>
    </div>
    `);
});
