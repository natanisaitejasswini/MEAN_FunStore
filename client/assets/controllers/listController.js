app.controller('listController', function(productFactory, usersFactory, $location, $routeParams){
	var self = this;
	self.allProducts = [];
	self.oneProduct = {};
	self.prod = {};
	self.deleteProduct = deleteProduct;
	self.getOneProduct = getOneProduct;
	self.editProduct = editProduct;

	if($routeParams.id){
		getSession();
		getOneProduct($routeParams.id);
	}
	else if(!$routeParams.id){
		getProductsListing();
	}
	

	function getSession () {
		usersFactory.getSession(function(factoryData){
			self.user = factoryData.userInfo
		})
	}

	function getProductsListing(){
		getSession();
		productFactory.getProductsListing(function(data){
			self.allProducts = data;
			self.prod = self.allProducts[0];
		})
	}

	function deleteProduct(index){
		productFactory.deleteProduct(index, function(data){
			self.allProducts = data;
		});
	}

	function getOneProduct(index){
		productFactory.getOneProduct(index, function(data){
			self.oneProduct = data;
		})
	}

	function editProduct(index){
		productFactory.editProduct(index, self.prod, function(data){
			self.allProducts = data;
			$location.url('/listings');
		})
	}
})

