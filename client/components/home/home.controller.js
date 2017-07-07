HomeController.$inject = ['HomeService', '$stateParams', '$state'];

function HomeController(HomeService, $stateParams, $state) {
	const vm = this;

	vm.students = [];
	vm.newStudent = {};
	vm.addStudent = addStudent;
	vm.deleteStudent = deleteStudent;

	activate();

	function activate(){
		console.log('home state relaoded');
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

	function addStudent(){
		HomeService
			.addStudent(vm.newStudent)
			.then(function(req, res, next) {
				vm.students.push(req.data.student);
			});
		
		vm.newStudent = {};
	}

	function deleteStudent(){
		HomeService
			
	}
}

module.exports = HomeController;
