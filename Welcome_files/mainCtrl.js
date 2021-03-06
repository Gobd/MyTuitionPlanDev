angular.module("welcomeApp").controller("welcomeCtrl", function($scope, $interval, $timeout){
    $scope.name = "test";
    var imgBank = [
                  // "https://images.unsplash.com/photo-1449168013943-3a15804bb41c?crop=entropy&dpr=2&fit=crop&fm=jpg&h=725&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1425",
                  // "https://images.unsplash.com/photo-1448749927985-5565d99c10ae?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=b830c59c9205015b18f6c06889257bf1",
                  // "https://images.unsplash.com/photo-1452269826925-82be65baa057?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=813effa9de7316c73afe87f515173252",
                  "https://images.unsplash.com/photo-1452270313744-e5ccb6de0c78?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=ffd731f7388c6611aab2eba59720d47f",
                  // "https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=16af70cd5a412898fbcd6e80940718d2",
                  // "https://images.unsplash.com/photo-1444124818704-4d89a495bbae?crop=entropy&dpr=2&fit=crop&fm=jpg&h=725&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1425",
                  // "https://images.unsplash.com/photo-1454909516657-78526f214d05?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=2368db70b62b646d4e7d1d030509cc84",
                  // "https://images.unsplash.com/uploads/1411070807173e4d6762d/f84a3a01?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=df3f701669d5ac5b7e2689e3690f8e7f",
                  // "https://images.unsplash.com/photo-1454625191319-786c05137ef5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=be8b9d695058e46a8b409d5cacae8a7a",
                  ]

    var i = 0;
    $scope.imgMain = imgBank[i];
    $interval(function () {
      if (i === imgBank.length - 1) {
        i = 0;
        $scope.imgMain = imgBank[i];
      }
      else {
        i++;
        $scope.imgMain = imgBank[i];
      }
    }, 7000);

    $timeout(function () {
      $scope.menuSelect = true;
    }, 2000);


});
