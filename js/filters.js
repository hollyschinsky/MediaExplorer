'use strict';

/* Filters */
mediaApp.filter('capitalize', function() {
    return function(input, scope) {
        if (input)
            return input.substring(0,1).toUpperCase()+input.substring(1);
    }
});

