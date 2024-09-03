emailjs.init("yTx4MqGg5745LwnYu");
emailjs.send("service_emeehaj", "template_d29osmb", { to_name: "Имя", message: "Привет!", reply_to: "yorikduda@mail.ru" }) .then(response => console.log('Письмо успешно отправлено!', response)) .catch(error => console.log('Возникла ошибка...', error));
function sendEmail(){
	emailjs.init("yTx4MqGg5745LwnYu");
emailjs.send("service_emeehaj", "template_d29osmb", { to_name: "Имя", message: "Привет!", reply_to: "rezonitautopost@gmail.com" }) .then(response => console.log('Письмо успешно отправлено!', response)) .catch(error => console.log('Возникла ошибка...', error));
}