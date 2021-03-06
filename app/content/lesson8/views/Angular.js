/* OER is our project namespace, used to avoid collisions with other project and browser supported code
 * OER.Views is the scope we use for views to keep things organized
 * OER.Views.Sandbox is the scope for views for this content
 * the || {} is creating an empty object for this if it does not exist already
 */
OER.Views = OER.Views || {};    
OER.Views.ElectronicStructureOfTheAtom = OER.Views.ElectronicStructureOfTheAtom || {};

(function () {
    'use strict';
    
    var p = {};     // prototype for this class
    var s = {};     // static for this class
    
    p.template= JST['app/content/lesson1/templates/R2_Angular.ejs'];     // template used to create html for this view
    p.events = {};  // events, used by backbone to set up event handlers on html elements

    //p.button = null;        // html button element    
    p.stage = null;         // easeljs stage
    p.width = null;         // stage width
    p.height = null;        // stage height
    p.electrons = null;     // array of easeljs shapes
    p.nucleus = null;       // easeljs shape
     
    p.tickerBind = null;    // reference to bound function, binding lets us call back in this scope
    p.buttonBind = null;    // reference to bound function
 
    p.electronProps = {
        angle:    0.0,           // initial angle, with
        angleInc: 0.01,  // 0.04
        originX: 400,    originY: 200,
        radius:  100,  //  Orbital Radius
        colour: "rgba(200,255,100,1.0)",
        size: 50
    }; 
    
    /**
     * backbone initialize function
     * called on creation by OER.LessonBaseView.updateContent
     * @param {Backbone.Model} model A MapCardModel with related data 
     */
    p.initialize = function (model) {
        if (model) { this.model = model; }
        //this.listenTo(this.model, 'change', this.render);
        this.render();
    };

    /**
     * backbone render function, which builds html from template
     * called by initialize
     */
    p.render = function () {
        if(this.model) {
            this.setElement(this.template(this.model.toJSON()));    // create the html for this view
        } else {
            this.setElement(this.template());
        }
        var e = this.electronProps;
        // setup createjs stage and touch support
        var c = $(".lesson-content-canvas", this.$el)[0];
        this.stage = new createjs.Stage(c);
        if (createjs.Touch.isSupported()) {createjs.Touch.enable(this.stage);}
        this.width = c.width;
        this.height = c.height;
        
       // draw Static circle (nucleus)
//        this.nucleus = new createjs.Shape();
//        this.nucleus.graphics.beginFill(e.colour).drawRect(-15,-15,30,30);//;drawCircle(0, 0, 20);
//        this.nucleus.x =  e.originX; // x position
//        this.nucleus.y =  e.originY;
//        this.stage.addChild(this.nucleus);  // add this shape to the stage
        
        // draw circle (electron)
        this.electronProps.angle = 0.0;
        this.makeBar();
        this.electrons = [];    // create empty array
        this.electronProps.angle = 0.0;
        this.makeElectron();
        this.electronProps.angle = Math.PI;
        this.makeElectron();
 
        // set up createjs ticker to update stage
        createjs.Ticker.timingMode = createjs.Ticker.RAF;   // sets ticks to happen on browser request animation frame
        this.tickerBind = this.tick.bind(this);
        createjs.Ticker.addEventListener("tick", this.tickerBind);
    };
    
    /**
     * createjs tick event, that is run multiple frames per second
     * called by createjs tick event
     * @param {type} event
     */
    p.tick = function(event) {
        // update the stage
        this.stage.update(event);   // redraw shapes on the stage
    };

    /*
     * clean up stage events and call super remove
     * called by OER.lessonBaseView
     * @param {type} options
     */
    p.remove = function(options) {
       // this.button.removeEventListener("click");
        if (createjs.Touch.isSupported()) {createjs.Touch.disable(this.stage);}
        createjs.Ticker.removeEventListener("tick", this.tickerBind);
        Backbone.View.prototype.remove.call(this, options);
    };
    
    p.makeElectron = function() {
        var e = this.drawElectron();
        this.stage.addChild(e); // add electron to stage
        this.electrons.push(e); // add electron to array
    };

    p.makeBar = function() {
        var e = this.drawBar();
        this.stage.addChild(e); // add electron to stage
        //this.electrons.push(e); // add electron to array
    };

// ELECTRON CODE *********************************************************************************
    // draw electron and add it to stage
    p.drawElectron = function() {
        // Actual Orbital radius
        var e = this.electronProps; // convenience
        var radius = Math.round(e.radius); // orbital radius
        
        var electron = new createjs.Shape();
        electron.graphics.beginFill(e.colour).drawCircle(0, 0, e.size); // electron radius
        electron.x =  e.originX;           // initial x position
        electron.y =  e.originY + radius;
        electron.on("tick",this.electronTick);  // add tick listener to electron, which is called by createjs tick event
        
        // Define parameters to be used for each tick
        var v = electron.tickProps = {};
        v.originX     = e.originX;
        v.originY     = e.originY;
        v.angle       = e.angle; // Math.random()*e.angleDelta    + e.angle;
        v.angleInc    = e.angleInc; //Math.random()*e.angleIncDelta + e.angleInc;
        v.radius      = radius;
        return electron;
    };
   
    p.drawBar = function() {
        // Actual Orbital radius
        var e = this.electronProps; // convenience
       // var radius = Math.round(e.radius); // orbital radius
        
        var bar = new createjs.Shape();
        bar.graphics.beginFill("darkred").drawRect(-20/2,-150/2,20,150); //.drawCircle(400, 200, 30); // electron radius
        bar.x =  e.originX;           // initial x position
        bar.y =  e.originY;// + radius;
        bar.on("tick",this.barTick);  // add tick listener to electron, which is called by createjs tick event
        
        // Define parameters to be used for each tick
        var v = bar.tickProps = {};
        v.originX     = e.originX;
        v.originY     = e.originY;
        v.angle       = e.angle; // Math.random()*e.angleDelta    + e.angle;
        v.angleInc    = e.angleInc; //Math.random()*e.angleIncDelta + e.angleInc;
      //  v.radius      = radius;
        return bar;
    };  
   
    p.electronTick = function () {
        // Electron spirals in to nucleus
        var t = this.tickProps;
        this.x = t.originX + t.radius*Math.sin(t.angle);  // 
        this.y = t.originY + t.radius*Math.cos(t.angle);
        t.angle += t.angleInc;
    };

    p.barTick = function () {
        // Electron spirals in to nucleus
      var t = this.tickProps;
        
     this.rotation = 180*t.angle/Math.PI;//-= 1;
       // this.x = t.originX + t.radius*Math.sin(t.angle);  // 
       // this.y = t.originY + t.radius*Math.cos(t.angle);
        t.angle -= t.angleInc;
    };

    // add the above code as a backbone view class in our namespace
    OER.Views.ElectronicStructureOfTheAtom.Angular = Backbone.View.extend(p, s);    

})();
