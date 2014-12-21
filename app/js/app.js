var app = angular.module('studyApp', ['bgDirectives', 'angularTreeview']);

console.info('angular version = ' + angular.version.full);

app.controller('StudyCtrl', function() {
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
});
