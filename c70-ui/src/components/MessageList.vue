<template>
  <div class="message-list-container p-4 space-y-4">
    <!-- Message Items -->
    <div class="message-list">
      <MessageItem
          v-for="message in messages"
          :key="message.id"
          :message="message"
      />
    </div>

    <!-- Message Form -->
    <form @submit.prevent="sendMessage" class="message-form flex items-center space-x-2 mt-4">
      <textarea
          v-model="newMessage"
          placeholder="Type your message here..."
          class="flex-grow p-2 border rounded-lg resize-none"
          rows="2"
      ></textarea>
      <button
          type="submit"
          class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Send
      </button>
    </form>
  </div>
</template>

<script>
import MessageItem from "./MessageItem.vue";

export default {
  name: "MessageList",
  components: {MessageItem},
  props: {
    messages: {
      type: Array,
      required: true,
    },
  },
  methods: {
    sendMessage() {
      if (!this.newMessage.trim()) {
        alert("Message cannot be empty!");
        return;
      }

      const newMessageObj = {
        id: Date.now(),
        type: "Comment",
        actor: "customer",
        name: "John Smith",
        message: this.newMessage,
        public: true,
        ts: Math.floor(Date.now() / 1000),
        at: Math.floor(Date.now() / 1000) - this.getFirstMessageTimestamp(),
      };

      console.log("New Message Object:", newMessageObj);
      this.$emit("new-message", newMessageObj);
      this.newMessage = "";
    },
    getFirstMessageTimestamp() {
      return this.messages.length > 0 ? this.messages[0].ts : Math.floor(Date.now() / 1000);
    },
  },
};
</script>

<style scoped>
.message-list-container {
  max-width: 1200px;
  margin: 0 auto;
}

.message-form {
  border-top: 1px solid #ddd;
  padding-top: 1rem;
}
</style>