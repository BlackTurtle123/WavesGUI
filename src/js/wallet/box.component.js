(function () {
    'use strict';

    function WalletBoxController() {
        var ctrl = this;

        var mapping = {};
        mapping[Currency.TN.displayName] = {
            image: 'wB-bg-TN.png',
            displayName: Currency.TN.displayName,
            gatewayAddr: 'https://gateway.turtlenetwork.eu/',
            info: 'https://github.com/BlackTurtle123/TurtleNetwork/wiki/' +
            'TurtleNode-Gateway:-How-to-swap-%24TN-from-Waves-Platform-to-Turtle-Network'
        };
        mapping[Currency.LTC.displayName] = {
            image: 'wB-bg-LTC.png',
            displayName: Currency.LTC.displayName,
            gatewayAddr: 'https://litecoingw.blackturtle.eu',
            info: 'https://github.com/BlackTurtle123/TurtleNetwork/wiki/' +
            'Litecoin-Gateway:-How-to-swap-%24LTC-to-Turtle-Network-%24tLTC'
        };
        mapping[Currency.BTC.displayName] = {
            image: 'wB-bg-BTC.png',
            displayName: Currency.BTC.displayName,
            gatewayAddr: 'https://bitcoingw.blackturtle.eu',
            info: 'https://github.com/BlackTurtle123/TurtleNetwork/' +
            'wiki/Bitcoin-Gateway:-How-to-swap-%24BTC-to-Turtle-Network-%24tBTC'
        };
        mapping[Currency.WAVES.displayName] = {
            image: 'wB-bg-WAV.png',
            displayName: Currency.WAVES.displayName,
            gatewayAddr: 'https://wavesgw.turtlenetwork.eu/',
            info: 'https://github.com/BlackTurtle123/TurtleNetwork/wiki/' +
            'Waves-Gateway:-How-to-swap-%24WAVES-to-Turtle-Network-%24tWAVES'
        };
        mapping[Currency.DASH.displayName] = {
            image: 'wB-bg-DASH.png',
            displayName: Currency.DASH.displayName,
            gatewayAddr: 'https://dashgw.blackturtle.eu',
            info: 'https://github.com/BlackTurtle123/TurtleNetwork/wiki/' +
            'Dash-Gateway:-How-to-swap-%24DASH-to-Turtle-Network-%24tDASH'
        };
        mapping[Currency.WGR.displayName] = {
            image: 'wB-bg-WGR.png',
            displayName: Currency.WGR.displayName,
            gatewayAddr: 'https://wagerrgw.blackturtle.eu',
            info: 'https://github.com/BlackTurtle123/TurtleNetwork/wiki/' +
            'Wagerr-Gateway:-How-to-swap-%24WGR-to-Turtle-Network-%24tWGR'
        };
        mapping[Currency.TUSD.displayName] = {
            image: 'wB-bg-TUSD.svg',
            displayName: Currency.TUSD.displayName,
            gatewayAddr: 'https://gateway.mortysnode.nl/',
            info: 'https://rcanelabs.com/tokens'
        };
        mapping[Currency.SYS.displayName] = {
            image: 'wB-bg-SYS.png',
            displayName: Currency.SYS.displayName,
            gatewayAddr: 'https://syscoingw.blackturtle.eu',
            info: 'https://github.com/BlackTurtle123/TurtleNetwork/wiki/' +
            'Syscoin-Gateway:-How-to-swap-%24SYS-to-Turtle-Network-%24tSYS'
        };
        mapping[Currency.DOGE.displayName] = {
            image: 'wB-bg-DOG.png',
            displayName: Currency.DOGE.displayName,
            gatewayAddr: 'https://dogegw.turtlenetwork.eu',
            info: 'https://github.com/BlackTurtle123/TurtleNetwork/wiki/' +
            'DOGE-Gateway:-How-to-swap-%24DOGE-to-Turtle-Network-%24tDOGE'
        };
        mapping[Currency.BCH.displayName] = {
            image: 'wB-bg-BCH.png',
            displayName: Currency.BCH.displayName,
            gatewayAddr: 'https://bchgw.blackturtle.eu',
            info: 'https://github.com/BlackTurtle123/TurtleNetwork/wiki/' +
            'BitcoinCash-Gateway:-How-to-swap-%24BCH-to-Turtle-Network-%24tBCH'
        };
        mapping[Currency.ETH.displayName] = {
            image: 'wB-bg-ETH.png',
            displayName: Currency.ETH.displayName,
            gatewayAddr: 'https://ethgw.blackturtle.eu',
            info: 'https://github.com/BlackTurtle123/TurtleNetwork/wiki/' +
            'Ethereum-Gateway:-How-to-swap-%24ETH-to-Turtle-Network-%24tETH'
        };
        ctrl.$onChanges = function (changesObject) {
            if (changesObject.balance) {
                var balance = changesObject.balance.currentValue;
                ctrl.integerBalance = balance.formatIntegerPart();
                ctrl.fractionBalance = balance.formatFractionPart();
            }
        };
        ctrl.$onInit = function () {
            ctrl.image = mapping[ctrl.balance.currency.displayName].image;
            ctrl.displayName = mapping[ctrl.balance.currency.displayName].displayName;
            ctrl.gatewayAddr = mapping[ctrl.balance.currency.displayName].gatewayAddr;
            ctrl.info = mapping[ctrl.balance.currency.displayName].info;
        };
    }

    WalletBoxController.$inject = [];

    angular
        .module('app.wallet')
        .component('walletBox', {
            controller: WalletBoxController,
            bindings: {
                balance: '<',
                onSend: '&',
                onWithdraw: '&',
                onDeposit: '&',
                detailsAvailable: '<?'
            },
            templateUrl: 'wallet/box.component'
        });
})();
