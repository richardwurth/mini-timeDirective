angular.module('timeApp').directive('showTime',function(){
  return{
        restrict: 'E',
        template: '<div>The current time is {{time}}</div>',
        scope: {
          theName: '=',
        },
        link: function(scope, element, attributes){
              console.log(scope);
              var currentTime = new Date();
              scope.time = currentTime.toString();
        },
        // controller: function($timeout, $scope){
        //   $timeout(function(name){
        //       $scope.theName = "ME!";
        //       $('show-time').css("color","red");
        //   },1000);
        // }
  };
}).directive('clicketyClick', function(){
  return {
    link: function(scope, element, attributes){
      angular.element(element).on('click', function(){
        console.log('CLICK!');
      });
    }
  };
});
