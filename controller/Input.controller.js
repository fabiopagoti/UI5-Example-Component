sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";

    return Controller.extend("com.namespace.controller.Input", {

        onAfterRendering: function() {
            this.getView().setModel(sap.ui.getCore().getModel());
            sap.ui.getCore().getModel().attachRequestCompleted(this.setPath, this);
        },

        onButtonPressed: function() {

            var mod2 = sap.ui.getCore().getModel();
            console.log(mod2);
            mod2.loadData("//api.openweathermap.org/data/2.5/weather", {
                q: this.byId("city_name").getValue()
            });

        },

        setPath: function() {
            this.byId("city_name").bindProperty("description", {
                path: "/main/temp"
            })
        }

    });

});
