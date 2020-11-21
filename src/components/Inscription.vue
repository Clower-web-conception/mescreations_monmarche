<template>
<div>
<!--<p>{{categories}}</p>-->
  <h1>Exposez votre stand !</h1>
  <form>
    <div class="multiple-form" id="form-step-1">
      <h2>Informations d'entreprise</h2>
      <div class="form-items row">
        <label for="siret" >
          Numéro de <strong>SIRET</strong> (Vérification d'authenticité)
          <span v-html="msg">{{msg}}</span>
        </label>
        <input type="text" id="siret" v-model="siret" :maxlength="14">

      </div>

      <div class="form-items row">
        <label for="name">Nom prénom</label>
        <input type="text" id="name" :value="nom_prenom" required>
      </div>

      <div class="form-items row">
        <label for="nom_de_la_societe">Nom de la société</label>
        <input type="text" id="nom_de_la_societe" :value="nom_societe" required>
      </div>

      <label for="activity">Type d'activité :</label>
      <select id="activity" v-model="catSelected" required>
        <option disabled value="">Choisir une catégorie</option>
        <option v-for="cat in Object.getOwnPropertyNames(JSON.parse(JSON.stringify(categories)))" v-bind:key="cat" :value="cat">{{ cat }}</option>
      </select>
      <select v-if="catSelected" required>
        <option v-for="c in categories[catSelected]" :key="c.id">{{c}}</option>
      </select>


      <div class="form-items row">
        <label for="adresse">Adresse</label>
        <input type="text" id="adresse" :value="adresse" required>
      </div>

      <div class="form-items row">
        <label for="ville">Ville</label>
        <input type="text" id="ville" :value="ville" required>
      </div>

      <div class="form-items row">
        <label for="cp">Code postal</label>
        <input type="text" id="cp" :value="cp" required>
      </div>

      <div class="form-items row">
        <label for="description">Décrivez votre savoir faire, le type d'objets que vous vendez, etc ...</label>
        <textarea id="description" cols="" rows="10" maxlength="250"/>
      </div>

      <a class="steper btn plein info">Suivant</a>
    </div>

    <div class="multiple-form" id="form-step-2">
    <h2>Être contacté</h2>
    <div class="form-items row">
      <label for="facebook">Réseaux sociaux :</label>
      <div>
        <div class="d-flex"><i class="fi-xnsuxl-facebook"></i><input type="text" id="facebook" placeholder="https://www.facebook.com/votrePage"></div>
        <div class="d-flex"><i class="fi-xnsuxl-instagram"></i><input type="text" id="instagram" placeholder="https://www.instagram.com/votrepseudo/"></div>
        <div class="d-flex"><i class="fi-xtluxl-globe-thin"></i><input type="text" id="site" placeholder="https://monsite.fr"></div>
      </div>
    </div>

    <div>
        <div class="form-items row">
          <label for="email">Adresse email</label>
          <input type="email" id="email" placeholder="monAdress@mail.fr">
        </div>
        <label for="email">Contacts</label>
        <div class="form-items row">
          <label for="telephone">N° de téléphone</label>
          <input type="tel" id="telephone">
        </div>
      </div>
      <a class="steper btn plein info">Suivant</a>
    </div>

    <div class="multiple-form" id="form-step-3">
      <h2>Ma vitrine en image</h2>
      <div class="form-items row files">
        <span>Photos de maximum 6 articles vendus > si restaurant Demander une carte du restaurant
            <input type="file" multiple>
        </span>
      </div>
    </div>

    <div class="multiple-form" id="form-step-4">
    <h2>Création du compte</h2>
    <div class="form-items row">
      <label for="mdp">Choisissez un mot passe</label>
      <input type="password" id="mdp" required>
    </div>

    <div class="form-items row">
      <label for="confirm_mdp">Confirmer votre mot passe</label>
      <input type="password" id="confirm_mdp" required>
    </div>

    <span><input type="checkbox">Accepter la politique de confidentialité</span>

      <button type="submit"><a class="btn plein info">valider</a></button>
    </div>
  </form>
  <toast v-if="notification" v-bind:in-error="errorStatus" v-bind:msg="notification"/>
</div>
</template>


<script>
import axios from 'axios';
import _ from 'lodash';
import Toast from "@/components/Toast";
const token = "352f2268-ab15-32cd-9371-9521fd86e867"
const url = `https://api.insee.fr/entreprises/sirene/V3/siret/`
import metiers from "@/assets/jsons/activites.json"
export default {
  name: "Inscription",
  components: {
    Toast
  },
  data() {
    return {
      catSelected : '',
      categories: metiers ,
      listJobs: [],
      msg: "",
      notification: "",
      infos: null,
      siret: '',
      nom_prenom: '',
      nom_societe: '',
      adresse: '',
      ville: '',
      cp: '',
      toastClass: '',
      errorStatus: false
    }
  },
  watch: {
    siret : function() {
      const charactersSiret = /^\d{14}$/
      this.msg = `${this.siret.length} / 14`
      this.notification = ''
      if (this.siret.length === 14) {
        if (this.siret.match(charactersSiret)) {
          this.debouncedGetSiret()
          return this.siret
        } else {
          this.msg = '<span style="color: #EE0D12;font-family:\'Montserrat Medium\',serif;">' +
              '<br>Le SIRET doit contenir uniquement des chiffres!' +
              '</span>'
        }
      }

    }
  },
  created : function () {
    this.debouncedGetSiret = _.debounce(this.getSiret, 500)
  },
  methods: {
    getSiret : function () {
      let vm = this
      axios
          .get(url + this.siret, {
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
          .then(function (response) {
            // JSON responses are automatically parsed.
            // this.infos = response.data
            vm.infos = response.data
            vm.notification = `✔ Votre numéro de SIRET ${vm.siret} a pu être vérifié`
            vm.errorStatus = false
            let rootData = response.data.etablissement
            vm.nom_prenom = `${rootData.uniteLegale.nomUniteLegale} ${rootData.uniteLegale.prenom1UniteLegale}`
            vm.nom_societe = rootData.periodesEtablissement[0].denominationUsuelleEtablissement
            vm.adresse = `${rootData.adresseEtablissement.numeroVoieEtablissement} ${rootData.adresseEtablissement.libelleVoieEtablissement}`
            vm.ville = rootData.adresseEtablissement.libelleCommuneEtablissement
            vm.cp = rootData.adresseEtablissement.codePostalEtablissement
            console.log(vm.nom_societe)
          })
          .catch(function (e){
            if (e.response.status !== 200) {
              vm.notification = 'Il y a une erreur avec votre numéro de SIRET'
              vm.errorStatus = true
            }
          })
    }
  }
}

</script>

<style lang="scss" scoped>

form {
  display: grid;
  grid-auto-flow: row;
  width: 65%;
  justify-content: center;
  margin: auto;

  .multiple-form {
    box-shadow: 2px 4px 12px rgba(0, 0, 0, .2);
    padding: 16px;
    float: left;
  }

  select {
    overflow: hidden;
    width: 100%;
    option {
      width: 100%;
      max-width: 200px;
      white-space: nowrap;
    }
  }
  div {
    display: grid;
    grid-auto-flow: row;
    gap: 12px;
    padding: 6px;
  }
  button[type="submit"] {
    border: none;
    width: fit-content;
    justify-self: right;
  }
  a.steper {
    justify-self: right;
  }
}

.d-flex{
  display: flex;
  input {
    width: 100%;
  }
}
</style>