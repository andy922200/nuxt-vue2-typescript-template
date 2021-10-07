<template>
    <div>
        <b-navbar spaced>
            <template #brand>
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    <img
                        src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                        alt="Lightweight UI components for Vue.js based on Bulma"
                    >
                </b-navbar-item>
            </template>

            <template #end>
                <b-navbar-item tag="router-link" :to="{ name: 'index' }">
                    歷屆專案
                </b-navbar-item>
                <b-navbar-dropdown label="進行中課程">
                    <b-navbar-item href="#">
                        About
                    </b-navbar-item>
                    <b-navbar-item href="#">
                        Contact
                    </b-navbar-item>
                </b-navbar-dropdown>
                <b-navbar-item tag="router-link" :to="{ name: 'inspire' }">
                    會員中心
                </b-navbar-item>
            </template>
        </b-navbar>

        <main>
            <Nuxt />
        </main>
    </div>
</template>

<script>
export default {
    data () {
        return {
        }
    }
}
</script>
