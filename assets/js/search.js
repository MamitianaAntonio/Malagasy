document.addEventListener("DOMContentLoaded", function() {
  // Liste des mots-clés prédéfinis
  const keywords = ["antakarana", "tsimihety", "sakalava", "betsimisaraka", "sihanaka", "bezanozano", "merina", "betsileo", "antefasy", "antemoro", "antesaka", "antambahoaka", "tanala","mahafaly", "tandroy", "antanosy", "bara", "vezo"];

  const form = document.getElementById("search-form");
  const input = document.getElementById("search-input");

  form.addEventListener("submit", function(event) {
      event.preventDefault(); // Empêche le formulaire de se soumettre normalement

      const query = input.value.trim().toLowerCase();

      if (keywords.includes(query)) {
          // Redirige vers la section appropriée sur la page faritany.html
          window.location.href = `faritany.html#${query}`;
      } else {
          // Gère le cas où le mot-clé n'est pas trouvé
          alert("Désolé, aucune correspondance trouvée.");
      }

      // Réinitialise le champ de recherche
      input.value = "";
  });
});
