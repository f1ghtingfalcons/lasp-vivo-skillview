'use strict';

/* App Module */
var vivoviz = angular.module("vivoviz", []) //dependencies go inside the square brackets
.config(function ($routeProvider, $httpProvider) {
$routeProvider. //this controls navigation within our app
when('/', { controller: SkillsCtrl, templateUrl: 'partials/all-skills.html' }).
otherwise({ redirectTo: '/' });

//enable crossdomain requests
$httpProvider.defaults.withCredentials = true;
delete $httpProvider.defaults.headers.common["X-Requested-With"];
delete $httpProvider.defaults.headers.post["Content-Type"];
});
