jQuery(document).ready(function(){
$('#submit').click(function(e) {
     e.preventDefault();
     alert("got here");
     var URL = "https://ebtyr3r7j4.execute-api.us-east-1.amazonaws.com/default/mailForward";

          var Namere = /[A-Za-z]{1}[A-Za-z]/;
          if (!Namere.test($("#firstname").val())) {
                       alert ("First name can not be less than 2 char");
              return;
          }
          var mobilere = /[0-9]{10}/;
          if (!mobilere.test($("#phone").val())) {
              alert ("Please enter a valid mobile number");
              return;
          }
          if ($("#email").val()=="") {
              alert ("Please enter your email id");
              return;
          }

          var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
          if (!reeamil.test($("#email").val())) {
              alert ("Please enter a valid email address");
              return;
          }

     var firstname = $("#firstname").val();
     var lastname = $("#lastnamename").val();
     var phone = $("#phone").val();
     var email = $("#email").val();

     var data = {
        "firstname" : firstname,
        "lastname" : lastname,
        "phone": phone,
        "email" : email
      };

     $.ajax({
       type: "POST",
       url : "https://ebtyr3r7j4.execute-api.us-east-1.amazonaws.com/default/mailForward",
       dataType: "json",
       crossDomain: "true",
       contentType: "application/json; charset=utf-8",
       data: JSON.stringify(data),


       success: function () {
         // clear form and show a success message
         alert("Successfull");
         document.getElementById("input-md").reset();
     location.reload();
       },
       error: function () {
         // show an error message
         alert("UnSuccessfull");
       }});
   }
}
