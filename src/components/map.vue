<!-- TODO: Why aren't imports on top? -->
<template>
  <div id="map-wrap" style="height: 100vh">
    <!-- TODO: Using nuxt-leaflet (see package + nuxt.config). It makes usage magic. Not the biggest fan this way -->
    <!-- TODO: See plugins/nuxt-leaflet for what's going on under hood -->
    <no-ssr>
      <l-map :zoom="zoom" :center="center">
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        <l-marker
          v-for="photo in photos"
          :ref="`marker_${photo.id}`"
          :lat-lng="[photo.latitude, photo.longitude]"
          @click="testMarkerPopup"
        >
          <img src="photo.url_m" />
          <l-popup>
            {{ photo.title }}<img :src="photo.url_m" />{{
              moment(photo.dateupload)
            }}
          </l-popup>
        </l-marker>
      </l-map>
    </no-ssr>
  </div>
</template>

<script>
import moment from "moment";
import "./map.css";
// TODO: Not digging the "methods" design pattern. Should we be breaking out our methods to new file and import?
export default {
  props: {
    center: {
      type: Array,
      required: true
    },
    photos: {
      type: Array,
      required: true
    },
    zoom: {
      type: Number
    }
  },
  data() {
    // TODO: See when to use data vs props
  },
  methods: {
    markerClick(id) {
      this.$nextTick(() => {
        const mId = `marker_${id}`;
        // TODO: Anyway to avoid [0]?

        this.$refs[mId][0].mapObject.openPopup();
      });
    },
    testMarkerPopup() {
      console.log("testMarkerPopup");
    }
  }
};
</script>

<style>
map {
  height: 100%;
  width: 100%;
  min-height: 20px;
  min-width: 20px;
  margin: 0;
  background: #000;
}
</style>
