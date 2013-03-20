'use strict';

/* Controllers */

mediaApp.controller('MediaListCtrl',function($scope,MediaService,$resource,$http){
    $scope.searchTerm = "Rhianna";
    $scope.orderProp = "kind";
    $scope.showFlag = false;

    $scope.doSearch = function () {

        //var url = "https://itunes.apple.com/search?callback=JSON_CALLBACK&term=Rhianna";
//        $http.jsonp(url)
//            .success(function(data){
//                console.log(data.results);
//                $scope.mediaResults = data.results;
//                $('#resultsTbl').css('display','table');
//                $scope.searchTerm = "";
//                console.log("Results length "+ $scope.mediaResults.length);
//            });

        MediaService.get({term:$scope.searchTerm},function(response){
            $scope.mediaResults = response.results;
            $('#resultsTbl').css('display','table');
            $scope.searchTerm = "";
        });

//        $scope.media.get({term:$scope.searchTerm}, function(response){
//            alert(response);
//            $scope.mediaResults = response.results;
//            $('#resultsTbl').css('display','table');
//            $scope.searchTerm = "";
//        });

        //$scope.mediaResults = $scope.media.get();
        //$('#resultsTbl').css('display','table');

//        $scope.media = MediaService.get(
//            {term:$scope.searchTerm }, //params
//            function (data) {   //success
//                $scope.mediaResults = data.results;
//                $('#resultsTbl').css('display','table');
//                $scope.searchTerm = "";
//            },
//            function (data) {   //failure
//                //error handling goes here
//                console.log("Failure in retrieving data...")
//            }
//        );
    }

    $scope.playVideo = function(item) {
        $scope.showFlag = true;
        $scope.url = item.previewUrl;
        if  (item.trackName != null) $scope.title = item.trackName
        else $scope.title = item.collectionName;

        $scope.artist = item.artistName;
    }

    $scope.closeVideo = function() {
        $scope.showFlag = false;
    }
});
