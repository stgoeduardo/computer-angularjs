app.factory('computer', function(){
    return {
        // power on/off
        computerStatus: false,
        // value default
        /*computerRamMemory: {
            speed: "1440Mhz",
            releaseDate: "Tue Feb 20 2020 13:00:13 GMT+0000 (UTC)",
            price: "2400.00",
            architecture: "gigabite",
            ramMemory: "8GB",
            serial: 1000,
            name: "ram-gigabite-GFT-mx"
        },
        computerProcessor: {
            overclock: false,
            releaseDate: "Tue Feb 20 2020 16:00:13 GMT+0000 (UTC)",
            cores: 4,
            price: "4500.00",
            architecture: "32bit",
            provider: "intel",
            ramMaxMemory: "126GB",
            serial: 2000,
            name: "core-gft-2000-ryzen"
        },
        computerHdd: {
            releaseDate: "Tue Feb 20 2020 10:00:13 GMT+0000 (UTC)",
            size: "256GB",
            price: "3000.00",
            speed: "ssd",
            provider: "GFT-mx",
            serial: 3000
        },*/
        computerHdd: {
            name: 'hdd-gft-test',
            model: 'Test HDD',
            cost_in_credits: '1000',
            max_atmosphering_speed: '1000',
            cargo_capacity: '10',
            consumables: '0',
            vehicle_class: 'repulsorcraft',
            created: '2019-10-10T17:10:50.410000Z',
            _id: 'gft-hdd-0'
        },
        computerRamMemory: {
            name: 'ram-gft-test',
            model: 'Test RAM',
            cost_in_credits: '500',
            max_atmosphering_speed: '10',
            cargo_capacity: '5',
            consumables: '0',
            hyperdrive_rating: '1.0',
            starship_class: 'Star dreadnought',
            created: '2016-09-04T17:11:50.410000Z',
            _id: 'gft-ram-0'
        },
        computerProcessor: {
            name: 'pro-gft-test',
            classification: 'test-processor',
            designation: 'sentient',
            average_height: '200',
            average_lifespan: '200',
            language: 'English',
            created: '2018-02-01T17:14:50.410000Z',
            _id: 'gft-pro-0'
        },
        computerGraphicCard: {
            name: 'graphic-gft-test',
            rotation_period: '24',
            orbital_period: '365',
            diameter: '10000',
            climate: 'temperate',
            gravity: '1 standard',
            terrain: 'mountains',
            surface_water: '20',
            population: '1000',
            created: '2020-06-05T19:14:50.410000Z',
            _id: 'gft-gra-0'
        },
        newConfigHdd: {},
        newConfigRamMem: {},
        newConfigProcessor: {},
        newConfigGraphicCard: {},
        // -- set
        setComputerHdd: function(newDataHdd) {
            // this.computerHdd = newDataHdd;
            this.newConfigHdd = newDataHdd;
        },
        setComputerRamMemory: function (newDataRamMem) {
            // this.computerRamMemory = newDataRamMem;
            this.newConfigRamMem = newDataRamMem;
        },
        setComputerProcessor: function (newDataProcessor) {
            // this.computerProcessor = newDataProcessor;
            this.newConfigProcessor = newDataProcessor;
        },
        setComputerGraphicCard: function(newDataGraphicCard) {
            // this.computerGraphicCard = newDataGraphicCard;
            this.newConfigGraphicCard = newDataGraphicCard;
        },
        // -- get
        getComputerHdd: function () {
            if (Object.entries(this.newConfigHdd).length > 0) {
                return this.newConfigHdd;
            }
            return this.computerHdd;
        },
        getComputerRamMemory: function () {
            if (Object.entries(this.newConfigRamMem).length > 0) {
                return this.newConfigRamMem;
            }
            return this.computerRamMemory;
        },
        getComputerProcessor: function () {
            if (Object.entries(this.newConfigProcessor).length > 0) {
                return this.newConfigProcessor;
            }
            return this.computerProcessor;
        },
        getComputerGraphicCard: function () {
            if (Object.entries(this.newConfigGraphicCard).length > 0) {
                return this.newConfigGraphicCard;
            }
            return this.computerGraphicCard;
        },
        // --
        resetConfigComputer: function() {
            this.newConfigHdd = {};
            this.newConfigRamMem = {};
            this.newConfigProcessor = {};
            this.newConfigGraphicCard = {};
        },
        //
        toggleComputer: function () {
            this.computerStatus = !this.computerStatus;
            // console.log("toggle ", this.computerStatus)
        },
        getComputerStatus: function() {
            return this.computerStatus;
        }
    };
});