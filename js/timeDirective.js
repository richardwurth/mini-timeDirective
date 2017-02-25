angular.module('timeApp').directive('showTime',function(){
  return{
    restrict: 'E',
    template: '<div>The current time in {{countryName}} is {{ time | date : "short" : countryTz }}</div>',
    scope: {
      countryName: '@countryName',
      countryTz: '@countryTz'
    },
    link: function(scope, element, attributes){
      console.log(scope);
      // var currentTime = new Date();
      scope.time = new Date();
    },
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
