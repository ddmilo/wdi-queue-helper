HomeController.$inject = ['HomeService', '$stateParams'];

function HomeController(HomeService, $stateParams) {
	const vm = this;

	vm.students = [];

	activate();

	function activate(){
		loadAllStudents();
	}

	function loadAllStudents(){
		HomeService
			.loadAll()
			.then(function resolve(response){
				console.log(response.data);
				vm.students = response.data.students;
				console.log(vm.students);
			});
	}
}

module.exports = HomeController;
