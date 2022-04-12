
module.exports = {
    name: 'joke', 
    description: 'Tell a joke command',
    execute(client, message, args) {
        // pick random joke
        jokeNum = Math.floor(Math.random() * 3); // 0 to n-1
        console.log(jokeNum);


        // Array of Jokes
        let line1 = ["I'm afraid for the calendar... it's days are numbered.",
                    "What do you call a fish wearing a bowtie?",
                    "What do you call a factory that makes okay products?"];

        let line2 = ["", "Sofishticated", "A Satisfactory..."];

        let line3 = ["", "", "Yes I know.. I hate myself too."]

        // Send Joke
        message.channel.send(line1[jokeNum]);
        if ((line2[jokeNum]).length !== 0) {
            setTimeout(function() {message.channel.send(line2[jokeNum]); }, 4000);
        }
        if ((line3[jokeNum]).length !== 0) {
            setTimeout(function() {message.channel.send(line3[jokeNum]); }, 6000);
        }
        
        
    }
}

