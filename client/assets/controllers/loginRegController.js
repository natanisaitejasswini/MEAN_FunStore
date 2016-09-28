app.controller('loginRegController', function(usersFactory, $location){
	var self = this;
	self.newUser = {};
	self.logInfo = {};
	self.user = [];
	self.register = register;
	self.login = login;
	self.errors = [];
	self.logout = logout;
	self.getSession = getSession;

	getSession()

	function getSession () {
		usersFactory.getSession(function(factoryData){
			self.user = factoryData.userInfo
			if (!self.user){
				$location.url('/login')
			}
		})
	}

	function register(){
		self.errors = [];
		usersFactory.register(self.newUser, function(data){
			if(data.status){
				self.user = data.userInfo
				$location.url('/')
			} else{
				self.errors = data.errors;
			}		
		}); 
	}

	function login(){
		self.errors = [];
		usersFactory.login(self.logInfo, function(data){
			if(data.status){
				self.user = data.userInfo
				$location.url('/')
			} else{
				self.errors = data.errors;
			}
		})
	}
	function logout(){
		usersFactory.logout(function(data){
			if(data.status){
				$location.url('/');
			} else {
				self.errors = data.errors;
			}
		})
	}

})


