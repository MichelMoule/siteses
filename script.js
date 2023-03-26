// Sélectionner le formulaire
const contactForm = document.getElementById('contact-form');

// Sélectionner le conteneur de message de confirmation
const confirmationMessage = document.getElementById('confirmation-message');

// Ajouter un gestionnaire d'événements pour le formulaire
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Récupérer les données du formulaire
    const formData = {
        name: contactForm.name.value,
        email: contactForm.email.value,
        website_type: contactForm['website-type'].value,
        ccccc: contactForm.details.value
    };

    // Cacher le formulaire
    contactForm.style.display = 'none';

    // Afficher le message de confirmation
    confirmationMessage.innerHTML = '<p>Merci pour votre demande ! Nous revenons vers vous dans les plus brefs délais🎉</p>';

    // Envoyer l'e-mail via EmailJS
    emailjs.send(emailjsServiceId, emailjsTemplateId, formData)
        .then(function(response) {
            console.log(formData);
            contactForm.reset();
        }, function(error) {
            alert('Une erreur s\'est produite lors de l\'envoi de votre demande. Veuillez réessayer.');
        });
});
