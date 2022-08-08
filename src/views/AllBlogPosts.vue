<template>
    <Loader v-if="isLoading" />
    <div v-if="articles && !isLoading" class="articles">
        <div class="all-articles">
            <div v-for="post in articles" :key="post.id" class="post">
                <img :src="`${imgUrl}${post.cover_img}`">
                <div class="content">

                    <h2>{{ post.title }}</h2>
                    <div v-html="post.bericht.slice(0, 200)"></div>
                    <router-link :to="'/blog/' + post.id"><button>Lees meer</button></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { directus } from "@/directus";

import Loader from "@/components/LoadSpinner.vue"

const articles = ref(null)
const isLoading = ref(true)
const imgUrl = "https://zqsxqnlr.directus.app/assets/"

async function fetchData() {
    const response = await directus.items("toverblog").readByQuery({
        sort: "-date_created",
        filter: {
            status: {
                "_eq": "published"
            }
        }
    });
    articles.value = response.data;
    isLoading.value = false
    console.log(articles.value)
};

fetchData();
</script>

<style scoped lang="scss">
button {
    margin-top: .5rem;
}

.all-articles {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;


    .post {
        border-radius: .5rem;
        background-color: var(--licht-gijs);
        border: 1px solid var(--donker-gijs);
        box-shadow: 0 0 50px 0px rgba(0, 0, 0, 0.8);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        &:hover {
            outline: 2px solid var(--paars);
            box-shadow: 0 0 15px 0px rgba(140, 52, 162, 1);
        }

        .content {
            padding: .5rem;
        }

        img {
            border-radius: .5rem .5rem 0 0;
            height: 150px;
            width: 100%;
        }

        button {
            margin-bottom: auto;
        }
    }
}

@media (max-width: 600px) {
    .all-articles {
        grid-template-columns: 1fr 1fr;
        gap: .5rem;

        h2 {
            font-size: 1.2rem;
            font-weight: 800;
        }

        img {
            border-radius: .5rem;
        }
    }
}

.articles img {
    max-width: 100%;
}

.content ::v-deep img {
    display: none;
}
</style>