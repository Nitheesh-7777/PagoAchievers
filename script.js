function validateEmailInput() 
{
    let name=document.getElementById("name").value;
    let mail=document.getElementById("mail").value;
    let message=document.getElementById("message").value;

    /*name validation */
    if(name==="") 
        {document.getElementById("nameFeedback").innerHTML='<span style="color:red">Please enter valid name.</span>';}
    else
        { document.getElementById("nameFeedback").innerHTML='';}
    /*mail validation */
    if(mail==="") 
        { document.getElementById("emailFeedback").innerHTML='<span style="color:red">Provide valid email.</span>';}
    else
        {validateEmail()}
    /*message validation */
    if(message==="") 
        { document.getElementById("messageFeedback").innerHTML='<span style="color:red">Kindly provide something else.</span>';}
    else
        {document.getElementById("messageFeedback").innerHTML='';}
   
    
}


function validateEmail() {
  const emailInput = document.getElementById('mail').value;
  const feedbackElement = document.getElementById('emailFeedback');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(emailInput)) {
    feedbackElement.textContent = ""; // Email is valid
  } else {
    feedbackElement.textContent = "Please enter a valid email address.";
  }
}





