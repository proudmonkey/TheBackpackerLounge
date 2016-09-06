System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Place;
    return {
        setters:[],
        execute: function() {
            Place = (function () {
                function Place(ID, Name, Location) {
                    this.ID = ID;
                    this.Name = Name;
                    this.Location = Location;
                }
                return Place;
            }());
            exports_1("Place", Place);
        }
    }
});
