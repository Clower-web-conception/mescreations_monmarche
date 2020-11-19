<template>
<div>
  <h1>Exposez votre stand !</h1>
  <form>
    <div class="form-items row">
      <label for="siret">
        Numéro de <strong>SIRET</strong> (à renseigner pour validation d’authenticité)
      </label>
      <input type="text" id="siret" required>
      <button>Verifier</button>
    </div>

    <div class="form-items row">
      <label for="name">Nom prénom</label>
      <input type="text" id="name" required>
    </div>

    <div class="form-items row">
      <label for="nom_de_la_societe">Nom de la société</label>
      <input type="text" id="nom_de_la_societe" required>
    </div>

    <select >
      <option value="">Catégorie</option>
      <option value="restauration">Restauration</option>
      <option value="bijouterie">Bijouterie</option>
      <option value="decoration">Décoration</option>
    </select>

    <div class="form-items row">
      <label for="adresse">Adresse</label>
      <input type="text" id="adresse" required>
    </div>

    <div class="form-items row">
      <label for="ville">Ville</label>
      <input type="text" id="ville" required>
    </div>

    <div class="form-items row">
      <label for="cp">Code postal</label>
      <input type="text" id="cp" required>
    </div>

    <div class="form-items row">
      <label for="description">Décrivez votre savoir faire, le type d'objets que vous vendez, etc ...</label>
      <textarea id="description"/>
    </div>

    <div class="form-items row">
      <label for="facebook">Réseaux sociaux :</label>
      <div><input type="text" id="facebook"><input type="text" id="instagram"><input type="text" id="site"></div>
    </div>

    <div>
      <label for="email">Contacts</label>
        <div class="form-items row">
          <label for="email">Adresse email</label>
          <input type="email" id="email">
        </div>
        <div class="form-items row">
          <label for="telephone">N° de téléphone</label>
          <input type="tel" id="telephone">
      </div>
    </div>

    <div class="form-items row files">
      <span>Photos de maximum 6 articles vendus > si restaurant Demander une carte du restaurant
          <input type="file" multiple>
      </span>
    </div>

    <div class="form-items row">
      <label for="mdp">Choisissez un mot passe</label>
      <input type="password" id="mdp" required>
    </div>

    <div class="form-items row">
      <label for="confirm_mdp">Confirmer votre mot passe</label>
      <input type="password" id="confirm_mdp" required>
    </div>

    <span><input type="checkbox">Accepter la politique de confidentialité</span>

    <button type="submit">valider</button>
  </form>
  <pre>{{posts}}</pre>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Inscription",
  data() {
    return {
      posts: [],
      errors: []
    }
  },
  mounted() {
    let siret = "87969689600023"
    let token = "352f2268-ab15-32cd-9371-9521fd86e867"
      const url = `https://api.insee.fr/entreprises/sirene/V3/siret/${siret}`
      axios
          .get(url, {
            headers: {
              'Access-Control-Allow-Origin': "http://192.168.8.125:8080",
              Accept: "application/json",
              Authorization: `Bearer ${token}`
            },
            proxy: {
              host: '192.168.8.125',
              port: '8080'
            }
          })
          .then(response => {
            // JSON responses are automatically parsed.
            this.posts = response.data
          })
          .catch(e => {
            this.errors.push(e)
          })

    console.log(window.location.href)
  }
}

</script>

<style scoped>

</style>