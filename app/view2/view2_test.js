'use strict';

describe('myApp.view2 module', function() {

  beforeEach(module('myApp.view2'));

  describe('view2 controller', function(){

    it('should calculate percentages', inject(function($controller, $rootScope) {
      var scope = $rootScope.$new();
      //spec body
      var view2Ctrl = $controller('View2Ctrl', {
          '$scope': scope
      });
      expect(view2Ctrl).toBeDefined();
      expect(scope.percentage('Robert')).toBeGreaterThan(53);
      expect(scope.percentage('Robert')).toBeLessThan(54);

      expect(scope.percentage('Bert')).toBeGreaterThan(38);
      expect(scope.percentage('Bert')).toBeLessThan(39);

      expect(scope.percentage('Elizabeth')).toBeGreaterThan(7);
      expect(scope.percentage('Elizabeth')).toBeLessThan(8);
    }));

  });
});
