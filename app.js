// DRY - Don't repeat yourself

// Creating a register function; hen push it
let users = [
  {
    username: "Aiyanna",
    email: "iamaiyanna@gmail.com",
    password: "wiggle",
    subscriptionStatus: "VIP",
    discordId: "Aiyannakirby",
    lessonsCompleted: [0, 1],
  },

  {
    username: "David",
    email: "whosedavida@gmail.com",
    password: "whatareth00se",
    subscriptionStatus: "VIP",
    discordId: "ABraggD",
    lessonsCompleted: [0, 1, 2, 3],
  },
];

function login(email, password) {
  for (let i = 0; i < users.length; ++i) {
    if (users[i].email === email) {
      console.log(users[i]);
      if (users[i].password === password) {
        console.log("log them in");
      } else {
        console.log("wrong pass, try again please");
      }
      return;
    }
  }
  console.log("could not find email");
}

login("iamaiyanna@gmail.com", "wiggle");

function register(user) {
  users.push(user);
}

register({
  username: "yanna",
  email: "iamaiyanna@gmail.com",
  password: "wiggle",
  subscriptionStatus: "VIP",
  discordId: "AiyannaKirby",
  lessonsCompleted: [0, 1, 2],
});

console.log(users);
