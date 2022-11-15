var ayush = require("cowsay");
var oneLinerJoke = require('one-liner-joke');
var getRandomJoke = oneLinerJoke.getRandomJoke();

console.log(ayush.say({
    text : getRandomJoke.body,
    e : "oO",
    T : "U "
}));





