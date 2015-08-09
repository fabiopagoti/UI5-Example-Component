sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";

    return Controller.extend("com.namespace.controller.Root", {

        onAfterRendering: function() {
        	sap.ui.getCore().getModel().attachRequestCompleted(this.setPath,this);
        },

        onButtonPressed: function() {
            sap.ui.getCore().getModel()
            	.loadData("api.openweathermap.org/data/2.5/weather",
            	{
            		q: this.byId("city_name")
            	});

        },

        setPath: function(){
        	console.log("setPath");
        }

    });

});
