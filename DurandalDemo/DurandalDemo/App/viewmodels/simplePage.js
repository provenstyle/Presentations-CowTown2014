define(['model/messageService'], function(service) {

    return {
        message: service.getMessage()
    };
});