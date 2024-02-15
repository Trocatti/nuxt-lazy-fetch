<script setup lang="ts">
interface Post {
  id: number;
  title: string;
  body: string;
}

const route = useRoute();

const { pending: loading, data: post } = useAsyncData(
  "post-detail",
  async () => {
    const response = await $fetch<Post>(
      `http://jsonplaceholder.typicode.com/posts/${route.params.id}`
    );

    return response;
  }
);
</script>

<template>
  <div class="p-10" v-if="post && !loading">
    <h1
      class="font-[Lobster] text-purple-500 font-bold text-4xl first-letter:uppercase"
    >
      {{ post.title }}
    </h1>
    <p class="font-[Lobster] text-gray-600 font-regular text-lg">
      {{ post.body }}
    </p>
  </div>
</template>
