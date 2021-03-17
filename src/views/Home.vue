<template>
  <div class="home">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';

export default {
  name: 'Home',
  data() {},
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>
