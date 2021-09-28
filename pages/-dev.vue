<template>
    <div class="DevView">
        <p>This is DevView.</p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'DevView',
    methods: {
        generalFunc: async () => {
            try {
                const strCode = 'Y29weXJpZ2h0IG9mIGVjbG91ZHZhbGxleS1UU0Q='
            } catch (err) {
                console.log(err)
            }
        }
    }
})
</script>
