app.controller('myController', function($scope){
    $scope.msg = "angular is easy!!";
    $scope.name = "ranjit";
    $scope.fruits = ['apple', 'orange', 'grapes'];
    $scope.favFruit = $scope.fruits[0];
    $scope.students = [
        {name:'sumit', id:'0', subjects:['paint','music','games']},
        {name:'das', id:'1', subjects:['english','maths','history']},
        {name:'nazim', id:'2', subjects:['biology','geography','hindi']},
    ];
    $scope.selectedStudentId = $scope.students[2].id;
});