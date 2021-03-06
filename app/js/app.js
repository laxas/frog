'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['ngSanitize','myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/login', {template: 'partials/login.html', controller: LoginController});

    $routeProvider.when('/mystuff', {template: 'partials/my-stuff.html', controller: MyStuffController});
    $routeProvider.when('/mystuff/:id', {template: 'partials/my-stuff-edit.html', controller: MyStuffEditController});

    $routeProvider.when('/share-stuff', {template: 'partials/share-stuff.html', controller: ShareStuffController});

    $routeProvider.when('/friends', {template: 'partials/friends.html', controller: FriendsController});
    $routeProvider.when('/friends/:id', {template: 'partials/friend-edit.html', controller: FriendEditController});
    $routeProvider.when('/addFriend/:name/:userAddress/:secret', {template: 'partials/friends.html', controller: FriendsController});
    $routeProvider.when('/addFriend/:name/:userAddress', {template: 'partials/friends.html', controller: FriendsController});

    $routeProvider.when('/invitation/:user@:host/:secret', {template: 'partials/friend.html', controller: FriendViewController});
    $routeProvider.when('/:user@:host/:secret', {template: 'partials/friend.html', controller: FriendViewController});
    $routeProvider.when('/invitation/:user@:host', {template: 'partials/friend.html', controller: FriendViewController});
    $routeProvider.when('/:user@:host', {template: 'partials/friend.html', controller: FriendViewController});

    $routeProvider.when('/friends-stuff', {template: 'partials/friends-stuff.html', controller: FriendsStuffController});

    $routeProvider.when('/account', {template: 'partials/profile.html', controller: ProfileController});
    $routeProvider.when('/profile', {template: 'partials/profile.html', controller: ProfileController});
    $routeProvider.when('/export', {template: 'partials/account-export.html', controller: ExportController});
    $routeProvider.when('/import', {template: 'partials/account-import.html', controller: ImportController});
    $routeProvider.when('/settings', {template: 'partials/account-settings.html', controller: AccountController});

    $routeProvider.when('/about', {template: 'partials/about.html', controller: AboutController});
    $routeProvider.otherwise({redirectTo: '/friends-stuff'});
  }]);

angular.element(document).ready(function() {
    angular.bootstrap(document,['myApp']);
});
