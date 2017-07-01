HomeController.$inject = ['HomeService'];

function HomeController() {
	const vm = this;

	vm.student = []

	activate();
	
	function activate(){
		loadAllStudents();
	}

	function loadAllStudents(){
		HomeService
			.loadAll()
			.then(function resolve(response){
				vm.beer = response.data.user;
			});
	}
};

module.exports = HomeController;