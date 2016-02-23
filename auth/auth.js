'use strict';

module.exports = function auth(options) {

	this.add('role:auth,cmd:login', function(msg, respond) {
		if (msg.email === 'otaviokk@gmail.com') {
			return respond(null, {
				answer: true
			});
		}
		respond('Credenciais inválidas');
	});

};