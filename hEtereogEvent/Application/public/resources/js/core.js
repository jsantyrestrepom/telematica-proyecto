var apiKey = 'YOUR_API_KEY';



$(document).ready(function() {
  


  
});


function signinCallback(authResult) {
  if (authResult['access_token']) {

    //gapi.auth.setToken(authResult); // Store the returned token.
    document.getElementById('signinButton').setAttribute('style', 'display: none');

    
    //$('#result').html(JSON.stringify(authResult));
    // $.ajax({
    //     type: 'GET',
    //     url: 'http://localhost/telematica-proyecto/Middleware/services/RegisterService.php?'+
    //         'access_token='+ authResult['access_token'] +'&red_social=google',
    //     async: false,
    //     contentType: 'application/json',
    //     success: function(result) {
    //       alert(JSON.stringify(result));
    //       if (result.success) {
    //         alert('do');
    //       } else {
    //         alert(result.error);
    //       }
    //     }
    //   });
    
    // var request = gapi.client.plus.people.get({
    //     'userId': 'me'
    // });
    // request.execute(function(aInfo) {
    //     $('#result').append('<br />' + aInfo);
    // });

    // gapi.client.load('oauth2', 'v2', function() {
    //   gapi.client.oauth2.userinfo.get().execute(function(resp) {
    //     // Shows user email
    //     $('#result').append('<br />' + resp.email);
    //   })
    // });

    // gapi.client.load('plus', 'v1', function() {
    //   gapi.client.plus.people.get( {'userId' : 'me'} ).execute(function(resp) {
    //     // Shows other profile information
    //     $('#result').append('<br />' + resp);
    //   })
    // });
// Load the oauth2 libraries to enable the userinfo methods.
    // gapi.client.load('oauth2', 'v2', function() {
    //   var request = gapi.client.oauth2.userinfo.get();
    //   request.execute(getEmailCallback);
    // });

  //   var request = gapi.client.plus.people.get({
  //     'userId' : 'me'
  //   });
    
  //   request.execute(function(resp) {
  //     $('#username').html(resp.displayName);
  //   });
  // } else if (authResult['error']) {
  //   // There was an error.
  //   // Possible error codes:
  //   //   "access_denied" - User denied access to your app
  //   //   "immediate_failed" - Could not automatically log in the user
  //   // console.log('There was an error: ' + authResult['error']);
  }
}


// function getEmailCallback(obj){
//     var el = document.getElementById('result');
//     var email = '';

//     if (obj['email']) {
//       email = 'Email: ' + obj['email'];
//     }

//     //console.log(obj);   // Uncomment to inspect the full object.

//     el.innerHTML = email;
//   }

