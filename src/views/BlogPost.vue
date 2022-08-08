<template>
    <Loader v-if="isLoading" />
    <div v-if="article && !isLoading" class="article">
        <h2>{{ article.title }}</h2>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { directus } from "@/directus";

import Loader from "@/components/LoadSpinner.vue"

const router = useRouter();
const route = useRoute();
const article = ref(null);
const isLoading = ref(true)

fetchData();
async function fetchData() {
    const { id } = route.params;
    let articleResponse;
    try {
        articleResponse = await directus.items("toverblog").readOne(id);

        article.value = articleResponse;
        isLoading.value = false
        console.log(article.value)

    } catch (err) {
        router.replace({ name: "NotFound", params: { catchAll: route.path } });
    }
}
</script>