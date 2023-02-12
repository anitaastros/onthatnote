import express from 'express'

const server = express();
const port = (process.env.PORT || 8080);

server.set('port', port);
server.use(express.static('public'));


// Vi starter serveren med funksjonen listen. 
// Den krever en port så den henter vi fra det vi satt i serveren vår tidligere. 
server.listen(server.get('port'), function () {
    console.log('server running', server.get('port')); // dersom alt gikk som forventet så skal du se denne meldingen i terminalen / log
});