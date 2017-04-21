var template = require('../templeteEmails');

module.exports = function(app) {
	app.get('/templateEmails', function(req, res) {
		res.send(template.bridal);
	});
}