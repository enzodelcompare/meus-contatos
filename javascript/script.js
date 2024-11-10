//function clearForm() {
    // Limpa os campos do formulário
//    document.getElementById('contact-form').reset();
//}

function clearForm() {
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("interest").value = '';
    document.getElementById("message").value = '';
    alert("Formulário enviado com sucesso!");
}
