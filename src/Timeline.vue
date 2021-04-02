<template>
<section class="section">
    <div class="container">
         <nav class="is-primary panel">
        <p class="panel-tabs">
            <a v-for="period in periods" :key="period">Today</a>
        </p>
    </nav>
    </div>
</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        const periods = ['Today', 'This Week', 'This Month']
        return {
            periods
        }
    },
})
</script>
