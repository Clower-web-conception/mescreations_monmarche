<template>
  <nav class="mobile-bar bottom">
    <ul>
      <li class="bg-yellow"><a href="">Chercher</a></li>
      <li class="bg-blue"><router-link to="/inscription" href="">Ajouter</router-link></li>
      <li class="menu"><a href="">
        <div>
          <span>MENU</span>
        </div>
      </a></li>
    </ul>
  </nav>
</template>

<script>
export default {
name: "MobileNav"
}
</script>

<style lang="scss">

/*
.########..########..######..##....##.########..#######..########.
.##.....##.##.......##....##.##...##.....##....##.....##.##.....##
.##.....##.##.......##.......##..##......##....##.....##.##.....##
.##.....##.######....######..#####.......##....##.....##.########.
.##.....##.##.............##.##..##......##....##.....##.##.......
.##.....##.##.......##....##.##...##.....##....##.....##.##.......
.########..########..######..##....##....##.....#######..##.......
*/
@media only screen and (min-width: 530px){
  .mobile-bar {
    display: none;
  }
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

  /*
.##.....##..#######..########..####.##.......########....##.....##.########.##....##.##.....##
.###...###.##.....##.##.....##..##..##.......##..........###...###.##.......###...##.##.....##
.####.####.##.....##.##.....##..##..##.......##..........####.####.##.......####..##.##.....##
.##.###.##.##.....##.########...##..##.......######......##.###.##.######...##.##.##.##.....##
.##.....##.##.....##.##.....##..##..##.......##..........##.....##.##.......##..####.##.....##
.##.....##.##.....##.##.....##..##..##.......##..........##.....##.##.......##...###.##.....##
.##.....##..#######..########..####.########.########....##.....##.########.##....##..#######.
*/

  nav {
    padding: 0;
    margin: 0;

    &.mobile-bar {
      z-index: 99;
      width: 100%;
      text-align: center;
      background-color: rgba(0, 0, 0, 0);

      &.bottom {
        position: fixed;
        bottom: 0;
        left: 0;
        transform: translateY(0);
      }
    }

    ul {
      list-style: none;
      margin: 0;
      display: grid;
      grid-template-columns: .5fr 2fr .5fr;
      padding: 0;
      li {
        padding: 6px 0;
        &.menu {
          background-color: white;

          span {
            font-family: "montserrat", sans-serif;
            font-size: 2rem;
            letter-spacing: -5px;
            font-weight: 100;

          }
        }
        &.bg-yellow{
          background-color: #EDC124;
          a {
            color: white!important;
          }
        }
        &.bg-blue {
          background-color: #0C21ED;
          color: white!important;
          a {
            color: white!important;
          }
        }
        a {
          text-decoration: none;
          font-family: 'Pacifico', cursive;
          color: rgb(31, 31, 31);
          font-size: 1.2rem;

        }
      }
    }
  }
}
</style>