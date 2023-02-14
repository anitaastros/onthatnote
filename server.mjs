
import express from 'express'
import Joke from './node_modules/jokemaster/joke.mjs';
import Dictionary from './node_modules/languagemodule/Dictionary.mjs';

const languages = ["./lan/no.json", "./lan/en.json"];
const newDictionary = new Dictionary(...languages);


const server = express();
const port = (process.env.PORT || 8080);

server.set('port', port);
server.use(express.static('public'));

//need to fix how to get jokes in english 
server.get('/en/jokes', async (req, res) => {
  try {
    await newDictionary.setLanguage('en');
    console.info('Setting language as: en');
  } catch (error) {
    res.status(400).end();
  }

  const englishJokes = newDictionary.get("jokes");
  console.info('Getting english jokes: ', englishJokes);

  const joke = new Joke(englishJokes);
  console.info('Creating a new Joke instance: ', joke);

  const getJoke = joke.tellAJoke();
  console.info('Joke fetched: ', getJoke);

  res.status(200).json(getJoke);
});

//need to fix how to get jokes in norwegian
server.get('/no/jokes', async (req, res) => {
  await newDictionary.setLanguage('no');
  console.info('Setting language as: no');

  const norwegianJokes = newDictionary.get("jokes");

  const joke = new Joke(norwegianJokes);
  const getJokes = joke.tellAJoke();

  res.status(200).json(getJokes);
});

server.listen(server.get('port'), function () {
  console.log('server running', server.get('port'));
});