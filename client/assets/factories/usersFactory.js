app.factory("usersFactory",function($http,$location){
	var factory = {
		// register: register,
		// login: login,
		// logout: logout,
		// getSession: getSession
	}
	// return factory;

	factory.getSession = function(callback){
		$http.get('/session')
		.success(function(returnData){
			callback(returnData);
		})
	}

	factory.register = function(newUser, callback){
		$http.post('/register', newUser)
		.success(function(user){
			callback(user);
		})
	}
	factory.login = function(logInfo, callback){
		$http.post('/login', logInfo)
		.success(function(returnData){
			callback(returnData);
		})
	}
	factory.logout = function(callback){
		$http.post('/logout')
		.success(function(returnData){
			callback(returnData);
		})
	}
	return factory
});
