const server = require('./api/server.js');

const port = 4000;
server.listen(port, () => {
	console.log('\n*** Web API listening on 4k ***\n');
});
