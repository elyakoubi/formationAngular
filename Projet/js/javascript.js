
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider
    .when('/',{
          controller: 'friendsController',
          templateUrl: 'templates/friends.html'
    })
    .when('/contact',{
        controller:'friendsController',
        templateUrl:'templates/contact.html'
    })
    .otherwise({redirectTo: '/'});
});

myApp.controller('friendsController', function($scope) {
	$scope.friends = [
	{name:'fadoua',phone:'00000'},
	{name:'Amin',phone:'11111'},
	{name:'jean',phone:'22222'},
	{name:'ariene',phone:'333333'},
	{name:'alex',phone:'4444444'}
	];
});


// function showContainer1()
// {
// 	document.getElementById("container1").style.display="block";
// 	document.getElementById("container2").style.display="none";
// }

// function showContainer2()
// {
// 	document.getElementById("container1").style.display="none";
// 	document.getElementById("container2").style.display="block";
// }

// function verifier()
// {
// 	 if(document.formulaire.firstName.value == "")
//     {
//      alert("Veuillez entrer votre nom!");
//      document.formulaire.firstName.focus();
//      return false;
//     }

//     if(document.formulaire.lastName.value == "")
//     {
//      alert("Veuillez entrer votre prenom!");
//      document.formulaire.lastName.focus();
//      return false;
//     }

//     if(document.formulaire.email.value == "")
//     {
//      alert("Veuillez entrer votre email!");
//      document.formulaire.email.focus();
//      return false;
//     }
//     if(document.formulaire.cb.value == "")
//     {
//      alert("Veuillez entrer votre code postal!");
//      document.formulaire.cb.focus();
//      return false;
//     }

//     if(document.formulaire.textarea.value == "")
//     {
//      alert("Veuillez entrer votre message!");
//      document.formulaire.textarea.focus();
//      return false;
//     }
// }

// var	myForm = {
// 		formInput: {
//           firstname:document.getElementById('firstName'),
//           lastname:document.getElementById('lastName'),
//           email:document.getElementById('email'),
//           cb:document.getElementById('cb'),
//           category:document.getElementById('category'),
//           textname:document.getElementById('textname')

// 		},
// 		formVerif: {
// 			vierge:true,
// 			dirt:false,
// 			submit:false
// 		}

// 	}
// console.log(myForm.formInput);

// 	myForm.formInput.firstname.onchange= function()
// 	{
// 		if(myForm.formInput[firstname].value=="")
// 		{
// 			 myForm.formVerif.vierge=true;
//              myForm.formVerif.dirt=false;
//              myForm.formVerif.submit=false;
          
// 		}
// 		myForm.formVerif.vierge=false;
//           myForm.formVerif.dirt=true;
//           myForm.formVerif.submit=true;
// 	}

//   myForm.formInput.lastname.onchange= function()
// 	{
// 		if(myForm.formInput.firstname.value=="")
// 		{
// 			 myForm.formVerif.vierge=true;
//              myForm.formVerif.dirt=false;
//              myForm.formVerif.submit=false;
          
// 		}
// 		myForm.formVerif.vierge=false;
//          myForm.formVerif.dirt=true;
//          myForm.formVerif.submit=true;
// 	}

// myForm.formInput.email.onchange= function()
// 	{
// 		if(myForm.formInput[firstname].value=="")
// 		{
// 			 myForm.formVerif.vierge=true;
//              myForm.formVerif.dirt=false;
//              myForm.formVerif.submit=false;
          
// 		}
// 		myForm.formVerif.vierge=false;
//         myForm.formVerif.dirt=true;
//         myForm.formVerif.submit=true;
// 	}


// myForm.formInput.cb.onchange= function()
// 	{
// 		if(myForm.formInput[firstname].value=="")
// 		{
// 			 myForm.formVerif.vierge=true;
//              myForm.formVerif.dirt=false;
//              myForm.formVerif.submit=false;
          
// 		}
// 		myForm.formVerif.vierge=false;
//         myForm.formVerif.dirt=true;
//         myForm.formVerif.submit=true;
// 	}

// myForm.formInput.textarea.onchange= function()
// 	{
// 		if(myForm.formInput[firstname].value=="")
// 		{
// 			 myForm.formVerif.vierge=true;
//              myForm.formVerif.dirt=false;
//              myForm.formVerif.submit=false;
          
// 		}
// 		myForm.formVerif.vierge=false;
//         myForm.formVerif.dirt=true;
//         myForm.formVerif.submit=true;
// 	}

// function valider(){

// 		if(myForm.formverif.submit== true)
// 			{ 
// 				 alert("votre formulaire est bien envoyé" );
                 
// 			}

// 		   alert("Veuillez verifier votre formulaire" );
// 	}




// function submit(){
// 	  if(myForm.formVerif.submit==true)
//    {
//    	console.log("valider");
//    }
//    else
//    	 {
//    	console.log("non valider");
//    }
// }


// function verifierFisrtName()
// {

// }

// function verifierLastName()
// {

// }

// function verifierEmail()
// {

// }
// function verifierCB()
// {

// }

