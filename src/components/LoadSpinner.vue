<template>
    <div class="loader"></div>
    <p>Laden</p>
</template>

<style scoped>
.loader {
    border: 12px solid var(--donker-gijs);
    border-radius: 50%;
    border-top: 12px solid var(--paars);
    width: 75px;
    height: 75px;
    -webkit-animation: spin 2s linear infinite;
    /* Safari */
    animation: spin 2s linear infinite;
    margin: 2rem auto;
}

p {
    text-align: center;
}

/* Safari */
@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
