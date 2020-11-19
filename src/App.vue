<template>
  <div id="app">
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Satisfy&Montserrat&display=swap');

html {
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  body {
    font-size: 16px;
    padding: 0;
    margin: 0;
    height: 100%;
  }
}
#app {
  height: 100%;
}

span, p, button, a, li {
  font-family: 'Pacifico', cursive;
}

input, label, textarea {
  font-family: 'Montserrat Medium', sans-serif;
}

h1, h2, h3, h4, h5{
    font-family: 'Satisfy', cursive;
}

h1 {
 font-size: 4rem;
}

div {
  &.container-plein {
    width: 100%;
    height: 100%;
  }
}
a {
  text-decoration: none;
  &.btn {
    padding: 6px 18px;
    color: black;
    font-size: 1rem;
    display: flex;
    align-items: center;
    &.fill {
      border: 3px solid black;
      &.white {
        border-color: white;
        color: white;
      }
    }
    &.plein {
      background: black;
      &.warn {
        background-color: #EDC124;
      }
    }
  }
}
</style>
