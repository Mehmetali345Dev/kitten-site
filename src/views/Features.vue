<template>
  <div>
    <div id="particles-js"></div>
    <div id="card">
      <CardNavBar />
      <div id="featuresBG">
        <div class="featureWrapper">
          <img
            src="../assets/images/arrowRight.png"
            class="arrow"
            alt="arrow PNG"
          />
          <div class="featureDescription">
            Şüpheli Üye sistemi<br />
          </div>
        </div>
        <br />
        <div class="featureWrapper">
          <img
            src="../assets/images/arrowRight.png"
            class="arrow"
            alt="arrow PNG"
          />
          <div class="featureDescription">
            Eğlence komutları<br />
          </div>
        </div>
        <br />
        <div class="featureWrapper">
          <img
            src="../assets/images/arrowRight.png"
            class="arrow"
            alt="arrow PNG"
          />
          <div class="featureDescription">
            Moderasyon komutları<br />
          </div>
        </div>
        <br />
        <div class="featureWrapper">
          <img
            src="../assets/images/arrowRight.png"
            class="arrow"
            alt="arrow PNG"
          />
          <div class="featureDescription">
            VIP Sistemi<br />
          </div>
        </div>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import CardNavBar from '@/components/cardSections/CardNavBar'
export default {
  name: 'Ultimate',
  components: {
    CardNavBar
  }
}
</script>

<style scoped>
#featuresBG {
  font-size: 1.7em;
}

.arrow {
  width: 1.7em;
  margin-right: 0.6em;
  margin-top: -0.2em;
  display: table-cell;
  vertical-align: top;
}

.demo {
  color: var(--astro-purple);
}
.demo > a {
  color: var(--astro-purple);
  text-decoration: none;
}
.demo > a:visited {
  color: var(--astro-purple);
}
.demo > a:hover {
  color: white;
}

.featureWrapper {
  display: table-row;
}
.featureDescription {
  display: table-cell;
  vertical-align: top;
}

#vcMeaning {
  font-size: 0.8em;
  color: #d4d4d4;
}
</style>
