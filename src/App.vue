<template>
  <div id="app">
    <MobileNav/>
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import MobileNav from "@/components/MobileNav";
export default {
  name: 'App',
  components: {MobileNav},
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Satisfy&Montserrat&display=swap');

/*
.########.....###.....######..########....##.....##.########.##.....##.##......
.##.....##...##.##...##....##.##..........##.....##....##....###...###.##......
.##.....##..##...##..##.......##..........##.....##....##....####.####.##......
.########..##.....##..######..######......#########....##....##.###.##.##......
.##.....##.#########.......##.##..........##.....##....##....##.....##.##......
.##.....##.##.....##.##....##.##..........##.....##....##....##.....##.##......
.########..##.....##..######..########....##.....##....##....##.....##.########
*/
html {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-size: 16px;
  overflow-x: hidden;
  -ms-overflow-x: hidden;

  body {
    padding: 0;
    margin: 0;
    width: 100%;
  }

  h1 {
    font-size: clamp(34px, 50px, 5vw);
    &.branding {
      border: 4px solid white;
      width: fit-content;
      padding: 1rem;
    }
    a {
      text-decoration: none;
    }
  }

  h2 {
    font-size: clamp(28px, 42px, 5vw);
  }

  h3 {
    font-size: clamp(24px, 38px, 5vw);
  }
  .container-95 {
    width: 95%;
    height: 95vh;
    margin: auto;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .m-3 {
    margin: 3em;
  }

  .mt-2 {
    margin-top: 2em;
  }
  .color-white {
    color: white;
  }

  p {
    font-family: 'Montserrat Medium', sans-serif;
    font-size: clamp(10px, 14px, 4vw);
  }

  .color-green,
  .cta {
    font-family: 'Pacifico', cursive;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: 'Satisfy', cursive;
  }

  .color-green {
    color: #3BED6D;
  }

  .grid {
    display: grid;
  }

  .cta {
    text-decoration: none;
    padding: .5em 1em;
    display: flex;
    justify-content: space-between;
    font-size: clamp(12px, 16px, 2vw);
    &.cta-blue {
      background-color: #0C21ED;
      color: white;
    }
    &.cta-default {
      background-color: white;
      color: gray;
    }
  }

  .absolute-99 {
    position: absolute;
    z-index: 99;
  }

  .shadow {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  }


  .cta-container {
    display: flex;
    margin: auto;
    width: 100%;
    justify-content: space-evenly;
    * {
      width: 30%;
    }
    a {
      text-align: center;
      justify-content: space-evenly;
    }
  }

  input {
    &.fill {
      background-color: rgba(255, 255, 255, 0);
      outline: none;
      padding: 1em;
      font-family: 'Montserrat Medium', sans-serif;
      &:focus {
        background-color: rgba(255, 255, 255, 0);
        border: none;
      }

      &.fill-yellow {
        border: 4px solid #EDC124;
        color: white;
        &::placeholder {
          color: white;
        }
      }
    }
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

@media only screen and (max-width: 1080px) {
  .mt-md-0 {
    margin-top: 0!important;
  }
  .container-md-full {
    width: 100%;
    height: 100vh;
    padding: 12px;
  }
  .bg-img {
    width: 100%;
  }
  #app {
    overflow-x: hidden;
    -ms-overflow-x: hidden;
  }
}

@media only screen and (max-width: 1080px) and (min-width: 530px) {
  .cta-container {
    display: grid;
    grid-auto-rows: auto;
    align-items: center;
    margin-bottom: 2em;
    input {
      display: flex;
      width: 80%;
    }
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
  .cta-container {
    display: none!important;
  }
}


</style>
