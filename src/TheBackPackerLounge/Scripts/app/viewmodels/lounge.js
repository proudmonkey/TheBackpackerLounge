System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Lounge;
    return {
        setters:[],
        execute: function() {
            Lounge = (function () {
                function Lounge(ID, Subject, Message) {
                    this.ID = ID;
                    this.Subject = Subject;
                    this.Message = Message;
                }
                return Lounge;
            }());
            exports_1("Lounge", Lounge);
        }
    }
});
