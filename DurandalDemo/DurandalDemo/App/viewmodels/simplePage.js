define(['model/messageService', 'durandal/system'], function(service, system) {

    return {
        message: service.getMessage(),
        activate: function (messageParam) {
            system.log("Activate ********* messageparam: " + messageParam);
            if (messageParam) {
                this.message = messageParam;
            };
        }
    };
});