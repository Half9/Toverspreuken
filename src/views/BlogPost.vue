<template>
    <Loader v-if="isLoading" />
    <div v-if="article && !isLoading" class="article">
        <h2>{{ article.title }}</h2>
        <img :src="`${imgUrl}${article.cover_img}`" />
        <div class="text" v-html="article.bericht"></div>
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
const imgUrl = "https://zqsxqnlr.directus.app/assets/"

fetchData();
async function fetchData() {
    const { id } = route.params;
    try {
        let response = await directus.items("toverblog").readOne(id);

        article.value = response;
        isLoading.value = false

    } catch (err) {
        router.replace({ name: "NotFound", params: { catchAll: route.path } });
        console.log(err)
    }
}
</script>
<style scoped lang="scss">
.article {
    background-color: var(--licht-gijs);
    border: 1px solid var(--donker-gijs);
    border-radius: .5rem;

    h2 {
        margin: 1rem .5rem;
        font-size: 2rem;
    }

    img {
        max-width: 100%;
    }

    .text {
        padding: .5rem 0;


        &::v-deep p {
            margin: 0 .5rem 1rem .5rem;
        }

        &::v-deep img {
            max-width: 100%;
            border-radius: 1rem;

        }
    }

}
</style>