const template = require('./auth.html');

const AuthComponent = {
  template: template
};

angular
  .module('wdi-queue-helper')
  .component('auth', AuthComponent);