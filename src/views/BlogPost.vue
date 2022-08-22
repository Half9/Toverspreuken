<template>
    <Loader v-if="isLoading" />
    <article v-if="article && !isLoading" class="article">
        <h2>{{ article.title }}</h2>
        <div class="hero-img" :style="{
            'background-image': 'url(' + imgUrl + '' + article.cover_img + ')',
        }"></div>
        <!-- <img :src="`${imgUrl}${article.cover_img}`" /> -->
        <div class="text" v-html="article.bericht"></div>
    </article>
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

        article.value = response
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

    .hero-img {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        width: 100%;
        height: 400px;
    }

    img {
        max-width: 100%;
    }

    .text {
        padding: .5rem 0;


        &:deep p {
            margin: 0 .5rem 1rem .5rem;
        }

        &:deep img {
            max-width: 100%;
            border-radius: 1rem;
            max-height: 500px;

        }
    }

}
</style>