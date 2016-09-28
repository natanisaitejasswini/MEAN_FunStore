app.controller('productController', function(productFactory, usersFactory, $location){
	var self = this;
	self.user = [];
	self.newProduct = {};
	self.addProduct = addProduct;

	
	getSession();

	function getSession () {
		usersFactory.getSession(function(factoryData){
			self.user = factoryData.userInfo
		})
	}

	function addProduct(){
		productFactory.addProduct(self.newProduct, function(data){
			self.newProduct = {};
			if(data.status){
				$location.url('/');
			}
			else{
				$location.url('/newProduct');
			}
		})
	}

})
