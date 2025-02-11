(function () {
    emailjs.init(config.EMAILJS_PUBLIC_KEY);
  })();
  
  function sendMail() {
    var params = {
      subject: document.getElementById("subject").value,
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = config.SERVICE_ID;
    const templateID = config.TEMPLATE_ID;
  
    emailjs.send(serviceID, templateID, params)
      .then(res => {
        document.getElementById("subject").value = "";
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
      })
      .catch(err => console.log(err));
  }
  