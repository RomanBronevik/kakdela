<template>
    <section class="section">
        <div class="container chat-top-nav">
            <div class="username">moofik13</div>
            <div class="save-chat-button">Добавить в диалоги</div>
            <div class="right-nav-buttons">
                <div>мои диалоги</div>
                <div>выйти</div>
            </div>
        </div>
        <div class="container chat-box">
            <ChatWindow/>
        </div>
    </section>
</template>

<script>
import ChatWindow from './ChatWindow.vue';

export default {
  name: 'chat-room',
  components: {
    ChatWindow,
  },
  data() {
    return {};
  },
};
</script>

<style>
    .container.chat-top-nav{
        margin: 4% 15% 0 15%;
    }
    .container.chat-box {
        margin: 1% 15% 0 15%;
    }
    .chat-top-nav div {
        display: inline-block;
    }
    .chat-top-nav .username {
        width: 39%;
        padding: 10px;
    }
    .chat-top-nav .save-chat-button {
        width: 15%;
        font-family: 'SourceSansPro Bold', sans-serif;
        font-size: 17px;
        font-weight: 700;
        padding: 10px;
    }
    .chat-top-nav .right-nav-buttons {
        text-align: right;
        width: 39%;
        padding: 10px;
    }
    .chat-top-nav .right-nav-buttons div:first-child {
        padding-right: 20px;
    }

    .container.chat-box {
        background: white;
        border-radius: 5px;
        height: 38vw;
        box-shadow: 0 0 15px #e22222;
    }
</style>
