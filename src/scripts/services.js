

myApp.factory('dataServices', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var baseUrl = 'http://localhost:3000/songs';

  return {
    getAllItems: function() {
      return $http.get(baseUrl);
    },
    getItemById: function(id) {
      return $http.get(baseUrl + '/' + id);
    },
    saveItem: function(id, data) {
      return $http.put(baseUrl + '/' + id, data);
    },
    addNewItem: function(data) {
      return $http.post(baseUrl, data);
    }
  };
});
