var app = angular.module('appLoteria', []);

app.controller('ctrlLoteria', function ($scope) {
    $scope.idx = 0;
    $scope.topPos = 0;
    $scope.osoby = ['Janek Janek Janek Janek', 'Marek Marek Marek Marek', 'Tomek Tomek Tomek Tomek', 'Baśka Baśka Baśka Baśka', 'Jerry Jerry Jerry Jerry', 'Merry Merry Merry Merry', 'Tom Tom Tom Tom', 'Bob Bob Bob Bob', 'Janek Janek Janek Janek', 'Marek Marek Marek Marek', 'Tomek Tomek Tomek Tomek', 'Baśka Baśka Baśka Baśka', 'Jerry Jerry Jerry Jerry', 'Merry Merry Merry Merry', 'Tom Tom Tom Tom', 'Bob Bob Bob Bob', 'Janek Janek Janek Janek', 'Marek Marek Marek Marek', 'Tomek Tomek Tomek Tomek', 'Baśka Baśka Baśka Baśka', 'Jerry Jerry Jerry Jerry', 'Merry Merry Merry Merry', 'Tom Tom Tom Tom', 'Bob Bob Bob Bob', 'Janek Janek Janek Janek', 'Marek Marek Marek Marek', 'Tomek Tomek Tomek Tomek', 'Baśka Baśka Baśka Baśka', 'Jerry Jerry Jerry Jerry', 'Merry Merry Merry Merry', 'Tom Tom Tom Tom', 'Bob Bob Bob Bob', 'Janek Janek Janek Janek', 'Marek Marek Marek Marek', 'Tomek Tomek Tomek Tomek', 'Baśka Baśka Baśka Baśka', 'Jerry Jerry Jerry Jerry', 'Merry Merry Merry Merry', 'Tom Tom Tom Tom', 'Bob Bob Bob Bob', 'Janek Janek Janek Janek', 'Marek Marek Marek Marek', 'Tomek Tomek Tomek Tomek', 'Baśka Baśka Baśka Baśka', 'Jerry Jerry Jerry Jerry', 'Merry Merry Merry Merry', 'Tom Tom Tom Tom', 'Bob Bob Bob Bob', 'Janek Janek Janek Janek', 'Marek Marek Marek Marek', 'Tomek Tomek Tomek Tomek', 'Baśka Baśka Baśka Baśka', 'Jerry Jerry Jerry Jerry', 'Merry Merry Merry Merry', 'Tom Tom Tom Tom', 'Bob Bob Bob Bob', 'Janek Janek Janek Janek', 'Marek Marek Marek Marek', 'Tomek Tomek Tomek Tomek', 'Baśka Baśka Baśka Baśka', 'Jerry Jerry Jerry Jerry', 'Merry Merry Merry Merry', 'Tom Tom Tom Tom', 'Bob Bob Bob Bob', 'Janek Janek Janek Janek', 'Marek Marek Marek Marek', 'Tomek Tomek Tomek Tomek', 'Baśka Baśka Baśka Baśka', 'Jerry Jerry Jerry Jerry', 'Merry Merry Merry Merry', 'Tom Tom Tom Tom', 'Bob Bob Bob Bob', 'Janek Janek Janek Janek', 'Marek Marek Marek Marek', 'Tomek Tomek Tomek Tomek', 'Baśka Baśka Baśka Baśka', 'Jerry Jerry Jerry Jerry', 'Merry Merry Merry Merry', 'Tom Tom Tom Tom', 'Bob Bob Bob Bob', 'Janek Janek Janek Janek', 'Marek Marek Marek Marek', 'Tomek Tomek Tomek Tomek', 'Baśka Baśka Baśka Baśka', 'Jerry Jerry Jerry Jerry', 'Merry Merry Merry Merry', 'Tom Tom Tom Tom', 'Bob Bob Bob Bob', 'Janek Janek Janek Janek', 'Marek Marek Marek Marek', 'Tomek Tomek Tomek Tomek', 'Baśka Baśka Baśka Baśka', 'Jerry Jerry Jerry Jerry', 'Merry Merry Merry Merry', 'Tom Tom Tom Tom', 'Bob Bob Bob Bob', 'Janek Janek Janek Janek', 'Marek Marek Marek Marek', 'Tomek Tomek Tomek Tomek', 'Baśka Baśka Baśka Baśka', 'Jerry Jerry Jerry Jerry', 'Merry Merry Merry Merry', 'Tom Tom Tom Tom', 'Bob Bob Bob Bob', 'Janek Janek Janek Janek', 'Marek Marek Marek Marek', 'Tomek Tomek Tomek Tomek', 'Baśka Baśka Baśka Baśka', 'Jerry Jerry Jerry Jerry', 'Merry Merry Merry Merry', 'Tom Tom Tom Tom', 'Bob Bob Bob Bob', 'Janek Janek Janek Janek', 'Marek Marek Marek Marek', 'Tomek Tomek Tomek Tomek', 'Baśka Baśka Baśka Baśka', 'Jerry Jerry Jerry Jerry', 'Merry Merry Merry Merry', 'Tom Tom Tom Tom', 'Bob Bob Bob Bob', 'Janek Janek Janek Janek', 'Marek Marek Marek Marek', 'Tomek Tomek Tomek Tomek', 'Baśka Baśka Baśka Baśka', 'Jerry Jerry Jerry Jerry', 'Merry Merry Merry Merry', 'Tom Tom Tom Tom', 'Bob Bob Bob Bob', 'Janek Janek Janek Janek', 'Marek Marek Marek Marek', 'Tomek Tomek Tomek Tomek', 'Baśka Baśka Baśka Baśka', 'Jerry Jerry Jerry Jerry', 'Merry Merry Merry Merry', 'Tom Tom Tom Tom', 'Bob Bob Bob Bob', 'Janek Janek Janek Janek', 'Marek Marek Marek Marek', 'Tomek Tomek Tomek Tomek', 'Baśka Baśka Baśka Baśka', 'Jerry Jerry Jerry Jerry', 'Merry Merry Merry Merry', 'Tom Tom Tom Tom', 'Bob Bob Bob Bob', 'Janek Janek Janek Janek', 'Marek Marek Marek Marek', 'Tomek Tomek Tomek Tomek', 'Baśka Baśka Baśka Baśka', 'Jerry Jerry Jerry Jerry', 'Merry Merry Merry Merry', 'Tom Tom Tom Tom', 'Bob Bob Bob Bob', 'Janek Janek Janek Janek', 'Marek Marek Marek Marek', 'Tomek Tomek Tomek Tomek', 'Baśka Baśka Baśka Baśka', 'Jerry Jerry Jerry Jerry', 'Merry Merry Merry Merry', 'Tom Tom Tom Tom', 'Bob Bob Bob Bob', 'Janek Janek Janek Janek', 'Marek Marek Marek Marek', 'Tomek Tomek Tomek Tomek', 'Baśka Baśka Baśka Baśka', 'Jerry Jerry Jerry Jerry', 'Merry Merry Merry Merry', 'Tom Tom Tom Tom', 'Bob Bob Bob Bob', 'Janek Janek Janek Janek', 'Marek Marek Marek Marek', 'Tomek Tomek Tomek Tomek', 'Baśka Baśka Baśka Baśka', 'Jerry Jerry Jerry Jerry', 'Merry Merry Merry Merry', 'Tom Tom Tom Tom', 'Bob Bob Bob Bob', 'Janek Janek Janek Janek', 'Marek Marek Marek Marek', 'Tomek Tomek Tomek Tomek', 'Baśka Baśka Baśka Baśka', 'Jerry Jerry Jerry Jerry', 'Merry Merry Merry Merry', 'Tom Tom Tom Tom', 'Bob Bob Bob Bob', 'Janek Janek Janek Janek', 'Marek Marek Marek Marek', 'Tomek Tomek Tomek Tomek', 'Baśka Baśka Baśka Baśka', 'Jerry Jerry Jerry Jerry', 'Merry Merry Merry Merry', 'Tom Tom Tom Tom', 'Bob Bob Bob Bob', 'Janek Janek Janek Janek', 'Marek Marek Marek Marek', 'Tomek Tomek Tomek Tomek', 'Baśka Baśka Baśka Baśka', 'Jerry Jerry Jerry Jerry', 'Merry Merry Merry Merry', 'Tom Tom Tom Tom', 'Bob Bob Bob Bob', 'Janek Janek Janek Janek', 'Marek Marek Marek Marek', 'Tomek Tomek Tomek Tomek', 'Baśka Baśka Baśka Baśka', 'Jerry Jerry Jerry Jerry', 'Merry Merry Merry Merry', 'Tom Tom Tom Tom', 'Bob Bob Bob Bob', 'Janek Janek Janek Janek', 'Marek Marek Marek Marek', 'Tomek Tomek Tomek Tomek', 'Baśka Baśka Baśka Baśka', 'Jerry Jerry Jerry Jerry', 'Merry Merry Merry Merry', 'Tom Tom Tom Tom', 'Bob Bob Bob Bob', 'Janek Janek Janek Janek', 'Marek Marek Marek Marek', 'Tomek Tomek Tomek Tomek', 'Baśka Baśka Baśka Baśka', 'Jerry Jerry Jerry Jerry', 'Merry Merry Merry Merry', 'Tom Tom Tom Tom', 'Bob Bob Bob Bob', 'Janek Janek Janek Janek', 'Marek Marek Marek Marek', 'Tomek Tomek Tomek Tomek', 'Baśka Baśka Baśka Baśka', 'Jerry Jerry Jerry Jerry', 'Merry Merry Merry Merry', 'Tom Tom Tom Tom', 'Bob Bob Bob Bob', 'Janek Janek Janek Janek', 'Marek Marek Marek Marek', 'Tomek Tomek Tomek Tomek', 'Baśka Baśka Baśka Baśka', 'Jerry Jerry Jerry Jerry', 'Merry Merry Merry Merry', 'Tom Tom Tom Tom', 'Bob Bob Bob Bob'];
    $scope.osobyTxt = $scope.osoby.join('\n');
    $scope.osobyBeben = $scope.osoby.concat($scope.osoby);

    function shuffle(a) {
        var j, x, i;
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    }

    function losujIdx(a) {
        return Math.floor(Math.random() * a.length);
    }

    function obliczPozycje(idx) {
        return (idx * 122 * -1);
    }

    $scope.Sortowanie = function () {
        $('.btn-start').css({ display: '' });
        $('.beben-kola').css({ top: '' });
        $scope.osoby = $scope.osobyTxt.split('\n');
        shuffle($scope.osoby);
        $scope.osobyTxt = $scope.osoby.join('\n');
        $scope.osobyBeben = $scope.osoby.concat($scope.osoby);
    };

    $scope.StartLosowanie = function () {
        $('.btn-start').css({ display: 'none' });
        $scope.osoby = $scope.osobyTxt.split('\n');
        $scope.osobyBeben = $scope.osoby.concat($scope.osoby);
        $scope.idx = losujIdx($scope.osoby) + $scope.osoby.length;
        $scope.topPos = obliczPozycje($scope.idx);
        $('.beben-kola').css({ top: $scope.topPos + 'px' });
    };
});

$(function(){
    $('#autor').click(function(){
        $('.modal').modal();
        $('#marv').attr('src', 'https://www.youtube.com/embed/s0fpz3DkCT4?autoplay=1&rel=0&amp;controls=0&amp;showinfo=0');
    });
});