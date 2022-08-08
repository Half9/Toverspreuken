<template>
    <footer>
        <div class="logo">
            <img src="../assets/logo_small.png" alt="Toverspreuken logo" style="height: 30px">
        </div>
        <div class="made">
            <p>Gemaakt door:</p><a href="https://www.jbosch.dev" target="_blank"><img src="../assets/jbosch.png"
                    alt="JBosch logo" style="height: 28px"></a>
        </div>
    </footer>
</template>

<style scoped lang="scss">
footer {
    background-color: var(--donker-gijs);
    border-radius: .5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: .5rem;
    margin-top: 2rem;
    margin-bottom: .2rem;


    .made {
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
        align-items: center;

        p {
            font-size: .8rem;
            margin-bottom: 0;
        }
    }
}

@media (max-width: 450px) {
    footer {
        grid-template-columns: 1fr;
        text-align: center;

        .logo {
            padding-top: .4rem;
        }


        .made {
            flex-direction: column;

            p {
                margin: 1rem 0 -0.5rem 0;
            }
        }
    }
}
</style>