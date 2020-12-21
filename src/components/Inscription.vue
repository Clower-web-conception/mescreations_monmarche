<template>
<div>
  <form action="" enctype="multipart/form-data">
    <div>
      <h3>Informations d'entreprise</h3>
      <div class="form-item horizontal">
        <label class="bg-yellow" for="siret">N° de SIRET</label>
        <input type="text" id="siret" v-model="siret" :maxlength="14">
        <span id="nb-char" v-html="msg">{{msg}}</span>
      </div>
      <div class="form-item horizontal">
        <label class="bg-yellow" for="name">Nom Prénom<small>(Obligatoire)</small></label>
        <input type="text" id="name" :value="nom_prenom" required>
      </div>
      <div class="form-item horizontal">
        <label class="bg-yellow" for="nom_de_la_societe">Nom de la société<small>(Obligatoire)</small></label>
        <input type="text" id="nom_de_la_societe" :value="nom_societe" required>
      </div>
      <div class="form-item horizontal">
        <label class="bg-yellow" for="type">Type de société<small>(Obligatoire)</small></label>
        <select  id="type" name="type" v-model="catSelected" required>
          <option disabled value="">Choisir le type de société</option>
          <option v-for="cat in Object.getOwnPropertyNames(JSON.parse(JSON.stringify(categories)))" v-bind:key="cat" :value="cat">{{ cat }}</option>
        </select>
      </div>
      <div  class="form-item horizontal" v-if="catSelected">
        <label class="bg-yellow" for="cat-selected">Catégorie d'activité<small>(Obligatoire)</small></label>
        <select id="cat-selected" required>
          <option disabled value="">Choisir une catégorie</option>
          <option v-for="c in categories[catSelected]" :key="c.id">{{c}}</option>
        </select>
      </div>
      <div class="form-item horizontal">
        <label class="bg-yellow" for="adresse">Adresse postale<small>(Obligatoire)</small></label>
        <input type="text" name="adresse" id="adresse" :value="adresse" required>
      </div>
      <div class="form-item horizontal">
        <label class="bg-yellow" for="ville">Ville<small>(Obligatoire)</small></label>
        <input type="text" name="ville" id="ville" :value="ville" required>
      </div>
      <div class="form-item horizontal">
        <label class="bg-yellow" for="cp">Code postale<small>(Obligatoire)</small></label>
        <input type="text" name="cp" id="cp" :value="cp" required>
      </div>
      <div class="form-item ">
        <label class="bg-yellow" for="description">Description<small>(Conseillé)</small></label>
        <textarea rows="10" name="description" id="description" :value="description"  maxlength="250"></textarea>
      </div>
    </div>


    <div>
      <h3>Ma vitrine en image</h3>
      <div class="form-item">
        <label class="bg-yellow" for="galery">Téléverser ma galerie<small>(6 photos maximum)</small></label>
        <input type="file" name="galery" id="galery" @change="onFilesSelected" multiple>
        <ul id="galeryFiles" v-if="selectedFiles !== null">
          <li v-for="img in selectedFiles" v-bind:key="img.index"><img :src="img"><span @click="removeImage(img)" class="remove-image">x</span><input type="text" :value="imgAlt" placeholder="Titre de l'image"></li>
        </ul>
      </div>
    </div>

    <div>
      <h3>Être contacté</h3>
      <div class="form-group">
        <label class="bg-yellow">Réseaux sociaux :</label>
        <div class="form-item horizontal">
          <label class="bg-default" for="fb">Facebook</label>
          <input type="text" name="fb" id="fb">
        </div>
        <div class="form-item horizontal">
          <label class="bg-default" for="insta">Instagram</label>
          <input type="text" name="insta" id="insta">
        </div>
        <div class="form-item horizontal">
          <label class="bg-default" for="site">Site web</label>
          <input type="text" name="site" id="site">
        </div>
        <div class="form-item">
          <label class="bg-yellow" for="mail">Adresse mail</label>
          <input type="text" name="mail" id="mail">
        </div>
        <div class="form-item">
          <label class="bg-yellow" for="phone">N° de téléphone</label>
          <input type="text" name="phone" id="phone">
        </div>
      </div>
    </div>
    <div>
      <h3>Création du compte</h3>
      <div class="form-item horizontal">
        <label class="bg-yellow" for="mdp">Choisir un mot de passe</label>
        <input type="password" name="mdp" id="mdp">
      </div>
      <div class="form-item horizontal">
        <label class="bg-yellow" for="confirme">Confirmer le mot de passe</label>
        <input type="password" name="confirme" id="confirme">
      </div>
      <div class="form-item horizontal mob-vertical">
        <div></div>
        <p><input type="checkbox" name="CGU" id="CGU">J'accepte les conditions générales d'utilisation.</p>
      </div>
      <div class="form-item horizontal mob-vertical">
        <div></div>
        <p><input type="checkbox" name="ok" id="ok">j'accepte être contacter par la société<a href="https://clower.fr" target="_blank"> Clower Web Conception</a> à l'origine de ce site ? </p>
      </div>
      <div class="form-item horizontal mob-vertical">
        <div></div>
        <button type="submit" class="bg-green">Envoyer</button>
      </div>
    </div>
  </form>
  <toast v-if="notification" v-bind:in-error="errorStatus" v-bind:msg="notification"/>
</div>
</template>


