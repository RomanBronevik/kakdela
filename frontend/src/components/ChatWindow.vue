<template>
    <div class="chat-window">
        <nav class="chat-window-navigation">
            Navigations...
        </nav>
        <div class="chat-messages">
            <p :key="index" v-for="(message, index) in messages">
                <b>{{message.user}}:</b> {{message.message}}
            </p>
        </div>
        <div class="chat-window-textarea">
            <textarea v-model="message" placeholder="Начните писать свое сообщение"></textarea>
            <button class="button is-dark" @click="sendMessage">Отправить</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'chat-window',
  data() {
    return {
      messages: [],
      message: '',
    };
  },
  sockets: {
    connect() {
      console.log('socket connected');
    },
    chatMessage(message) {
      this.messages.push(message);
    },
  },
  methods: {
    sendMessage() {
      const messageToSend = {
        user: 'Moofik',
        message: this.message,
      };
      this.$socket.emit('chatMessage', messageToSend);
      this.message = '';
    },
  },
};
</script>

<style>
    .chat-messages {
        color: black;
    }

    .chat-window {
        display: flex;
        min-height: 100%;
        flex-direction: column;
    }

    .chat-messages {
        flex: 10;
    }

    .chat-window-navigation {
        flex: 1;
        margin: 20px;
    }

    .chat-window-textarea {
        margin: 20px;
    }
</style>
