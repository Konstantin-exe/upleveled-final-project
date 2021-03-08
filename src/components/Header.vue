<template>
  <header>
    <!-- main nav bar fixed top-->
    <div class="row logo-top">
      <div class="col-11">
        <a class="" href="#"
          ><img src="@/assets/img/konzerthaus-logo.png" alt="Konzerthaus Logo"
        /></a>
      </div>
      <div class="col-1">
        <button
          class="btn btn-light float-right"
          type="button"
          id="navbar-right-toggler"
          onclick="toggleNavbarRight()"
        >
          Räume
        </button>
      </div>
    </div>

    <nav id="main-menu">
      <div class="" style="margin-top: 62px;"></div>
      <div class="row">
        <div class="fixed-menu" id="top-menu">
          <div id="right-menu">
            <ul class="row menu-list">
              <li class="menu-item text-center col-sm-6">
                <a href="@/views/aussen.html" />
                <img
                  src="../assets/img/wkh_entdecken_fotoauswahl-1.jpg"
                  alt=""
                  class="image-circle "
                />
                <h2>Außen</h2>
              </li>
              <li class="menu-item text-center col-sm-6">
                <a href="@/views/foyer.html" />
                <img
                  src="../assets/img/wkh_entdecken_fotoauswahl-3.jpg"
                  alt=""
                  class="image-circle "
                />
                <h2>Foyer</h2>
              </li>
              <li class="menu-item text-center col-sm-6">
                <a href="@/views/grosser-saal.html" />
                <img
                  src="../assets/img/wkh_entdecken_fotoauswahl-5.jpg"
                  alt=""
                  class="image-circle "
                />
                <h2>Großer Saal</h2>
              </li>
              <li class="menu-item text-center col-sm-6">
                <a href="@/views/mozart-saal.html" />
                <img
                  src="../assets/img/wkh_entdecken_fotoauswahl-7.jpg"
                  alt=""
                  class="image-circle "
                />
                <h2>Mozart Saal</h2>
              </li>
              <li class="menu-item text-center col-sm-6">
                <a href="schubert-saal.html">
                  <img
                    src="../assets/img/wkh_entdecken_fotoauswahl-9.jpg"
                    alt=""
                    class="image-circle "
                  />
                  <h2>Schubert Saal</h2>
                </a>
              </li>
              <li class="menu-item text-center col-sm-6">
                <a href="berio-saal">
                  <img
                    src="../assets/img/wkh_entdecken_fotoauswahl-11.jpg"
                    alt=""
                    class="image-circle "
                  />
                  <h2>Berio Saal</h2>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="fixed-menu" id="bottom-menu">
          <div id="portrait-menu">
            <div class="row">
              <div class="col-12 pt-4 pb-4 text-center">
                <button id="mobile-nav-toggle" class="" type="button">
                  - Räume -
                </button>
              </div>
            </div>
            <ul class="row text-center menu-list">
              <li class="menu-item col-sm-4 col-6">
                <a href="aussen.html">
                  <img
                    src="../assets/img/wkh_entdecken_fotoauswahl-1.jpg"
                    alt=""
                    class="image-circle"
                  />
                  <h2>Außen</h2>
                </a>
              </li>
              <li class="menu-item col-sm-4 col-6">
                <a href="@/views/foyer.html" />
                <img
                  src="../assets/img/wkh_entdecken_fotoauswahl-3.jpg"
                  alt=""
                  class="image-circle"
                />
                <h2>Foyer</h2>
              </li>
              <li class="menu-item col-sm-4 col-6">
                <a href="@/views/grosser-saal.html" />
                <img
                  src="../assets/img/wkh_entdecken_fotoauswahl-5.jpg"
                  alt=""
                  class="image-circle"
                />
                <h2>Großer Saal</h2>
              </li>
              <li class="menu-item col-sm-4 col-6">
                <a href="@/views/mozart-saal.html" />
                <img
                  src="../assets/img/wkh_entdecken_fotoauswahl-7.jpg"
                  alt=""
                  class="image-circle"
                />
                <h2>Mozart Saal</h2>
              </li>
              <li class="menu-item col-sm-4 col-6">
                <a href="schubert-saal.html">
                  <img
                    src="../assets/img/wkh_entdecken_fotoauswahl-9.jpg"
                    alt=""
                    class="image-circle"
                  />
                  <h2>Schubert Saal</h2>
                </a>
              </li>
              <li class="menu-item col-sm-4 col-6">
                <a href="berio-saal">
                  <img
                    src="../assets/img/wkh_entdecken_fotoauswahl-11.jpg"
                    alt=""
                    class="image-circle"
                  />
                  <h2>Berio Saal</h2>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#main-menu {
  text-transform: uppercase;
}
.fixed-menu {
  background-color: white;
}
</style>
