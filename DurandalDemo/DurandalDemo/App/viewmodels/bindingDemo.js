define(['plugins/observable'], function(observable) {

    var vm = {};

    //The Knockout way
    vm.first = ko.observable('');
    vm.last = ko.observable('');

    vm.fullName = ko.computed(function() {
        return vm.first() + " " + vm.last();
    }, this);



    //Observable plugin
    //vm.first = '';
    //vm.last = '';

    //observable.defineProperty(vm, 'fullName', function() {
    //    return vm.first + " " + vm.last;
    //});



    return vm;
});