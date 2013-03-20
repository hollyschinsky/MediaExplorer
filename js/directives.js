'use strict';

/* Directives */
mediaApp.directive('videoLoader', function(){
    return function (scope, element, attrs){
        console.log(scope.url);
        scope.$watch("url",  function(newValue, oldValue){ //watching the scope url value
            element[0].children[0].attributes[3].value=newValue; //set the URL on the src attribute
            element[0].load();
            element[0].play();
        }, true);
        scope.$watch("showFlag",  function(newValue, oldValue){
            if (!newValue) // if the showFlag is false, stop playing the video (modal was closed)
                element[0].pause();
        }, true);
    }
});

mediaApp.directive('showModal', function(){
    return function (scope, element, attrs){
        scope.$watch("showFlag",  function(newValue, oldValue){
            console.log(newValue);
            if (newValue)
                element.addClass("show");
            else element.removeClass("show");
        }, true);
    }
});