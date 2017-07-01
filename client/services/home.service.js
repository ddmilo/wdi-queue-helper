angular
    .module('wdi-queue-helper')
    .service('HomeService', HomeService);

HomeService.$inject = ['$http'];

function HomeService($http){
    const self = this;

    self.loadAll = loadAll;

    function loadAll(){
        return $http.get('/');
    }
}    