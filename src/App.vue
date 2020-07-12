<template>
  <div id="app">
    <div id="nav">
      <div>
        <b-navbar toggleable="lg" type="dark" variant="primary">
          <b-navbar-brand href="#">
            <b-button v-b-toggle.sidebar-1>MENU</b-button>
            <b-sidebar id="sidebar-1" title="LEARNSHALA" shadow>
              <div class="px-3 py-2">
                <p></p>

                <b-button variant="primary" block @click="hide">HOME</b-button>
                <b-button variant="primary" block @click="hide">MODULE</b-button>
                <b-button variant="primary" block @click="hide">FACULTY</b-button>
              </div>
            </b-sidebar>
          </b-navbar-brand>
          <b-navbar-brand id="logo" href="/">
            <img src="@/assets/books.png" alt="Kitten" />LEARNSHALA
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item href="/about">About Us</b-nav-item>
              <b-nav-item href="/team">Our Team</b-nav-item>
              <b-navbar-brand href="#">
                <b-button id="b" variant="success">LOGIN</b-button>
              </b-navbar-brand>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  text-align: center;
  background-color: rgb(143, 181, 253);
}
#logo {
  img {
    height: 40px;
    width: 40px;
    margin: 10px;
  }
}
#b {
  position: absloute;
  margin: 0px;
  margin-left: 10px;
}
#nav {
  margin-bottom: 10px;

  a {
    font-weight: bold;
    color: #fefeff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
