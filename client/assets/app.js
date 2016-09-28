var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {

   $routeProvider
      .when("/", {
         templateUrl: "partials/home.html"
      })
      
      .when("/login", {
         templateUrl: "partials/loginReg.html"
      })

      .when("/newProduct", {
         templateUrl: "partials/addProduct.html"
      })

      .when("/show/:id", {
         templateUrl: "partials/showProduct.html"
      })

      .when("/cart", {
         templateUrl: "partials/cart.html"
      })

      .when("/listings", {
         templateUrl: "partials/list.html"
      })

      .when("/checkout", {
         templateUrl: "partials/checkOut.html"
      })

      .when("/orderPlaced", {
         templateUrl: "partials/finalpage.html"
      })

      .when("/edit/:id", {
         templateUrl: "partials/editproduct.html"
      })

      .otherwise({
         redirectTo: "/"
      });
})
