sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";

    return Controller.extend("com.namespace.controller.Input", {
        onInit: function() {

        },

        onAfterRendering: function() {
            this.getView().getModel().attachRequestCompleted(this.bindPath, this);
            this.initTexts();
        },

        initTexts: function() {
            this.byId("latitude_text").setText(this.byId("latitude_slider").getValue());
            this.byId("longitude_text").setText(this.byId("longitude_slider").getValue());
        },

        onLatitudeSliderChange: function(evt) {
            this.byId("latitude_text").setText(evt.getSource().getValue());
            this.getWeatherDataByCoordinates();
        },

        onLongitudeSliderChange: function(evt) {
            this.byId("longitude_text").setText(evt.getSource().getValue());
            this.getWeatherDataByCoordinates();
        },

        getWeatherDataByCoordinates: function() {
            this.getView().getModel().loadData("//api.openweathermap.org/data/2.5/weather", {
                lat: this.byId("latitude_slider").getValue(),
                lon: this.byId("longitude_slider").getValue(),
            });
        },

        onCityNameChanged: function(evt) {

            this.byId("latitude_slider")
                .bindProperty("value", {
                    path: "/coord/lat"
                });

            this.byId("longitude_slider")
                .bindProperty("value", {
                    path: "/coord/lon"
                });

            this.byId("latitude_text")
                .bindProperty("text", {
                    path: "/coord/lat"
                });

            this.byId("longitude_text")
                .bindProperty("text", {
                    path: "/coord/lon"
                });
            this.getView().getModel().loadData("//api.openweathermap.org/data/2.5/weather", {
                q: this.byId("city_name").getValue()
            });
        },

        onWeatherButtonPress: function(){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("output");
        },

        bindPath: function() {
            this.byId("city_name")
                .bindProperty("value", {
                    path: "/name"
                });

            this.byId("country_text")
                .bindProperty("text", {
                    path: "/sys/country"
                });

        }

    });

});
