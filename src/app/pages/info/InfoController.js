app.controller('InfoController', ['$scope', 'computer', 'apiService', '$location', '$timeout', function ($scope, $computer, $apiService, $location, $timeout) {
    /**
     * Variables
     */
    $scope.screenClass = ['screen', 'screen-power-off'];
    $scope.selectedHdd = '';
    $scope.selectedRamMem = '';
    $scope.selectedProcessor = '';
    $scope.selectedGraphicCard = '';
    $scope.flagPower = '';
    $scope.message = '';
    $scope.alertClass = [];
    /**
     * Init method, for load all settings data of my computers
     */
    $scope.init = function() {
        // get features of my computer
        $scope.dataHdd = $computer.getComputerHdd();
        $scope.dataRamMem = $computer.getComputerRamMemory();
        $scope.dataProcessor = $computer.getComputerProcessor();
        $scope.dataGraphicCard = $computer.getComputerGraphicCard();
    }
    /**
     * When i change of my selects, set in variable
     */
    $scope.changeHdd = function (data) {
        let search = $scope.hdd.filter(item => item._id == data);
        $scope.dataHdd = search[0];
    }
    $scope.changeRamMem = function (data) {
        let search = $scope.ramMemory.filter(item => item._id == data);
        $scope.dataRamMem = search[0];
    }
    $scope.changeProcessor = function (data) {
        let search = $scope.processors.filter(item => item._id == data);
        $scope.dataProcessor = search[0];
    }
    $scope.changeGraphicCard = function (data) {
        let search = $scope.graphicCard.filter(item => item._id == data);
        $scope.dataGraphicCard = search[0];
    }
    /**
     * Add id data to my information that i get from my api service...
     */
    $scope.addId = function (data) {
        let id = 0;
        data.forEach(element => { element._id = id; id++; });
        return data;
    }
    /**
     * Reset settings, by default...
     */
    $scope.reset = function () {
        // Reset settings
        $computer.resetConfigComputer();
        $scope.init();
        $scope.showMessage(false);
    }
    /**
     * Save new settings
     */
    $scope.save = function() {
        // Save
        $computer.setComputerHdd($scope.dataHdd);
        $computer.setComputerRamMemory($scope.dataRamMem);
        $computer.setComputerProcessor($scope.dataProcessor);
        $computer.setComputerGraphicCard($scope.dataGraphicCard);
        $scope.showMessage(true);
    }
    /**
     * 
     */
    $scope.showMessage = function(flag) {
        if (flag) {
            $scope.message = 'Saved settings!';
            $scope.alertClass = ['alert', 'alert-info'];        
        } else {
            $scope.message = 'Reset settings!';
            $scope.alertClass = ['alert', 'alert-success'];
        }
        
        $timeout(() => {
            $scope.message = '';
        }, 4000);
    }
    /**
     * Check what key press for redirect or doing something,...
     */
    $scope.testkeycode = function (keyCode) {
        // console.log("key code ", keyCode)
        if (keyCode.which === 27) {
            $location.path('/');
        } else if (keyCode.which === 13) {
            $scope.save();
        } else if(keyCode.which === 82) {
            $scope.reset();
        }
    }
    /**
     * Call init and get status computer...
     */
    $scope.init();
    $scope.computerStatus = $computer.getComputerStatus();
    /**
     * check computer status for get or not data from my api service
     */
    if(!$scope.computerStatus) {
        $scope.screenClass.pop();
        $scope.screenClass.push('screen-power-off');
        $scope.flagPower = 'power-off';
        /**
         * Make request to my api service, for vehicles, species, starships & planets...
         */
        $apiService._get('vehicles').success(function (data) {
            let newData = $scope.addId(data.results);
            $scope.selectedHdd = newData[0]._id;
            $scope.hdd = newData;
        });
        $apiService._get('species').success(function (data) {
            let newData = $scope.addId(data.results);
            $scope.selectedProcessor = newData[0]._id;
            $scope.processors = newData;
        });
        $apiService._get('starships').success(function (data) {
            let newData = $scope.addId(data.results);
            $scope.selectedRamMem = newData[0]._id;
            $scope.ramMemory = newData;
        });
        $apiService._get('planets').success(function (data) {
            let newData = $scope.addId(data.results);
            $scope.selectedGraphicCard = newData[0]._id;
            $scope.graphicCard = newData;
        });
    } else {
        /**
         * Handle CSS classes for my elements
         */
        $scope.screenClass.pop();
        $scope.screenClass.push('screen-power-on');
        $scope.flagPower = 'power-on';
    }
}]);