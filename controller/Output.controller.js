sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";

    return Controller.extend("com.namespace.controller.Output", {
        onBackButtonPress: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("input");
        },

        formatTemperature: function(celcius) {
            if (celcius !== undefined) {
                return celcius;
            } else {
                return "";
            };
        },

        formatPressure: function(pressure) {
            if (pressure !== undefined) {
                return pressure;
            } else {
                return "";
            };
        },

        formatHumidity: function(humidity) {
            if (humidity !== undefined) {
                return humidity;
            } else {
                return "";
            };
        }

    });

});
