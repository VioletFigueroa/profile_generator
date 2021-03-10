const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const questions = [
  `What's your name? Nicknames are also acceptable :): `,
  `What's an activity you like doing?: `,
  `What do you listen to while doing that?: `,
  `Which meal is your favourite (eg: dinner, brunch, etc.): `,
  `What's your favourite thing to eat for that meal?: `,
  `Which sport is your absolute favourite?: `,
  `What is your superpower? In a few words, tell us what you are amazing at!: `,
];
const survey = questions =>{
  let q = 0;
  let answers = {};
  const ask = (question) => {
    rl.question(question, (answer) => {
      answers[question] = answer;
      q++;
      if (q >= questions.length) {
        /*Alternative output if used for other arrays of questions besides assignment
        for(qa in answers){
          console.log(qa + answers[qa]);
        }*/
        console.log(`${answers[questions[0]]} likes ${answers[questions[1]]} while listening to ${answers[questions[2]]}. ${answers[questions[0]]} loves eating ${answers[questions[4]]} for ${answers[questions[3]]}. ${answers[questions[5]]} is ${answers[questions[0]]}'s favourite sport, and is amazing at ${answers[questions[6]]}.`);
        rl.close();
        return;
      }
      ask(questions[q]);
    });
  };
  ask(questions[q]);
};
survey(questions);