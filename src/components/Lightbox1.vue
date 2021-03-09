<template>
  <div>
    <a xlink:href="#" class="li-modal" @click.prevent="show">
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
    <modal class="modal-header">
      <h4 class="modal-title" id="myModalLabel">Konzerthaus Eintritt</h4>
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
              <p>
                Eine wunderbare Heiterkeit hat meine ganze Seele eingenommen,
                gleich den süßen Frühlingsmorgen, die ich mit ganzem Herzen
                genieße. Ich bin allein und freue mich meines Lebens in dieser
                Gegend, die für solche Seelen geschaffen ist wie die meine. Ich
                bin so glücklich, mein Bester, so ganz in dem Gefühle von
                ruhigem Dasein versunken, daß meine Kunst darunter leidet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-default close"
          data-dismiss="modal"
        >
          Close
        </button>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  name: 'Lightbox1',
  methods: {
    show() {
      this.$modal.show('modal-header');
    },
    hide() {
      this.$modal.hide('modal-header');
    },
  },
  mount() {
    this.show();
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
</style>
