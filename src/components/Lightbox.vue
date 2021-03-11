<template>
  <teleport name="modal-teleport">
    <modal name="modal-circle" class="modal-header">
      <h4 class="modal-title" id="myModalLabel">Drohnen-Video</h4>
      <button
        type="button"
        class="close"
        data-dismiss="modal"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>

      <div class="modal-body">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
              <div class="videoWrapper">
                <!-- youtube embedd-->
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/Hp_Eg8NMfT0"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div class="col-md-6">
              <!-- Text aligned rigt -->
              <p>
                Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und
                Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in
                Buchstabhausen an der Küste des Semantik, eines großen
                Sprachozeans. Ein kleines Bächlein namens Duden fließt durch
                ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist
                ein paradiesmatisches Land, in dem einem gebratene Satzteile in
                den Mund fliegen. Nicht einmal von der allmächtigen
                Interpunktion werden die Blindtexte beherrscht – ein geradezu
                unorthographisches Leben.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">
          Close
        </button>
      </div>
    </modal>
  </teleport>
</template>

<script>
import $ from 'jquery';
import 'bootstrap';
export default {
  name: 'Lightbox',
  methods: {},

  findModalExternal() {
    $('.li-modal').on('click', function(event) {
      event.preventDefault();
      $('#modalContainer')
        .modal('show')
        .find('.modal-content')
        .load($(this).attr('xlink:href'));
    });
  },
};
</script>

<style>
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
</style>
