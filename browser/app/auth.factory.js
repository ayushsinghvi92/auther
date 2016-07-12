app.factory('authFactory', function ($http, $state) {
	return {
		login: function(data) {
			console.log("login data: ", data)
			$http.post('/login', data)
			.then(function(res) {
				console.log("im here", res)
				$state.go('user', { id: res.data.id })
			})
		},

		signup: function(data) {
			console.log("signup data: ", data)
			$http.post('/signup', data)
			.then(function(res) {
				console.log("im here", res)
				$state.go('user', { id: res.data.id })
			})
		}	
	}
})