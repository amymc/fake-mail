angular.module('EmailApp')
  .factory('EmailFactory', function EmailFactory ($q, $http, $routeParams, $mdToast) {
    'use strict';
    var exports = {};

    exports.reply = function (message) {
      if (message) {
        $mdToast.show($mdToast.simple().content('Message sent').position('top right'));
      }
    };

    exports.getMessage = function (params) {
      if ( params.id ) {
        var deferred = $q.defer();
        $http.get('json/messages/' + params.id + '.json')
          .success(function (data) {
            deferred.resolve(data);
          })
          .error(function (data) {
            deferred.reject(data);
          });
        return deferred.promise;
      }
    };

    return exports;
  });