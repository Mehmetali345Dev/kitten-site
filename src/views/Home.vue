<template>
  <div id="card">
    <div id="info">
      <router-link to="/profile">
        <div class="imageContainer" id="openProfile">
          <img
            src="../assets/images/kitten.png"
            class="logo"
            alt="Kitten"
          />
          <div class="imageOverlay">
            <div class="imageText">PROFİLİ GÖRÜNTÜLE</div>
          </div>
        </div>
      </router-link>
      <br />
      <p id="name"><b>Kitten</b>#7981</p>
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
      <p id="title">Sunucunuzu eşsiz hale getirin.</p>
    </div>

    <div id="description">
      <p class="field">Oynuyor</p>
      <p class="text">
       Bütün sunucu ayarlarınız tek komutla sizinle.<br/> Kitten Bot ile Sunucunuzu bir adım öne taşıyın.
      </p>
    </div>

    <div id="greyBG">
      <div id="roles">
        <p class="field">ROLLER</p>
        <div class="roles">
          <router-link to="/features">
            <div class="role" id="features">
              <div class="roleCircle"></div>
              <div class="roleName">ÖZELLİKLER</div>
            </div>
          </router-link>
          <router-link to="">
          <a>
            <div class="role" id="commands">
              <div class="roleCircle"></div>
              <div class="roleName">Dokümentasyon (Yakında)</div>
            </div>
          </a>
          </router-link>
          <router-link to="">
            <div class="role" id="ultimate">
              <div class="roleCircle"></div>
              <div class="roleName">Ayrıcalıklı Özellikler (Yakında)</div>
            </div>
          </router-link>
        </div>
        <div class="roles">
          <a
            href="https://discord.com/api/oauth2/authorize?client_id=782869032939290675&permissions=8&scope=bot%20applications.commands"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="roletwo" id="invite">
              <div class="roleCircle"></div>
              <div class="roleName">Davet Et</div>
            </div>
          </a>
          <a
            href="https://discord.gg/VgSVrGtxbQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="roletwo" id="support">
              <div class="roleCircle"></div>
              <div class="roleName">Yardım</div>
            </div>
          </a>
          <router-link to="/vote">
            <div class="roletwo" id="vote">
              <div class="roleCircle"></div>
              <div class="roleName">Oy Ver</div>
            </div>
          </router-link>
        </div>
      </div>
      <div id="notes">
        <p class="field">NOT</p>
        <p class="text">
          <br>Kitten ek özellikleri için sponsor olabilirsiniz. Bot sahibi görüşmeniz yeterlidir ayrıntılı bilgi:
          <a href="https://kittenbot.ml">Buradan</a>! (Yakında)
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
#info {
  background: var(--discord-cyan);
  border-radius: 1em 1em 0 0;
  padding-top: 4%;
}

/* Astro PFP */
.imageContainer {
  position: relative;
  width: 35%;
  height: 35%;
  left: 50%;
  transform: translateX(-50%);
}
.logo {
  width: 100%;
  height: auto;
  border-radius: 50%;
}
.imageOverlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 98.7%;
  width: 100%;
  opacity: 0;
  border-radius: 50%;
  transition: 0.1s ease;
  background: rgba(0, 0, 0, 0.5);
}
.imageContainer:hover .imageOverlay {
  opacity: 1;
  cursor: pointer;
}
.imageText {
  color: white;
  font-size: 1.6em;
  font-weight: 700;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

/* Bot name */
#name {
  display: inline-block;
  font-size: 1.25em;
}

/* Slogan of the bot */
#title {
  font-size: 2.5em;
  font-weight: 700;
  padding-left: 0.5em;
  padding-right: 0.5em;
  margin-top: 0.2em;
}

/* Middle div */
#description {
  background: var(--discord-light-cyan);
  padding: 0.125em 0.625em 0.125em 1.5625em;
}

/* Bottom div */
#greyBG {
  background: var(--discord-gray);
  padding: 0.125em 0.625em 1.5625em 1.5625em;
  border-radius: 0 0 1em 1em;
}

/* Role buttons */
#roles {
  text-align: left;
}
#roles a,
a:hover {
  text-decoration: none;
}
.roles {
  margin: 0.625em 0.25em 0 0;
  display: flex;
  flex-flow: row wrap;
}
.role,
.roletwo {
  margin: 0.125em 0.625em 0.3125em 0;
  display: inline-flex;
  align-items: center;
  border: 0.1em solid;
  border-radius: 0.9375em;
  padding: 0.125em 0.625em 0.2em 0.125em;
  font-size: 1.25em;
  font-weight: 600;
}
.role {
  color: #bb4fee;
  border-color: #bb7fee;
}
.role > .roleCircle {
  background: #bb4fee;
}
.role:hover {
  background: black;
  cursor: pointer;
}
.roletwo {
  color: var(--discord-cyan);
  border-color: white;
}
.roletwo > .roleCircle {
  background: var(--discord-cyan);
}
.roletwo:hover {
  border-color: var(--discord-cyan);
  background: white;
  cursor: pointer;
}
.roleCircle {
  float: left;
  width: 0.75em;
  height: 0.75em;
  border-radius: 50%;
  margin: 0 0.125em;
}
.roleName {
  white-space: nowrap;
  margin: 0 0.125em;
}

/* Notes section */
#notes {
  margin-top: 1.875em;
}
#notes a {
  text-decoration: none;
  color: var(--discord-cyan);
}
#notes a:hover {
  color: white;
  text-decoration: underline;
}
</style>
