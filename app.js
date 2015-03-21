// Module declaration (set)
angular.module("appDirectives" , []);

angular
  .module("appDirectives")
  .controller("directiveCtrl", function($scope) {
    $scope.teste;
  })
  .directive("myDirective", function(){
    return {
      restrict: "AE",
      template: "<h1>Teste</h1>",
      link: function(scope, element, attrs) {

      }
    }
  })
  .directive("fechar", function() {
    return {
      restrict: "A",
      link: function(scope, element, attrs) {
        $(element).on("click", function(){
          $(this).next().toggle();
        });
      }
    }
  });
