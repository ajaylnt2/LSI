angular.module('lsi')
// filter for roundup the decimal number for two digits
.filter('roundup', function () { 
    return function (value) {
         var a = value * 100;
        return Math.round(a);
    };
})
// filter for pagination of the table
.filter('startForm', function () {
    return function (input, start) {
        if (!input || !input.length) { return; }

        start = +start;
        return input.slice(start);
    };
});