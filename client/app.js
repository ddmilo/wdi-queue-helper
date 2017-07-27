const angular = require('angular');
require('angular-ui-router');

angular
	.module('wdi-queue-helper', ['ui.router'])
	.config(uiRouterSetup);

uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];
function uiRouterSetup($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('auth', {
			url: '/sessions/login',
			template: '<auth></auth>'
		})
		.state('home', {
			url: '/',
			template: '<home></home>'
		})
		.state('about', {
			url: '/about',
			template: '<about></about>'
		})
	$urlRouterProvider.otherwise('/');
}