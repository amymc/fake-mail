angular.module('EmailApp')
   .directive('inbox', function inboxDirective () {
   return {
      restrict: 'EA', //allow for custom elements and attributes
      replace: true,
      scope: true,
      templateUrl: "js/directives/inbox.tmpl.html",
      controllerAs: 'inbox',
      controller: function (InboxFactory) {
         this.messages = [];

         this.goToMessage = function (id) {
            InboxFactory.goToMessage(id);
         };
         this.deleteMessage = function (id, index) {
            InboxFactory.deleteMessage(id, index);
         };
         InboxFactory.getMessages()
            .then( angular.bind( this, function then() {
               this.messages = InboxFactory.messages;
            })  );
      },
      link: function (scope, element, attrs, ctrl) {
         
      }
   }
});
