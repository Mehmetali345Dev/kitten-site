<template>
  <div>
    <div id="particles-js"></div>
    <div id="card">
      <CardNavBar />
      <div id="featuresBG">
        <p id="voteDescription">
          İşte buralardan oy verebilirsin!
        </p>
        <img
          src="../assets/images/arrowRight.png"
          class="arrowCommands"
          alt="arrow PNG"
        />
        <a
          href="https://top.gg/bot/782869032939290675"
          target="_blank"
          id="topgg"
          rel="noopener noreferrer"
          >Top.gg &nbsp;</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import CardNavBar from '@/components/cardSections/CardNavBar'
export default {
  name: 'Vote',
  components: {
    CardNavBar
  }
}
</script>

<style scoped>
#voteDescription {
  font-size: 0.8em;
}

/* Arrows */
.arrowCommands {
  width: 1.7em;
  vertical-align: middle;
  float: left;
  margin-right: 0.6em;
  margin-top: -0.2em;
}
#rotateArrow {
  float: none;
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}

#topgg {
  color: var(--astro-purple);
}
#topgg:hover {
  color: white !important;
}
</style>
