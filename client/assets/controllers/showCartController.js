app.controller('showCartController',function(cartFactory, usersFactory, $location){
	var self = this;
	self.allProducts = [];
	self.deleteProductFromCart = deleteProductFromCart;
	self.checkOut = checkOut;
	self.prod = {};
	self.val = {};

	displayCart();
	
	function getSession () {
		usersFactory.getSession(function(factoryData){
			self.user = factoryData.userInfo
		});
	}

	function displayCart(){
		getSession();
		cartFactory.displayCart(function(cartData){
			if(cartData){
				self.allProducts = cartData;
				self.oneProduct = self.allProducts[0];
				var value = 0;
				for(var i=0; i<self.allProducts.length; i++){
					var total = self.allProducts[i].product_price * self.allProducts[i].product_quantity;
					self.allProducts[i].total = total;
					value = value + total;
				}
				self.val = {value:value};
			} else{
				self.flag = 0;
			}
		})
	}

	function deleteProductFromCart(index){
		cartFactory.deleteProductFromCart(index, function(returnData){
			self.allProducts = returnData;
		})
	}

	function checkOut(){
		cartFactory.checkOut(function(){
			console.log('gnffjhf')
			$location.url('/orderPlaced');
		})
	}

})

