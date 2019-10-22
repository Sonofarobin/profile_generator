
function populate (popans, key) {
  userinfo[key] = popans;
}


let userinfo = {};

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What is your name?', (answer) => {
  populate (answer, "name")

  rl.question('What do you do in your freetime?', (answer) => {
    populate (answer, "activity")

  rl.question('Who is your favorite musician?', (answer) => {
    populate (answer, "music")

    rl.question('What would be your ideal meal?', (answer) => {
      populate (answer, "food")

      rl.question('Which sports do you play?', (answer) => {
        populate (answer, "sport")
        console.log(`Thank you for your input ${userinfo.name}. Generating your user profile now.`)
        rl.close();
        console.log(`My name is ${userinfo.name}. I like listening to ${userinfo.music} while I ${userinfo.activity}. Eating ${userinfo.food} gives me energy for ${userinfo.sport}.`);
        });  
      });
    });
  });
});

