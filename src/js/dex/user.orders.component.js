(function () {
    'use strict';

    function UserOrdersController() {}

    angular
        .module('app.dex')
        .component('wavesDexUserOrders', {
            controller: UserOrdersController,
            templateUrl: 'dex/user.orders.component'
        });
})();
