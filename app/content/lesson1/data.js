(function (scope) {
    var s = {};
    
    s.title = "The Electronic Structure of the Atom";
    s.preview = "/content/lesson1/assets/AtomPlay.svg"; //svg image
    s.route = "ElectronicStructureOfTheAtom";
    s.info = "";
    s.primaryPathIndex = 3;
    
    s.contentMapData = [
        // index 0
        {
            mapCards: [
                {title:"", image: "", route:"100_0"},
                {title:"", image:"", route:""},
                {title:"", image:"", route:""},
                {title:"", image:"", route:""},
                {title:"", image:"", route:""},
            ],
        },   
        // index 1
        {
            mapCards: [
                {title:"", image:"", route:"200_0"},
                {title:"", image:"", route:"200_1"},
                {title:"", image:"", route:""},           
                {title:"Classical Physics (1800s)\n\n \n 200.3", image:"", route:"200_3"},
                {title:"", image:"", route:""},
                {title:"Classical Waves and Standing Waves \n\n 200.5", image:"", route:"200_5"},
                {title:"", image:"", route:""},
                {title:"", image:"", route:""},
                {title:"", image:"", route:""},
            ],
        },  
        //index 2
        {
            mapCards: [
                {title:"", image:"", route:""},
                {title:"", image:"", route:""},
                {title:"", image:"", route:""},          
                {title:"Classical Electro - magnetism      \n \n \n 300.3", image:"", route:"300_3"},
                {title:"Angular Momentum                \n \n \n 300.4", image:"", route:"300_4"},
                {title:"Math of Classical Standing Waves \n \n 300.5", image:"", route:"StandingWavesMath"},
                {title:"", image:"", route:""}, 
                {title:"Quantum Mechanics               \n \n \n 300.7", image:"", route:"300_7"},           
            ],
        }, 
        // index 3 
        {
            mapCards: [
               {title:"Atomic Models   \n \n\n \n 400.0",  image:"", route:"400_0"},
               {title:"Dalton's Atoms (1805)        \n\n \n 400.1",  image:"", route:"400_1"},
               {title:"Plum Pudding Atom (1904)   \n\n \n 400.2 ", image:"", route:"400_2"},  
               {title:"Solar System Atom (1910's)   \n\n \n 400.3 ", image:"", route:"SolarSystem"}, 
               {title:"Bohr Quantized Atom (1913)   \n\n \n 400.4", image:"", route:"400_4"}, 
               {title:"QM Atom 1: Matter Waves      \n\n \n 400.5", image:"", route:"400_5"},
               {title:"QM Atom 2: Nuclear Potential \n \n 400.6", image:"", route:"NuclearPotential"}, 
               {title:"QM Atom 3: Trapped Waves     \n\n \n 400.7", image:"", route:"400_7"},
               {title:"Beyond the Quantum Atom      \n\n \n 400.8 ", image:"", route:"400_8"},          
            ],
        },
        // index 4 
        {
            mapCards: [
               {title:"",       image:"", route:"500_0"},
               {title:"",       image:"", route:"500_1"},
               {title:"",       image:"", route:"500_2"},
               {title:"Cracks                   \n   \n \n\n 500.3", image:"", route:"500_3"},
               {title:"", image:"", route:"500_4"}, 
               {title:"", image:"", route:""},
               {title:"", image:"", route:"500_6"},
               {title:"Modern Electron Shell Model \n \n 500.7", image:"", route:"500_7"},          
            ], 
        },
        // index 5  
        {
            mapCards: [
               {title:"", image:"", route:""},
               {title:"", image:"", route:""},
               {title:"", image:"", route:""},
               {title:"Atomic Spectra & Rydberg Formula \n \n 600.3", image:"", route:"600_3"}, 
               {title:"", image:"", route:""},
               {title:"", image:"", route:""},
               {title:"", image:"", route:""}, 
               {title:"Successes of Quantum Atom \n \n\n 600.7", image:"", route:"600_7"},          
            ],
        },
          // index 6 
          {
            mapCards: [
               {title:"", image:"", route:""},
               {title:"", image:"", route:""},
               {title:"", image:"", route:""},
               {title:"", image:"", route:"700_3"}      
            ],
        },
    ];

    scope.lesson1 = s;

}(window.OER.data = window.OER.data || {}));
