'use strict';
angular.module('starter')

.controller('HelpCtrl', function($scope) {

  console.log("HelpPage");

  $scope.groups = [];

  $scope.groups[0] = {name: 1, title: "O que é", items:[]};
  $scope.groups[1] = {name: 2, title: "Como Avaliar", items:[]};
  $scope.groups[2] = {name: 3, title: "Avaliação Positiva", items:[]};
  $scope.groups[3] = {name: 4, title: "Avaliação Negativa", items:[]};

  $scope.groups[0].items.push('texto 1');
  $scope.groups[1].items.push('texto 2');
  $scope.groups[2].items.push('texto 3');
  $scope.groups[3].items.push('texto 4');

  // Don't Touch
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };

  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
});
