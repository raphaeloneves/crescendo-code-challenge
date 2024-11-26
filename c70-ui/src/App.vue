<template>
  <div class="app-container p-6">
    <h1 class="text-2xl font-bold text-center mb-6">Conversation Viewer</h1>
    <div v-if="hasError" class="p-4 text-red-500">
      Something went wrong. Please try again later.
    </div>
    <div v-else>
      <MessageList :messages="conversation" @new-message="addMessage"/>
    </div>
  </div>
</template>

<script>
import MessageList from "./components/MessageList.vue";

export default {
  name: "App",
  components: { MessageList },
  data() {
    return {
      conversation: [
        {
          id: 30098877334555,
          type: "Comment",
          actor: "customer",
          name: "John Smith",
          message: "Hi! My WIFI router does not work. How to reset it?\nThanks,\n\nSlava.",
          public: true,
          ts: 1729022147,
          at: 0
        },
        {
          id: 30098926488091,
          type: "Comment",
          actor: "agent",
          name: "Melody Sunshine",
          message: "Hello! To reset the router, please press and hold the reset button.",
          public: true,
          ts: 1729022205,
          at: 58
        },
        {
          id: 30098997267227,
          type: "Comment",
          actor: "customer",
          name: "John Smith",
          message: "Thank you! That helped!\nSlava\n\n![__tpx__](https://tracy.srv.wisestamp.com/px/wsid/VGzo4eqVVgrD.png)",
          public: true,
          ts: 1729022274,
          at: 127
        },
        {
          id: 30098993642395,
          type: "Comment",
          actor: "agent",
          name: "Melody Sunshine",
          message: "You are very welcome!",
          public: true,
          ts: 1729022287,
          at: 140
        },
        {
          id: 30104503479195,
          type: "Comment",
          actor: "customer",
          name: "John Smith",
          message: "What do the lights on the router mean?\n![image.png](https://d3v-enegelai.zendesk.com/attachments/token/ZzrTqXwK3NHAhs2PRlvjHD9Kw/?name=image.png)",
          public: true,
          ts: 1729031738,
          at: 9591
        },
        {
          id: 30104532061723,
          type: "Comment",
          actor: "agent",
          name: "Melody Sunshine",
          message: "Here is the explanation of what various lights mean:\n![Modem and Router Lights 101: Interpretation & Troubleshooting - BroadbandSearch](https://cdn.broadbandsearch.net/2023/10/1697101813771-g2_modem_lights.png)",
          public: true,
          ts: 1729031788,
          at: 9641
        },
        {
          id: 30104571616667,
          type: "Comment",
          actor: "customer",
          name: "John Smith",
          message: "Got it, thanks a lot!",
          public: true,
          ts: 1729031885,
          at: 9738
        }
      ],
      hasError: false
    };
  },
  methods: {
    addMessage(newMessage) {
      this.conversation.push(newMessage);
      console.log("Updated Conversation:", this.conversation);
    },
  },
};
</script>

<style scoped>
.app-container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>