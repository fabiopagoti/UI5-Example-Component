sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
], function(UIComponent, JSONModel) {
    "use strict";
    return UIComponent.extend("com.namespace.Component", {
        metadata: {
            manifest: "json"
        },
        init: function() {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            // set data model
            var oData = {
                city: {
                    name: "Sao Paulo",
                    temp: 30
                }
            };
            var oModel = new JSONModel(oData);
            sap.ui.getCore().setModel(oModel);
        }
    });
});
