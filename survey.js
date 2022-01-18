const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("What is your name?", (answer0) => {
  rl.question("What is your nickname?", (answer1) => {
    rl.question("What is an activity you like to do?", (answer2) => {
      rl.question("What do you listen to while doing that?", (answer3) => {
        rl.question("What is your favorte meal of the day?", (answer4) => {
          rl.question(
            "What is your favorite thing to eat that meal?",
            (answer5) => {
              rl.question("What is your favorite sport?", (answer6) => {
                rl.question("What is your superpower?", (answer7) => {
                  console.log(
                    `Hello my name is ${answer0} but people call me ${answer1},\nI enjoy listening to ${answer3} while ${answer2}.\nMy favorite meal is getting ${answer5} for ${answer4}.\nMy favorite sport is ${answer6}.\nMy super power would be ${answer7}. `
                  );
                  rl.close();
                });
              });
            }
          );
        });
      });
    });
  });
});
