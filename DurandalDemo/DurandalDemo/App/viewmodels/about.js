define(['durandal/system'], function(system) {

    return {
        canActivate: function () {
            system.log("canActivate ****************");
            return true;
        }
    };
});