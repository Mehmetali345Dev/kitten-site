<template>
  <div id="menu">
    <router-link to="/"
      ><div id="back" class="menuButton">Geri</div></router-link
    >
  </div>
</template>

<script>
export default {
  name: 'CardNavBar'
}
</script>

<style scoped>
#menu {
  background: #292b2f;
  height: 8em;
  border-radius: 1em 1em 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menuButton {
  font-size: 200%;
  padding: 0.4em;
  background: #373940;
  border-radius: 0.4em;
  text-align: center;
}

/*Back Button*/
#back {
  width: 3em;
  position: relative;
  margin-left: 1em;
  margin-right: 0.8px;
}
#back:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
