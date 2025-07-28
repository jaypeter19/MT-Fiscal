document.addEventListener('DOMContentLoaded', () => {
    emailjs.init("d7dYzuX-eyVk5ljaD");

    const form = document.getElementById('contactForm');

    form.addEventListener('submit', event => {
        event.preventDefault();
        event.stopPropagation();

        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        const formData = {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            message: form.message.value
        };

        emailjs.send('service_y4t78kk', 'template_j1jn86p', formData)
            .then((response) => {
                console.log('E-mail enviado com sucesso!', response.status, response.text);
                form.reset();
                form.classList.remove('was-validated');
                // Redireciona ou mostra feedback de sucesso
                window.location.href = "https://www.mtfiscal.com.br/registro.html";
            })
            .catch((error) => {
                console.error('Erro ao enviar e-mail:', error);
                document.getElementById('submitErrorMessage').classList.remove('d-none');
            });
    });
});