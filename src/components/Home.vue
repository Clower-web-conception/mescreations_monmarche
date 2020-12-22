<template>
  <section class="container-95 mt-2 mt-md-0 container-md-full bg-img color-white">
    <div class="info-src">
      <p>Source : https://images.unsplash.com/photo-1516652695352-6118f7cc1a07?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=752&q=80</p>
      <p>auteur : Jacek Dylag | <a href='https://unsplash.com/@dylu'>@dylu</a></p>
    </div>
    <div class="m-3">
      <h1 class="branding"><router-link to="/" href="">Mes Créations <br> Mon marché</router-link></h1>
      <h2>Trouvez les créations qui vous font envies !</h2>
    </div>
    <div class="cta-container">
      <input class="fill fill-yellow" type="search" name="search" id="search" placeholder="Rechercher">
      <router-link class="cta cta-blue" to="/inscription">Exposer mes creations</router-link>
    </div>
    <div  class="cta-container">
      <router-link to="/visiter" class="cta cta-default absolute-99 shadow"><span>↓</span><span>Visiter</span><span>↓</span></router-link>
    </div>
  </section>
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
h1 {
  a {
    color: #ececec;
  }
}

.bg-img {
  background-image: url("../assets/mader.png");
  background-size: cover;
  position: relative;
  background-position: center;
  .info-src {
    position: absolute;
    z-index: -1;
  }
}

/*
.########..########..######..##....##.########..#######..########.
.##.....##.##.......##....##.##...##.....##....##.....##.##.....##
.##.....##.##.......##.......##..##......##....##.....##.##.....##
.##.....##.######....######..#####.......##....##.....##.########.
.##.....##.##.............##.##..##......##....##.....##.##.......
.##.....##.##.......##....##.##...##.....##....##.....##.##.......
.########..########..######..##....##....##.....#######..##.......
*/
@media only screen and (min-width: 1080px) {
}

/*
.########....###....########..##.......########.########
....##......##.##...##.....##.##.......##..........##...
....##.....##...##..##.....##.##.......##..........##...
....##....##.....##.########..##.......######......##...
....##....#########.##.....##.##.......##..........##...
....##....##.....##.##.....##.##.......##..........##...
....##....##.....##.########..########.########....##...
*/
@media only screen and (max-width: 1080px) and (min-width: 530px) {
}
/*
.##.....##..#######..########..####.##.......########
.###...###.##.....##.##.....##..##..##.......##......
.####.####.##.....##.##.....##..##..##.......##......
.##.###.##.##.....##.########...##..##.......######..
.##.....##.##.....##.##.....##..##..##.......##......
.##.....##.##.....##.##.....##..##..##.......##......
.##.....##..#######..########..####.########.########
*/
@media only screen and (max-width: 530px) {

}

</style>
