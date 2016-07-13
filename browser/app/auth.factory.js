app.factory('authFactory', function ($http, $state, $stateParams) {
	var obj = {
		currentUser: {
			id: null
		},
		isOwner: function() {
		   return $stateParams.id == obj.currentUser.id
	   },
		login: function(data) {
			$http.post('/login', data)
			.then(function(res) {
				obj.currentUser.id = res.data.id
				$state.go('user', { id: res.data.id })
			})
		},

		signup: function(data) {
			$http.post('/signup', data)
			.then(function(res) {
				$state.go('user', { id: res.data.id })
			})
		}
	}
	return obj
})
