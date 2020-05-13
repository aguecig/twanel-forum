const faqs = [
  {
    question: "Why did you create this app if one already exists on Table Top Simulator?",
    answer: "In short: we wanted to be able to automate everything, have no ambiguity in rules implementation, and be able to play both in real time and through correspondence. The app requires no external scripting or downloads. 100% browser based and it does everything for you. All you have to do is play."
  },
  {
    question: "If I play on the browser, will I be pestered with ads?",
    answer: "No, there are no ads."
  },
  {
    question: "How do I get notifications to show up on my mobile device when it is my turn?",
    answer: "Make sure you are navigating to the site through HTTPS and not HTTP. When you are logged in and it is not your turn, you will recieve a prompt asking you if you want to recieve notifications. Check the box off. Then, add the website to your home screen. You should then recieve notifications."
  }
];

faqs.forEach(faq => {
  $("#faqs-list").append(`
    <li style="font-weight: bolder;">${faq.question}</li>
    <li>${faq.answer}</li>
    <br>
    `);
});
