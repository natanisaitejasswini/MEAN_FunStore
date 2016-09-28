app.controller('ShowProdController', function(productFactory, usersFactory, cartFactory, $location, $routeParams){
	var self = this;
	self.user = [];
	self.allProducts = [];
	self.oneProduct = {};
	self.getOneProduct = getOneProduct;
	self.setOneProduct = setOneProduct;
	self.addToCart = addToCart;
	self.logout = logout;

	if($routeParams.id){
		getSession();
		getOneProduct($routeParams.id);
	}
	else if(!$routeParams.id){
		getProducts();
	}
	
	function getSession () {
		usersFactory.getSession(function(factoryData){
			self.user = factoryData.userInfo
		})
	}

	function getProducts(){
		getSession();
		productFactory.getProducts(function(productData){
			self.allProducts = productData;
		})
	}

	function getOneProduct(index){
		productFactory.getOneProduct(index, setOneProduct);
	}
	function setOneProduct(returnData){
		self.oneProduct = returnData;

	}

	function addToCart(index){
		cartFactory.addToCart(index, self.newQty, function(returnData){
			if(returnData.status){
				$location.url('/cart');
			} else {
				console.log("error occured");
			}
		})
	}

	function logout(){
		usersFactory.logout(function(data){
			if(data.status){
				$location.url('/login');
			} else {
				self.errors = data.errors;
			}
		})
	}
})
