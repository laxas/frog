log = utils.log
rs = remoteStorageUtils

LoginController = ($scope,$location,settingsDAO)->
  log("Login")
  $scope.session.isLoggedIn = false
  $scope.userAddress = "shybyte@owncube.com"

  $scope.login = ->
    try
      userAddress = $scope.userAddress
      log("userAddress:"+userAddress)
      if userAddress
        rs.connect(userAddress, (error, storageInfo)->
          rs.authorize(['public', 'sharedstuff'], (token) ->
            localStorage.setItem('userAddress',userAddress);
            $scope.setLoggenOn()
            targetPath = sessionStorage.getItem('targetPath') || '/';
            sessionStorage.removeItem('targetPath');
            $scope.$apply ->
              $location.path(targetPath)
          )
        )
      else
        alert("Please enter a remote storage id!")
    catch e
      log(e)


LoginController.$inject = ['$scope','$location','settingsDAO']

#export
this.LoginController = LoginController