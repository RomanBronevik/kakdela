<template>
  <ChatRoom/>
</template>

<script>
import ChatRoom from './components/ChatRoom.vue';

export default {
  name: 'App',
  components: {
    ChatRoom,
  },
  data() {
    return {
      //
    };
  },
};
</script>

<style>
  @font-face {
    font-family: 'SourceSansPro Regular';
    src: url('assets/fonts/SourceSansPro-Regular.ttf');
  }

  @font-face {
    font-family: 'SourceSansPro Bold';
    src: url('assets/fonts/SourceSansPro-Bold.ttf');
  }

  body {
    background: #f56857;
    margin: 0;
    font-family: 'SourceSansPro Regular', sans-serif;
    font-size: 18px;
    color: white;
  }

  @media screen and (min-width: 1472px) {
  .container {
    max-width: auto;
    width: auto;
  }
}
</style>
