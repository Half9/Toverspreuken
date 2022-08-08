<template>
    <HeroSection v-if="!isLoading" />
    <Loader v-if="isLoading" />
    <div v-if="articles && !isLoading" class="articles">

        <div class="first-article">
            <img :src="`${imgUrl}${articles[0].cover_img}`" />
            <div class="content">
                <h2>{{ articles[0].title }}</h2>
                <div class="no-img" v-html="articles[0].bericht.slice(0, 400)"></div>
                <router-link :to="'/blog/' + articles[0].id"><button>Lees meer</button></router-link>
            </div>
        </div>
        <div class=" rest-articles">
            <div v-for="post in articles.slice(1)" :key="post.id" class="post">
                <img :src="`${imgUrl}${post.cover_img}`">
                <div class="content">

                    <h2>{{ post.title }}</h2>
                    <div v-html="post.bericht.slice(0, 200)"></div>
                    <router-link :to="'/blog/' + post.id"><button>Lees meer</button></router-link>
                </div>
            </div>
        </div>
        <div class="all-articles">
            <router-link :to="{ name: 'Blog' }">Klik hier voor alle blog posts</router-link>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { directus } from "@/directus";

import HeroSection from "@/components/HeroSection.vue"
import Loader from "@/components/LoadSpinner.vue"

const articles = ref(null)
const isLoading = ref(true)
const imgUrl = "https://zqsxqnlr.directus.app/assets/"

async function fetchData() {
    const response = await directus.items("toverblog").readByQuery({
        limit: 7,
        sort: "-date_created",
        filter: {
            status: {
                "_eq": "published"
            }
        }
    });
    articles.value = response.data;
    isLoading.value = false
};

fetchData();

</script>

<style scoped lang="scss">
button {
    margin-top: .5rem;
}

.first-article {
    margin: 2rem 0;
    display: flex;
    gap: 1rem;
    border-radius: .5rem;
    background-color: var(--licht-gijs);
    border: 1px solid var(--donker-gijs);
    box-shadow: 0 0 50px 0px rgba(0, 0, 0, 0.8);

    &:hover {
        outline: 2px solid var(--paars);
        box-shadow: 0 0 30px 0px rgba(140, 52, 162, 1);
    }

    img {
        max-height: 20em;
        max-width: 22rem;
        border-radius: .5rem 0 0 .5rem;
    }

    .content {
        padding: .5rem;

        h2 {
            font-size: 1.5rem;
            font-weight: 800;
            margin-bottom: .5rem;
        }

        p {
            margin-bottom: 1rem;
        }

        img {
            display: none;
        }
    }
}

@media (max-width: 600px) {
    .first-article {
        flex-direction: column;

        img {
            border-radius: .5rem;
            max-height: 15em;
            max-width: 100%;
        }
    }
}

.rest-articles {
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
    .rest-articles {
        grid-template-columns: 1fr 1fr;
        gap: 0.5rem;

        h2 {
            font-size: 1.2rem;
            font-weight: 800;
        }

        img {
            border-radius: .5rem;
        }
    }
}

.all-articles {
    margin-top: 2rem;
    text-align: center;

    a {
        color: var(--paars);
        font-size: 1.3rem;
        text-decoration: none;
        font-weight: 700;

        &:hover {
            color: var(--donker-paars);
        }

    }
}



.content ::v-deep img {
    display: none;
}
</style>