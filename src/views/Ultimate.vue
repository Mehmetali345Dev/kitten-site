<template>
  <div>
    <div id="particles-js"></div>
    <div id="card">
      <CardNavBar />
      <div id="ultimateContent">
        <div class="ultimateSection">
          <div class="ultimateTitle">
            <img
              src="../assets/images/animatedArrow.gif"
              alt="arrow PNG"
              class="ultimateAnimated"
            />Ayrıcalıklı Özellikler nedir?
          </div>
          <div class="ultimateText">
            Kitten ek komutları ve özel komutlara ulaşmanızı sağlar.
          </div>
        </div>

        <div class="ultimateSection">
          <div class="ultimateTitle">
            <img
              src="../assets/images/animatedArrow.gif"
              alt="arrow PNG"
              class="ultimateAnimated"
            />Peki neler sunuyor?
          </div>
          <div class="ultimateText">
            <div class="fieldWrapper">
              <img
                src="../assets/images/arrowRight.png"
                class="arrowUltimate"
                alt="arrow PNG"
              />
              <div class="ultimateField">YAKINDA</div>
            </div>
            <br />
            <div class="fieldWrapper">
              <img
                src="../assets/images/arrowRight.png"
                class="arrowUltimate"
                alt="arrow PNG"
              />
              <div class="ultimateField">YAKINDA</div>
            </div>
            <br />
            <div class="fieldWrapper">
              <img
                src="../assets/images/arrowRight.png"
                class="arrowUltimate"
                alt="arrow PNG"
              />
              <div class="ultimateField">
                YAKINDA
              </div>
            </div>
            <br />
            <div class="fieldWrapper">
              <img
                src="../assets/images/arrowRight.png"
                class="arrowUltimate"
                alt="arrow PNG"
              />
              <div class="ultimateField">YAKINDA</div>
            </div>
            <br />
            <div class="fieldWrapper">
              <img
                src="../assets/images/arrowRight.png"
                class="arrowUltimate"
                alt="arrow PNG"
              />
              <div class="ultimateField">
              YAKINDA
              </div>
            </div>
            <br />
            <div class="fieldWrapper">
              <img
                src="../assets/images/arrowRight.png"
                class="arrowUltimate"
                alt="arrow PNG"
              />
              <div class="ultimateField">YAKINDA</div>
            </div>
            <br />
            <div class="fieldWrapper">
              <img
                src="../assets/images/arrowRight.png"
                class="arrowUltimate"
                alt="arrow PNG"
              />
              <div class="ultimateField" id="ultimateFeatures">
                Özel Komutlar:<br/>
                Yakında
              </div>
            </div>
          </div>
        </div>
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
#ultimateContent {
  text-align: left;
  font-size: 2em;
  padding: 0.8em 0.625em 0.4em 0.8em;
}

.ultimateSection {
  margin-bottom: 1em;
}

.ultimateAnimated {
  width: 1em;
  height: 1em;
  padding-right: 0.3em;
  margin-top: -0.2em;
  vertical-align: middle;
}

.ultimateTitle {
  font-size: 0.8em;
}
.ultimateText {
  font-size: 0.6em;
  margin-top: 0.5em;
  margin-left: 1em;
  font-weight: 50 !important;
}

.arrowUltimate {
  width: 1.2em;
  height: 1.2em;
  padding-right: 0.2em;
  margin-top: -0.2em;
  vertical-align: middle;
}

.fieldWrapper {
  display: table-row;
}
.ultimateField {
  display: table-cell; vertical-align: top;
}

#ultimateFeatures a {
  color: white;
}
#ultimateFeatures a:hover {
  color: var(--astro-purple);
}

.ultimateText a {
  color: var(--astro-purple);
}
.ultimateText a:hover {
  color: white;
}

</style>
