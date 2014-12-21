var app = angular.module('studyApp', ['bgDirectives', 'angularTreeview', 'ui.router']);

console.info('angular version = ' + angular.version.full);

app.controller('StudyCtrl', function($scope, $location) {
    var vm = this;
    vm.studyCategories = [{
        'name': 'Portfolio Study',
        'id': '0',
        'items': [{
            'id': '01',
            'name': 'awesome Portfolio'
        }, {
            'id': '02',
            'name': 'market pf'
        }]
    }];

    $scope.$watch('studyList.currentNode', function(newObj, oldObj) {
        if ($scope.studyList && angular.isObject($scope.studyList.currentNode)) {
            console.log($scope.studyList.currentNode);
            $location.path('/route1/' + $scope.studyList.currentNode.name);
        }
    }, false);
});

app.config(function($stateProvider, $urlRouterProvider) {

    // For any unmatched url, send to /route1
    $urlRouterProvider.otherwise("/route1")

    $stateProvider
        .state('route1', {
            url: "/route1/:pf",
            template: "<div ng-controller=\"PITSummaryCtrl as pitSum\"><h1>{{pitSum.message}} {{location}}</h1></div>",
            controller: function($scope, $stateParams) {
                $scope.location = $stateParams.pf;
            }
        })
        .state('route2', {
            url: "/route2/:pf",
            template: "<div ng-controller=\"PITSummaryCtrl as pitSum\"><h1>{{pitSum.message}} {{location}}</h1></div>",
            controller: function($scope, $stateParams) {
                $scope.location = $stateParams.pf;
            }
        })

})
