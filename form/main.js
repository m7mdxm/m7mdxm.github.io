

/* //smtp
const sandEmail = () => {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "",
        Password : "",
        To : '',
        From : document.getElementById("email").value,
        Subject : "New Contact Form",
        Body : "Name: " + document.getElementById("name").value 
                + "<br> Discord: " + document.getElementById("discord").value
                + "<br> Email: " + document.getElementById("email").value
                + "<br> Phone Number: " + document.getElementById("phone").value
                + "<br> Message: " + document.getElementById("messade").value
    }).then(
      message => alert(message)
    );
}
*/


var form = document.getElementById('sheetdb-form');
        form.addEventListener("submit", e => {
          e.preventDefault();
          fetch(form.action, {
              method : "POST",
              body: new FormData(document.getElementById("sheetdb-form")),
          }).then(
              response => response.json()
          ).then((html) => {
            window.alert("submitted");
          });
        });