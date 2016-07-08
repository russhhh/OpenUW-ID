(function (scope) {
    var s = {};
    
    s.title = "Photoelectric Effect";
    s.preview = "/content/lesson5/assets/icon_photoelectriceffect.svg"; //svg image
    s.themeColor = "#FFC107";
    s.route = "PE";
    s.info = "";
    s.jumpNav = false;    
    s.primaryPathIndex = 0;
    
    s.contentMapData = [  
        // index 0,
        {
            startNode: true,
            endNode: true, 
            horizontalLinks: OER.linkType.strong,
            mapCards: [
                {route:"100_0", title:"PE Introduction"  },
                {route:"100_1", title:"PE History"       },
                {route:"100_2", title:"Scenarios"        }, 
                {route:"100_3", title:"Optical PE Effect"},           
                {route:"100_4", title:"X-ray, Low Z"     },      
                {route:"100_5", title:"Quiz: PE"     },      
            ],    
        },
         // index 1,
         {
            mapCards: [ 
                {route:"200_0", title:"" }, 
                {route:"200_1", title:"" },
                {route:"200_2", title:"" },  
                {route:"200_3", title:"Quantum Light"},           
            ],                  
        },
    ];

    scope.lesson5 = s;

}(window.OER.data = window.OER.data || {}));
