const lrr3 = "https://images-cdn.fantasyflightgames.com/filer_public/e3/ae/e3ae7182-66db-4d58-ad20-83a6b87dec25/ti4_living_rules_reference_v1_3_web.pdf";
const lrr2 = "https://images-cdn.fantasyflightgames.com/filer_public/f2/68/f2680fb2-1e32-4f2f-90ad-687fd64befde/ti4_living_rules_reference_v1_2.pdf";
const lrr1 = "https://images-cdn.fantasyflightgames.com/filer_public/3a/fc/3afce41b-b757-4dc8-b005-3a5efffd0fad/ti4_living_rules_reference_v1_1.pdf";

$("#living-rules-reference").append(`
Living Rules Reference:
<a href="${lrr3}" target="_blank">1.3</a>
<a href="${lrr2}" target="_blank">1.2</a>
<a href="${lrr1}" target="_blank">1.1</a>
  `);

const twanelAppURL = "https://twanel.herokuapp.com/";

$("#play-twanel").append(`
  View the twanel app <a href="${twanelAppURL}" target="_blank">here</a>
  `);

const robot = `<i class="fa fa-robot" style="color: blue;"></i>`;

$("#about-the-creators").append(`
  <h1>About the Creators</h1>
  A few brothers who decided that everything had to become automated  ${robot}
  `);
