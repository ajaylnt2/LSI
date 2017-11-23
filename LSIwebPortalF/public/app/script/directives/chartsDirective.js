angular.module('lsi')
            // Directive for generic chart, pass in chart options
.directive('hcChart', function () {
    return {
        restrict: 'E',
        template: '<div class="chart"></div>',
        scope: {
            options: '='
        },
        link: function (scope, element) {
            Highcharts.chart(element[0], scope.options);
        }
    };
});
         