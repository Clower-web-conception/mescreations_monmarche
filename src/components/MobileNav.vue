<template>
  <nav class="mobile-bar bottom">
    <ul>
      <li><a href="">Chercher</a></li>
      <li><a href="">
        <div class="menu">
          <span>Menu</span>
        </div>
      </a></li>
      <li><router-link to="/inscription" href="">Ajouter</router-link></li>
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
      background-color: white;
      box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.25);

      &.bottom {
        position: fixed;
        bottom: 0;
        left: 0;
        transform: translateY(0);
      }
    }

    ul {
      list-style: none;
      padding: 12px 0;
      margin: 0;
      display: grid;
      grid-template-columns: auto auto auto;

      li {
        a {
          text-decoration: none;
          font-family: 'Pacifico', cursive;
          color: rgb(31, 31, 31);
          font-size: 1.2rem;

          .menu {
            position: relative;
            width: 100%;
            height: 100%;

            span {
              font-family: "montserrat", sans-serif;
              font-size: 2rem;
              letter-spacing: -5px;
              position: fixed;
              transform: translate(-50%, -50%);
              font-weight: 600;

              &::after {
                content: "";
                box-shadow: 0 0 4px #525252;
                z-index: -1;
                background: white;
                /* border: 0.5px solid black; */
                position: absolute;
                top: 0;
                left: 50%;
                width: 64px;
                height: 64px;
                border-radius: 32px;
                transform: translate(-50%, -25%);
              }
            }
          }
        }
      }
    }
  }
}
</style>