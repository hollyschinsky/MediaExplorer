'use strict';

/* Controllers */

mediaApp.controller('MediaListCtrl',function($scope,MediaService){
    $scope.searchTerm = "Alicia Keys";
    $scope.mediaType = "all";
    $scope.filterTerm = "";
    $scope.sortProp = "artistName";
    $scope.showFlag = false;

    $scope.doSearch = function () {
        var type = $scope.mediaType;
        if ($scope.mediaType=="all")  type="";
        MediaService.get({term:$scope.searchTerm,entity:type},function(response){
            $scope.mediaResults = response.results;
        });
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
