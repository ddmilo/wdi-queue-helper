angular
    .module('wdi-queue-helper')
    .service('HomeService', HomeService);

HomeService.$inject = ['$http'];

function HomeService($http){
    const self = this;

    self.loadAll = loadAll;
    self.addStudent = addStudent;
    self.deleteStudent = deleteStudent;

    function loadAll(students){
        return $http.get('/api/students');
    }

    function addStudent(student){
        return $http.post('/api/students', student);
    }

    function deleteStudent(student) {
        return $http.delete('api/students/delete' + student.id);
  }
}    