<script setup lang='ts'>
interface Post {
    id: number;
    title: string;
    body: string;
}

const loading = ref<boolean>(true)
const posts = ref<Post[]>([])

async function fetchPost () {
    const response = await $fetch<Post[]>(
        `http://jsonplaceholder.typicode.com/posts`
    );

    posts.value = response
    loading.value = false
}


onMounted(() => {
    fetchPost();
})

</script>

<template>
    <div class="p-10" v-if="posts.length && !loading">
        <NuxtLink class="block bg-gray-100 rounded mb-5 p-5"
            v-for="post in posts"
            :key="post.title"
            :to="`/post/${post.id}`">
            <h1 class="font-[Lobster] text-purple-500 font-bold text-4xl first-letter:uppercase">
                {{ post.title }}
            </h1>
            <p class="font-[Lobster] text-gray-600 font-regular text-lg">
                {{ post.body }}
            </p>
        </NuxtLink>
    </div>
</template>
