<template>
  <div
      :class="[
      'message-item mb-4 flex',
      actor === 'customer' ? 'justify-end' : 'justify-start'
    ]"
  >
    <div
        :class="[
        'message-bubble p-4 rounded-lg text-sm max-w-[70%]',
        actor === 'customer'
          ? 'bg-green-100 text-green-900 text-right'
          : 'bg-gray-200 text-gray-900 text-left'
      ]"
    >
      <p class="font-bold mb-1">{{ name }}</p>
      <div v-html="parsedMessage" class="message-content"></div>
    </div>
  </div>
</template>

<script>
import { marked } from "marked";

export default {
  name: "MessageItem",
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
  computed: {
    actor() {
      return this.message.actor;
    },
    name() {
      return this.message.name;
    },
    parsedMessage() {
      // Parse Markdown into HTML
      return marked(this.message.message || "");
    },
  },
};
</script>

<style scoped>
.message-item {
  width: 80%;
}
.message-bubble {
  word-wrap: break-word;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.message-content {
  text-align: left;
}
.message-content img {
  max-width: 500px;
  border-radius: 4px;
}
</style>