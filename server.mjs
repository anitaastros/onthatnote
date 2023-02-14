
// import Joke from 'jokemaster'
import express from 'express'
import Joke from './node_modules/jokemaster/joke.mjs';

const joke = new Joke(["this is a joke", "joke no 2", "wow so many jokes"]);
console.log(`The joke teller knows ${joke.numberOfJokes}`)
console.log(joke.tellAJoke());

const server = express();
const port = (process.env.PORT || 8080);

server.set('port', port);
server.use(express.static('public'));


server.get('/jokes', async (req, res) => {
  
  
    // Send a request to the task module to get all tasks
    const getJokes = req.query.joke
  
    res.status(200).json(getJokes);
    // return tasks;
    
  });


// Vi starter serveren med funksjonen listen. 
// Den krever en port så den henter vi fra det vi satt i serveren vår tidligere. 
server.listen(server.get('port'), function () {
    console.log('server running', server.get('port')); 
});