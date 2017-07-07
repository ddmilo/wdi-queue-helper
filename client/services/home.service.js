angular
    .module('wdi-queue-helper')
    .service('HomeService', HomeService);

HomeService.$inject = ['$http'];

function HomeService($http){
    const self = this;

    self.loadAll = loadAll;
    self.addStudent = addStudent;

    function loadAll(students){
        return $http.get('/api/students');
    }

    function addStudent(student){
        return $http.post('/api/students', student);
    }
}    