<script>
import axios from 'axios';
import _ from 'lodash';
import Toast from "@/components/Toast";
const token = "79a287f7-0af9-3e31-a5dd-adc3a4cdbbb7"
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
      errorStatus: false,
      selectedFiles: []
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
  /**
   * method : GET
   * Récupération des informations lors de la saisie du numéro de SIRET
   * return JSON response
   */
    getSiret : function () {
      let vm = this
      axios
          .get(url + vm.siret, {
            //header et proxy à ajouter dans le code du localhost afin de gérer les problèmes de lecture de l'api en local
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
            vm.nom_prenom = rootData.uniteLegale.nomUniteLegal !== null && rootData.uniteLegale.prenom1UniteLegale !== null ? `${rootData.uniteLegale.nomUniteLegale} ${rootData.uniteLegale.prenom1UniteLegale}` : ""
            vm.nom_societe = rootData.periodesEtablissement[0].denominationUsuelleEtablissement
            vm.adresse = `${rootData.adresseEtablissement.numeroVoieEtablissement} ${rootData.adresseEtablissement.libelleVoieEtablissement}`
            vm.ville = rootData.adresseEtablissement.libelleCommuneEtablissement
            vm.cp = rootData.adresseEtablissement.codePostalEtablissement
          })
          .catch(function (e){
            if (e.response.status !== 200) {
              vm.notification = 'Il y a une erreur avec votre numéro de SIRET'
              vm.errorStatus = true
            }
          })
    },
    /**
     * method: POST
     * post les différents photo dans le dossier "upload"
     */
    postMedias : function () {},
    /**
     * method: POST
     * création du compte utilisateur
     */
    postSignUp : function () {},
    /**
     * method: POST
     * Envoie de l'ensemble des données vers une page du BO
     */
    postsFullEntryOnDraft : function () {},

    onFilesSelected : function (e) {
      let files = e.target.files || e.dataTransfer.files
      if(!files) return
      files.forEach(el => {
          this.createImage(el)
      })
    },
    createImage : function (file) {
      let reader = new FileReader();
      let vm = this;
      reader.onload = (e) => {
        if (vm.selectedFiles.length <= 6 - 1) {
          vm.selectedFiles.push(e.target.result)
        } else {
          vm.errorStatus = true
          vm.notification = 'La galerie ne peut contenir que 6 photos maximum'
        }
      };
      reader.readAsDataURL(file);
    },
    removeImage : function (i) {
      let vm = this
      vm.selectedFiles.splice(this.selectedFiles.indexOf(i), 1)
    }
  }
}

</script>

<style lang="scss" scoped>

/*
.########..#######..########..##.....##.##.....##.##..........###....####.########..########
.##.......##.....##.##.....##.###...###.##.....##.##.........##.##....##..##.....##.##......
.##.......##.....##.##.....##.####.####.##.....##.##........##...##...##..##.....##.##......
.######...##.....##.########..##.###.##.##.....##.##.......##.....##..##..########..######..
.##.......##.....##.##...##...##.....##.##.....##.##.......#########..##..##...##...##......
.##.......##.....##.##....##..##.....##.##.....##.##.......##.....##..##..##....##..##......
.##........#######..##.....##.##.....##..#######..########.##.....##.####.##.....##.########
*/
form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  font-family: "montserrat", sans-serif;
  font-size: clamp(10px, 14px, 1vw);
  padding: 4em;
  .form-group {
    display: grid;
    .form-item {
      width: 100%;
    }
  }
  #nb-char {
    position: absolute;
    top: 50%;
    right: 2%;
    transform: translate(-50%, -50%);
  }
  .form-item {
    display: grid;
    margin: 6px auto;
    position: relative;
    &.horizontal {
      grid-auto-flow: column;
      grid-template-columns: 0.45fr 1fr;
    }
  }
  button {
    font-size: clamp(12px, 20px, 1vw);
  }
  label, button {
    padding: .5em;
    &.bg-default {
      background-color: rgb(214, 214, 214);
      color: rgb(92, 92, 92);
      border: .5px solid rgb(92, 92, 92);
    }
    &.bg-yellow {
      background-color: #edc124;
      color: rgb(15, 15, 15);
      border: .5px solid #a38519;
    }
    &.bg-green {
      padding: 1rem;
      background-color: #3BED6D;
      color: #ffffff;
      border: .5px solid #a38519;
    }
  }
  input {
    padding: .5em;
    outline: none;
  }
  #galery {
    position: absolute;
    visibility: hidden;
  }
  #cat-selected {
    width: 100%;
  }
  #galeryFiles {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    gap: 4px;
    justify-items: center;
    li {
      text-align: -webkit-center;
      text-align: -moz-center;
      text-align: center;
      position: relative;
      .remove-image {
        color: red;
        position: absolute;
        top: 0;
        left: 95%;
        font-size: large;
        font-weight: bold;
        cursor: pointer;
      }
      input {
        max-width: 160px;
      }
      img {
        max-width: 175px;
        max-height: 175px;
        height: fit-content;
      }
    }
  }
}

small {
  font-size: clamp(6px, 10px, 2vw);
  color: red;
}

@media only screen and (max-width: 530px) {
  form {
    padding: 8px;
    padding-bottom: 10em !important;
    grid-template-columns: 1fr !important;
  }
  .mob-vertical {
    grid-template-rows: auto 1fr!important;
    grid-template-columns: 1fr!important;
  }

  #galeryFiles {
    grid-template-columns: 1fr 1fr!important;
    li {
      min-height: 64px;
      object-fit: cover;
      .remove-image {
        font-size: x-large!important;
      }
      img {
        width: 100%!important;
      }
    }
  }
}

</style>