<template>
  <div>
    <span v-bind:class="[inError ? 'red' : 'green', 'alert']" v-html="msg">{{ msg }}</span>
  </div>
</template>

<script>
export default {
name: "Toast",
  props: {
    msg: String,
    inError: Boolean
  }
}
</script>

<style lang="scss">
.alert {
  font-family: 'Montserrat Medium', sans-serif;
  position: fixed;
  bottom: -100px;
  width: 100%;
  margin: auto;
  padding: 16px;
  background-color: #24A1ED;
  color: white;
  animation: 10s ease-in-out;
  -webkit-animation: 10s ease-in-out;
  -webkit-animation-name: toasting;
  animation-name: toasting;
  &.red {
    background-color: #EE0D12;
  }
  &.green {
    background-color: #0CED49;
  }
  @keyframes toasting {
    0% {
      bottom: -100px;
    }
    10% {
      bottom: 0;
    }
    98% {
      bottom: 0;
    }
    99% {
      bottom: -100px;
    }
  }
}
</style>