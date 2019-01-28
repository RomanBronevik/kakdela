<template>
  <div>
    <div>
      <span class="font-weight-light">
        Анонимная социальная сеть для криптопартизан. Версия 0.0.1
      </span>
    </div>
    <div>
      <ChatRoom/>
    </div>
  </div>
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
