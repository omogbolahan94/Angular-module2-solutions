(function () {
    'use strict';

    angular.module("moduleTwo", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service(`ShoppingListCheckOffService`, ShoppingListCheckOffService);

    ToBuyController.$inject = [`ShoppingListCheckOffService`]
    function ToBuyController(ShoppingListCheckOffService) {
        let buy = this;

        buy.items = ShoppingListCheckOffService.buyItems;

        buy.checkOff = function (itemIndex) {
          ShoppingListCheckOffService.removeItem(itemIndex);
        }
    }

    AlreadyBoughtController.$inject = [`ShoppingListCheckOffService`]
    function AlreadyBoughtController(ShoppingListCheckOffService) {
      let bought = this;
      
      bought.items = ShoppingListCheckOffService.boughtItems; 
    }

    function ShoppingListCheckOffService () {
        let service = this;
        
        
        service.buyItems = [{name: "cookies", quantity: 10}, {name: "cookies", quantity: 10}, {name: "cookies", quantity: 10},
            {name: "cookies", quantity: 10}, {name: "cookies", quantity: 10}];
            
        service.boughtItems = [];

        //function that remove item from the buyItems
        service.removeItem = function (itemIndex) {
            
            let removedItem = service.buyItems.splice(itemIndex, 1)[0];
            service.boughtItems.push(removedItem);
            console.log(service.boughtItems);
            
        }
    }
})();