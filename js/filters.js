
angular.module('EmailApp')
  .filter('customSearchFilter', function() {
    return function(messages, searchTerm) {
      var filtered = [];


      if (!searchTerm){
        filtered = messages;
      }
      else{
        searchTerm = searchTerm.toUpperCase();

        angular.forEach(messages, function(message) {
          var from = (message.from).toUpperCase();
          var subject = (message.subject).toUpperCase();
            if ((from.indexOf(searchTerm)>-1) || (subject.indexOf(searchTerm)>-1)){
                filtered.push(message);
            }
        });

      }

    return filtered;
    };
  })
  // REQUIRES:
// moment.js - https://github.com/moment/momentjs.com
 
// USAGE:
// {{ someDate | moment: [any moment function] : [param1] : [param2] : [param n] 
 
// EXAMPLES:
// {{ someDate | moment: 'format': 'MMM DD, YYYY' }}
// {{ someDate | moment: 'fromNow' }}
 
// To call multiple moment functions, you can chain them.
// For example, this converts to UTC and then formats...
// {{ someDate | moment: 'utc' | moment: 'format': 'MMM DD, YYYY' }}
 
//   .filter('moment', function () {
//   return function (input, fromNow) {
//     var args = Array.prototype.slice.call(arguments, 2),
//         momentObj = moment(input);
//     return momentObj[momentFn].apply(momentObj, args);
//   };
// });