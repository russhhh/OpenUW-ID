OER.Views = OER.Views || {};
OER.Views.ElectronicStructureOfTheAtom = OER.Views.ElectronicStructureOfTheAtom || {};

(function () {
    'use strict';

    OER.Views.ElectronicStructureOfTheAtom.WhyStableAtoms = Backbone.View.extend({

        template: JST['app/scripts/templates/RLO1/Row1_Col1.ejs'],

        events: {},

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
            this.render();
        },

        render: function () {
            this.setElement(this.template());
        }

    });

})();