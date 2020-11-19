<template>
  <div class="container-plein" id="christmas-theme">
    <div id="home-section">
      <span>Pour Nöel</span>
      <h1>Mes créations, <br> mon marché !</h1>
      <div class="btn-section">
        <router-link class="btn fill white" to="/inscription">Exposer vos créations</router-link>
        <router-link class="btn plein warn" to="/visiter">Visiter le marché</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
export default {
  name: 'Home',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
div {
  align-self: center;
  display: grid;
  #home-section {
    width: 30%;
    height: fit-content;
    margin-left: 6rem;
    span {
      font-size: 2rem;
    }
    h1 {
      margin: 0;
      padding: 16px 1px;
      line-height: 80px;
    }
  }
  .btn-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    .btn {
      margin: 0 6px;
      text-align: center;
      justify-self: baseline;
      &:hover {
        filter: invert(.75);
        transition: .3s ease-in-out;
      }
    }
  }
}
#christmas-theme {
  background: linear-gradient(90deg, #EE0D12, black);
  color: white;
}

</style>
