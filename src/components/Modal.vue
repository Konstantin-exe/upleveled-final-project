<template>
  <transition name="modal">
    <div v-show="value" class="modal-mask">
      <div class="modal-wrapper" @click.self="close">
        <div class="modal-container">
          <div class="modal-header">
            <h4 class="modal-title">Drohnen-Video</h4>
            <button type="button" @click="close">
              Close
            </button>
          </div>

          <div class="modal-body ">
            <div class="row container">
              <div class=" col-md embed-responsive embed-responsive-16by9">
                <!-- youtube embedd-->
                <iframe
                  v-if="this.value"
                  id="modal-video"
                  class="embed - responsive - item"
                  src="https://www.youtube.com/embed/Hp_Eg8NMfT0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                ></iframe>
              </div>
              <div class="col-sm">
                <!-- Text aligned rigt -->
                <h4>Video Titel</h4>
                <p>
                  Weit hinten, hinter den Wortbergen, fern der Länder Vokalien
                  und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie
                  in Buchstabhausen an der Küste des Semantik, eines großen
                  Sprachozeans. Ein kleines Bächlein namens Duden fließt durch
                  ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist
                  ein paradiesmatisches Land, in dem einem gebratene Satzteile
                  in den Mund fliegen. Nicht einmal von der allmächtigen
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    value: {
      required: true,
    },
  },
  methods: {
    close() {
      this.$emit('input', !this.value);
    },
  },
};
</script>

<style>
/* vieo container 16:9 responsive */
.videoWrapper {
  overflow: scroll;
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  width: 100%;
}

.videoWrapper iframe {
  position: absolute;
  top: 100;
  left: 0;
  width: 100%;
  height: 100%;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 85%;
  margin: 40px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-body {
  margin: 20px 0;
  height: 50vh;
  overflow-y: scroll;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
