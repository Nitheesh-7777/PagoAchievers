// Mail script
function SendMail() {
  var params ={
  name: document.getElementById("name").value,
  mail: document.getElementById("mail").value,
  message: document.getElementById("message").value
  }
  emailjs.send("service_vbrwguh", "template_k6ju5h9", params).then(function(res) {
  })
  }




