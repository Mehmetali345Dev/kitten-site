<template>
  <div>
    <div id="particles-js"></div>
    <div id="card">
      <header id="profileMenu">
        <img
          src="../assets/images/kitten.png"
          class="profileLogo"
          alt="Kitten PFP"
        />
        <div id="profileName">
          <div id="nameTag">
            <span id="username">Kitten</span>
            <span id="discriminator">#7981</span>
            <span id="botTag">
              <svg
                class="botTagVerified"
                width="1.7em"
                height="1.7em"
                viewBox="3 0 16 6"
              >
                <path
                  d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z"
                  fill="currentColor"
                ></path></svg
              >BOT
            </span>
          </div>
        </div>
        <div id="invite">
          <a
            href="https://discord.com/oauth2/authorize?client_id=782869032939290675&scope=bot&permissions=8"
            target="blank"
            rel="noopener noreferrer"
          >
            <div id="inviteButton">DAVET ET</div>
          </a>
        </div>
      </header>
      <div id="profileDescription">
        <div id="stats">
          <p class="field">İSTATİSTİKLER</p>
          <p class="text" v-on:click="getStats">
            Sunucu Sayısı: Kullanıcı Sayısı:
          </p>
        </div>
        <div id="sections">
          <div id="sectionItems">
            <div class="serversItem">
              Ortak Sunucular
            </div>
            <router-link to="/" class="serversItem" id="backProfile">
              <div>
                Geri Git
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div id="profileServers">
        <div id="serverScroller">
          <a
            href="https://discord.gg/YG38KQs7Fa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="server">
              <div id="astroImage" />
              KES Bots
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios')
export default {
  name: 'Profile',
  data () {
    return {
      guilds: '1100',
      users: '534640'
    }
  },
  beforeMount () {
    this.getStats()
  },
  methods: {
    async getStats () {
      axios({
        url: 'https://api.astro-bot.space/info'
      }).then(res => {
        this.guilds = res.data.guilds
        this.users = res.data.users
      })
    }
  }
}
</script>

<style scoped>
#profileMenu {
  vertical-align: middle;
  display: flex;
  flex-flow: row wrap;
  -webkit-box-align: center;
  background: var(--discord-cyan);
  align-items: center;
  border-radius: 1em 1em 0 0;
  padding: 1.25em 2em 1.25em 2em;
  margin-bottom: 1em;
}

.profileLogo {
  width: 7em;
  height: 7em;
  border-radius: 50%;
  margin-right: 1.25em;
  display: inline-flex;
}

#profileName {
  display: inline-flex;
}
#username {
  font-size: 1.25em;
  font-weight: 600;
  color: #fff;
}
#discriminator {
  font-size: 1.25em;
  color: #fff;
  opacity: 0.6;
}

/* Invite Button */
#invite {
  display: inline-flex;
  margin-left: auto;
}
#inviteButton {
  align-self: flex-end;
  color: #7289da;
  background-color: #fff;
  min-width: 8em;
  width: 8em;
  height: 2.5em;
  border-radius: 0.5em;
  border: none;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  text-rendering: optimizeLegibility;
}
#invite > a {
  color: #7289da;
  text-decoration: none;
}
#inviteButton:hover {
  background: #f8f9fd;
}

/* Playing description section */
#profileDescription {
  background: var(--discord-light-cyan);
  padding-top: 0.1em;
}
#stats {
  padding: 0 2em 0 2em;
}

/* Profile sections */
#sections {
  border-top: 1px solid hsla(0, 0%, 100%, 0.1);
}
#sectionItems {
  padding-left: 2em;
  height: 4em;
  display: flex;
}

#backProfile {
  border-bottom: 2px solid transparent;
}
#backProfile:hover {
  border-bottom: 2px solid white;
  text-decoration: none;
}
/* Listed servers */
.serversItem {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  border-bottom: 2px solid white;
  cursor: pointer;
  margin-right: 2.5em;
}
#profileServers {
  background: #292b2f;
  height: 15em;
  border-radius: 0 0 1em 1em;
}
#serverScroller {
  padding: 8px 0;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  min-height: 0;
  -webkit-box-flex: 1;
}
.server {
  display: flex;
  font-weight: 500;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  line-height: 30px;
  padding: 4px 8px;
  border-radius: 4px;
  margin: 1px 6px 1px 6px;
}
.server:hover {
  background-color: rgba(79, 84, 92, 0.16);
}
#astroImage {
  border-radius: 50%;
  background-size: 100% 100%;
  width: 3.125em;
  height: 3.125em;
  margin-right: 0.6em;
  background-image: url("../assets/images/kesbots.png");
}

</style>
