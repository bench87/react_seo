module.exports.index = index;
module.exports.login = login;
module.exports.loginProcess = loginProcess;
module.exports.chat = chat;
var React = require('react');
var timer = React.createFactory(require('../static/js/Timer'));
var props = {items: [0, 1, 3, 5]};
var markup = React.renderToString(timer());
function index (req, res) {
    res.render('index', {title: markup});
};

function login(req, res) {
    res.send('Login');
};

function loginProcess(req, res) {
    res.redirect('/');
};

function chat(req, res) {
    res.send('chat');
};
