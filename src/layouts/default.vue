<template>
  <div class="default_laout_wrapper">
    <Header />
    <h1>Super Blog</h1>
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  layout: 'other'
}
</script>
