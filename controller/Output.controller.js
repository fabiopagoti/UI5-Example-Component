sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";

    return Controller.extend("com.namespace.controller.Output", {
    	onBackButtonPress: function(){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("input");
    	}

    });

});
