<template>
  <!-- main container -->
  <div class="content">
    <div class="row mx-0">
      <div class="col-md-12 px-0">
        <div class="image">
          <figure id="imagemap">
            <svg
              class="landscape"
              width="100%"
              height="100%"
              viewBox="0 0 1842 1212"
            >
              <!-- <defs>
                  <style></style>
                </defs> -->
              <image
                width="100%"
                height="100%"
                xlink:href="../assets/img/wkh_entdecken_fotoauswahl-1.jpg"
              />
              <a
                xlink:href="drone-video.html"
                class="li-modal"
                @click="findModalExternal"
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
              <a xlink:href="#" class="li-modal" @click="findModalExternal">
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

              <a xlink:href="#videos">
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
            <svg
              class="portrait"
              width="100%"
              height="100%"
              viewBox="0 0 371 590"
            >
              <image
                width="371"
                height="590"
                xlink:href="../assets/img/wkh_entdecken_fotoauswahl-2.jpg"
              />
              <a
                xlink:href="drone-video.html"
                class="li-modal"
                @click="findModalExternal"
              >
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

              <Lightbox1 />

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
                @click="scrollToElement('videos')"
              />
            </svg>
          </figure>
          <div class="scroll-image">
            <img
              class="center-block"
              src="/img/btn-desktop-scroll-down.png"
              @click="scrollToElement('videos')"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="container pt-5">
      <div id="videos">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Lightbox1 from './Lightbox1.vue';
export default {
  components: { Lightbox1 },
  name: 'Main',
  data() {},
  methods: {
    /* find modal content from external file */
    findModalExternal() {
      $('.li-modal').on('click', function(event) {
        event.preventDefault();
        $('#modalContainer')
          .modal('show')
          .find('.modal-content')
          .load($(this).attr('xlink:href'));
      });
    },

    /* add class visited to main menu */
    classVisited() {
      $('.nav-item').on('click', function() {
        const item = $('#main-menu option:selected');
        $('#main-menu')
          .find('.nav-item')
          .removeClass('active');
        item.addClass('active');
      });
    },

    scrollToElement(classID) {
      const el = $('#' + classID);
      $('html,body').animate(
        {
          scrollTop: el.offset().top - el.height() / 2,
        },
        500,
      );
    },

    // /* stop youtube from playing after dismiss */
    stopVideoAfterDismiss() {
      $('#modalContainer').on('hidden.bs.modal', function() {
        $('#modalContainer iframe').attr(
          'src',
          $('#modalContainer iframe').attr('src'),
        );
      });
    },
  },
};
</script>

<style></style>
