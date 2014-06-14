define(function() {

    var messages = ['Hello', 'Hi', "Howdy, Yall!"];

    return {
        getMessage: function() {
            return messages[Math.floor(Math.random() * messages.length)];
        }
    }
});