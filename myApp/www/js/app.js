// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var myapp = angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

myapp.controller("ExampleController", function($scope, $cordovaCalendar) {

  $scope.createEvent = function() {
    $cordovaCalendar.createEvent({
      title: 'Space Race',
      location: 'The Moon',
      notes: 'Bring sandwiches',
      startDate: new Date(2015, 0, 15, 18, 30, 0, 0, 0),
      endDate: new Date(2015, 1, 17, 12, 0, 0, 0, 0)
    }).then(function (result) {
      console.log("Event created successfully");
    }, function (err) {
      console.error("There was an error: " + err);
    });
  }

});
