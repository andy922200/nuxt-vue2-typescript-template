<template>
    <footer class="footer has-background-success">
        <!-- Main container -->
        <nav class="is-flex is-justify-content-space-between is-align-content-flex-start">
            <!-- Left side -->
            <div class="">
                <div class="is-flex is-flex-direction-column is-justify-content-flex-start">
                    <p class="subtitle ml-3">
                        追蹤我們
                    </p>
                    <div class="is-flex is-justify-content-flex-start">
                        <b-icon pack="fab" icon="facebook" type="is-primary" size="is-large" rounded />
                        <b-icon pack="fab" icon="facebook" type="is-primary" size="is-large" rounded />
                        <b-icon pack="fab" icon="facebook" type="is-primary" size="is-large" rounded />
                    </div>
                </div>
            </div>

            <!-- Right side -->
            <div class="">
                <p class="">
                    ccClub 2021 © All Rights Reserved.
                </p>
            </div>
        </nav>
    </footer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'Footer'
})
</script>
