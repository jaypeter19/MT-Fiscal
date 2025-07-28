// Inicialização EmailJS
document.addEventListener('DOMContentLoaded', () => {
    emailjs.init("d7dYzuX-eyVk5ljaD"); 
    const form = document.getElementById('contactForm');
    const submitButton = document.getElementById('submitButton');

    // Monitorar mudanças nos campos para habilitar o botão quando o formulário estiver válido
    form.addEventListener('input', () => {
        submitButton.disabled = !form.checkValidity();
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity()) {
            form.classList.add('was-validated');
            submitButton.disabled = true; // Desabilita o botão durante o envio

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                message: document.getElementById('message').value
            };

            // Enviar email
            emailjs.send('service_y4t78kk', 'template_j1jn86p', formData)
                .then((response) => {
                    console.log('E-mail enviado com sucesso!', response.status, response.text);
                    document.getElementById('submitErrorMessage').classList.add('d-none');
                    form.reset();
                    form.classList.remove('was-validated');
                    // Redireciona para a página de obrigado
                    window.location.href = form.getAttribute('action');
                })
                .catch((error) => {
                    console.error('Erro ao enviar e-mail:', error);
                    document.getElementById('submitErrorMessage').classList.remove('d-none'); // Exibe a mensagem de erro
                })
                .finally(() => {
                    submitButton.disabled = false; // Reabilita o botão após o envio
                });
        } else {
            form.classList.add('was-validated');
        }
    });
});
