app.controller('MainController', ['$scope', 'computer', '$location', '$timeout', function($scope, $computer, $location, $timeout) {
    // console.log("main");
    /**
     * Variables
     */
    $scope.message = "";
    $scope.time = 3000;
    $scope.flagPower = '';
    $scope.disabledBtn = false;
    /**
     * get computer status
     */
    $scope.getNewStatusComputer = function() {
        if ($scope.computerStatus) {
            // $scope.message = "La computadora esta en uso. Apagala para configurar las caracteristicas";
            $scope.message = "Computer active...turn off the computer to load new settings..."
            $scope.screenClass = ['screen', 'screen-power-on'];
            $scope.flagPower = 'power-on';
            $scope.btnClass = ['btn-control', 'btn-control-power-on'];
        } else {
            $scope.message = "";
            $scope.screenClass =['screen', 'screen-power-off'];
            $scope.flagPower = 'power-off';
            $scope.btnClass = ['btn-control'];
        }
    }
    /**
     * Turn on/off my computer and load settings
     */
    $scope.toggleComputer = function () {
        // console.log($scope.computerStatus)
        $scope.disabledBtn = true;
        if (!$scope.computerStatus) {
            $scope.message = "Please wait...loading settings...";
            // $scope.message = "Espere un momento....cargando configuraciones....";
        } else {
            $scope.message = "Please wait...the computer is shutting down.."
            // $scope.message = "Espere un momento....apgando el equipo....";
        }
        $timeout(() => {
            $computer.toggleComputer();
            $scope.computerStatus = $computer.getComputerStatus();
            $scope.getNewStatusComputer();
            $scope.disabledBtn = false;
        }, $scope.time);
    }
    /**
     * Redirect to info page...
     */
    $scope.redirect = function() {
        $location.path('/info');
    }
    
    // Get status computer from my service
    $scope.computerStatus = $computer.getComputerStatus();
    $scope.getNewStatusComputer();
}]);