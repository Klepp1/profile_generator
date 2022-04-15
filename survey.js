const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const profile = {};
rl.question('Whats your name? Nicknames are also acceptable ', (answer) => {
  profile.answer = answer;
  rl.question('Whats an activity you like doing? ', (answer2) => {
    profile.answer2 = answer2;
    rl.question('What do you listen to while doing that? ', (answer3) => {
      profile.answer3 = answer3;
      rl.question('Which meal is your favourite (eg: breakfast lunch dinner brunch) ', (answer4) => {
        profile.answer4 = answer4;
        rl.question('Whats your favourite thing to eat for that meal? ', (answer5) => {
          profile.answer5 = answer5;
          rl.question('What sport is your absolute favourite? ', (answer6) => {
            profile.answer6 = answer6;
            rl.question('What is your superpower? in a few words, tell us what you are amazing at! ', (answer7) => {
              profile.answer7 = answer7;
              rl.question('Are you ready for your new profile? ', (answer8) => {
                console.log(`Here is your new profile! \nHello everyone my name is ${profile.answer}. \nMy favourite activity to do is ${profile.answer2} and i often listen to ${profile.answer3} while doing that activity. \nMy favourite meal would have to be ${profile.answer4} and my favourite thing to eat during ${profile.answer4} is probably ${profile.answer5}. \nMy favourite sport would have to be ${profile.answer6} but ${profile.answer7}.`);
                rl.close();
              });
            });
          });
        });
      });
    });
  });
});

