<template>
    <div>
        <div :key="index" v-for="(message, index) in messages">
            <b>User {{ message.user }}</b> написал(а) {{ message.message }}
        </div>
    </div>
</template>

<script>
export default {
  name: 'chat-room',
  data() {
    return {
      messages: [
        {
          user: 'Vasya',
          message: 'Hello.',
        },
        {
          user: 'Petya',
          message: 'Fuck off.',
        },
      ],
    };
  },
};
</script>
