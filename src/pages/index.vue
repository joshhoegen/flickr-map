<template>
  <div class="index_page_wrapper">
    <h1>Index Page</h1>
    <div class="grid">
      <ul>
        <li
          v-for="photo in photos"
          :key="photo.id"
          class="item"
        >
          <!-- TODO: @click vs v-click -->
          <!-- TODO: Better programmatic approach? -->
          <a
            :photo-id="photo.id"
            @click="processClick(photo.id, $event)"
          >
            {{ photo.title }}
          </a>
        </li>
      </ul>
      <MapC
        ref="mapComponent"
        :zoom="4"
        :center="[50.608924, -38.444788]"
        :photos="photos"
      />
    </div>
  </div>
</template>

<script>
// TODO: Victor's thoughts on axios plugin vs axios npm
import axios from 'axios'
import MapC from '../components/map.vue'

export default {
  title: 'Super Aggr',
  // TODO: Victor's thoughts on programatic approach to stay DRY on included components
  components: {
    MapC
  },
  // TODO: separate to include, then use GetFeed (see below)
  async asyncData() {
    const { data } = await axios.get(
      'https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=3e5eed3b8ac50831345901fd7c6338be&user_id=75438274@N03&format=json&per_page=10&page=1&extras=date_upload,last_update,geo,url_m&nojsoncallback=1'
    )
    // console.log(data.photos);

    return { photos: data.photos.photo }
  },
  methods: {
    processClick: function(photoId, data) {
      // TODO: Approach for triggering child component's methods?
      this.$refs.mapComponent.markerClick(photoId)
    }
  }
  // async asyncData() {
  //   const feed = new GetFeed(
  //     "flickr",
  //     "https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=3e5eed3b8ac50831345901fd7c6338be&user_id=75438274@N03&format=json&per_page=10&page=1&extras=date_upload,last_update&nojsoncallback=1"
  //   );
  //
  //   const { data } = await feed.getFeed();
  //   console.log("data1");
  //
  //   console.log(data);
  //   return { photos: data };
  // }
}
</script>
