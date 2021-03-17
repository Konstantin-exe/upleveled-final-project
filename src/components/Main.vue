<template>
  <!-- main container -->
  <div class="content">
    <div class="row mx-0">
      <div class="col-md-12 px-0">
        <div class="image">
          <figure id="imagemap">
            <!-- modal -->
            <modal v-model="modalOpen"></modal>

            <!-- mobile view -->
            <div class="portrait">
              <svg width="100%" height="100%" viewBox="0 0 371 590">
                <image
                  width="371"
                  height="590"
                  src="../assets/img/wkh_entdecken_fotoauswahl-2.jpg"
                />
                <a @click="openModal" click="findModalExternal">
                  <circle
                    cx="100"
                    cy="100"
                    r="15"
                    opacity="0"
                    fill="none"
                    stroke="red"
                    stroke-width="5"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="10"
                    opacity="0"
                    fill="red"
                    stroke="red"
                    stroke-width="0"
                  />
                </a>

                <a
                  @click="openModal"
                  class="li-modal"
                  click="findModalExternal"
                >
                  <circle
                    cx="200"
                    cy="300"
                    r="15"
                    opacity="0"
                    fill="none"
                    stroke="red"
                    stroke-width="5"
                  />
                  <circle
                    cx="200"
                    cy="300"
                    r="10"
                    opacity="0"
                    fill="red"
                    stroke="red"
                    stroke-width="0"
                  />
                </a>
                <circle
                  cx="300"
                  cy="500"
                  r="15"
                  opacity="0"
                  fill="none"
                  stroke="red"
                  stroke-width="5"
                />
                <circle
                  cx="300"
                  cy="500"
                  r="10"
                  opacity="0"
                  fill="red"
                  stroke="red"
                  stroke-width="0"
                  onclick="scrollToElement('videos')"
                />
              </svg>
            </div>
            <!-- web view -->
            <div class="landscape">
              <svg width="100%" height="100%" viewBox="0 0 1842 1212">
                <!-- <defs>
                <style></style>
              </defs> -->
                <image
                  width="100%"
                  height="100%"
                  xlink:href="../assets/img/wkh_entdecken_fotoauswahl-1.jpg"
                />
                <a
                  @click="openModal"
                  class="li-modal"
                  click="findModalExternal"
                  name="circle-1"
                >
                  <circle
                    cx="300"
                    cy="200"
                    r="75"
                    opacity="0"
                    fill="none"
                    stroke="red"
                    stroke-width="20"
                  />
                  <circle cx="300" cy="200" r="50" opacity="0" fill="red" />
                </a>
                <a
                  @click="openModal"
                  class="li-modal"
                  click="findModalExternal"
                  name="circle-2"
                >
                  <circle
                    cx="800"
                    cy="600"
                    r="75"
                    opacity="0"
                    fill="none"
                    stroke="red"
                    stroke-width="20"
                  />
                  <circle cx="800" cy="600" r="50" opacity="0" fill="red" />
                </a>

                <a
                  @click="openModal"
                  class="li-modal"
                  click="findModalExternal"
                  name="circle-3"
                >
                  <circle
                    cx="1100"
                    cy="1200"
                    r="75"
                    opacity="0"
                    fill="none"
                    stroke="red"
                    stroke-width="20"
                  />
                  <circle cx="1100" cy="1200" r="50" opacity="0" fill="red" />
                </a>
              </svg>
            </div>
          </figure>
          <div class="scroll-image">
            <img
              class="center-block"
              src="/img/btn-desktop-scroll-down.png"
              @click="goto('videos')"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="container pt-5">
      <div ref="videos">
        <div class="row">
          <h1>Videos</h1>
        </div>
        <div class="row">
          <div class="col-md-5 ml-0">
            <div class="row">
              <div class="videoWrapper">
                <iframe
                  width="360px"
                  height="auto"
                  src="https://www.youtube.com/embed/Hp_Eg8NMfT0"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
            </div>
            <div class="row">
              Erzählungen vom Haus
            </div>
          </div>
          <div class="col-md-1" />
          <div class="col-md-5 ml-0">
            <div class="row">
              <div class="videoWrapper">
                <iframe
                  width="360px"
                  height="auto"
                  src="https://www.youtube.com/embed/Hp_Eg8NMfT0"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
            </div>
            <div class="row">
              Drohnen Video
            </div>
            <button
              v-if="dataFromPagesApi && dataFromPagesApi[0]"
              type="button"
              class="btn btn-outline-dark"
            >
              {{ dataFromPagesApi[0].id }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import Modal from './Modal.vue';
export default {
  components: { Modal },
  name: 'Main',
  data() {
    return {
      modalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.modalOpen = !this.modalOpen;
    },

    goto(ref) {
      const element = this.$refs[ref];
      const top = element.offsetTop;
      window.scrollTo(0, top);
    },
  },
  computed: {
    dataFromPagesApi() {
      return this.$store.state.dataFromPagesApi;
    },
    dataFromMediaApi() {
      return this.$store.state.dataFromMediaApi;
    },
  },
  created() {
    this.$store.dispatch('fetchDataFromPagesApi');
    this.$store.dispatch('fetchDataFromMediaApi');
  },
};
</script>

<style>
/* Main menu styling */
#main-menu {
  text-transform: uppercase;
}
.fixed-menu {
  background-color: white;
}
/* Mobile menu visible only on mobile, use bootsrap medium break-point  */
@media (max-width: 768px) {
  #portrait-menu {
    display: block;
  }
  #bottom-menu {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 11;
  }
  /* hide top menu */
  #top-menu {
    display: none;
  }
  /* hide menu button */
  #navbar-right-toggler {
    display: none;
  }

  .content {
    margin-top: 10px;
    padding-top: 62px;
  }

  /* change background image to portrait */

  div.portrait {
    display: flex;
  }
  div.landscape {
    display: none;
  }

  /* Mobile version of circle full opacity */
  circle {
    opacity: 0.5;
  }
}

/* Destkop version in widescreen, use bootstrap medium breakpoint */
@media (min-width: 769px) {
  #bottom-menu {
    display: none;
  }
  #top-menu {
    position: fixed;
    top: 62px;
    right: -100%;
    z-index: 12;
    max-width: 385px;
  }

  /* show menu button */
  #navbar-right-toggler {
    display: block;
  }
}

/* change background to landscape (widescreen) */
div.portrait {
  display: none;
}
div.landscape {
  display: flex;
}

/* svc element circle styling */
circle {
  opacity: 0.2;
}

circle:hover {
  opacity: 0.8;
}

#right-menu {
  margin-top: 30px;
}

#bottom-menu {
  height: 80px;
}
#mobile-nav-toggle {
  border: none;
  background-color: rgba(#f9cac7 0.4);
  font-size: 2rem;
}

#main-menu a a:link a:visited a:hover {
  color: black;
}
#main-menu a:hover {
  text-decoration: underline;
}
#main-menu h2 {
  font-size: 1rem;
  color: black;
}

/* video container 16:9 responsive */
.videoWrapper {
  overflow: hidden;
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  width: 100%;
}

.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.logo-top {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  width: 100%;
  margin: 0;
  padding: 10px 0;
}

#navbar-right-toggler {
  margin: 10px;
}

.menu-item {
  margin-bottom: 1.5rem;
}

/* Scroll Item */
.scroll-image:hover {
  transform: translateY(-8px) rotate(0deg);
  transition: all 0.1s ease-in-out;
  opacity: 1;
}

.scroll-image {
  transition: all 0.1s ease-in-out;
  opacity: 0.8;
}
</style>
