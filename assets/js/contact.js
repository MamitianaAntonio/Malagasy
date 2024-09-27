document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const confirmationMessage = document.getElementById('confirmation-message');

  form.addEventListener('submit', (e) => {
      e.preventDefault(); // Empêche l'envoi du formulaire par défaut

      // Simule l'envoi du formulaire et l'affichage du message de confirmation
      confirmationMessage.textContent = 'Merci ! Votre message a été envoyé avec succès.';
      confirmationMessage.style.display = 'block';

      // Réinitialise le formulaire
      form.reset();
  });
});
