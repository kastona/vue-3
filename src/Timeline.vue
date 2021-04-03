<template>
<section class="section">
    <div class="container">
         <nav class="is-primary panel">
        <p class="panel-tabs">
            <a 
                v-for="period in periods"
                :key="period"
                data-test="period"
                :class="selectedComponent == period? 'is-active': ''"
                @click="updatePeriod(period)"
            >{{period}}</a>
        </p>
    </nav>
    </div>
</section>
</template>

<script lang="ts">
import { ref } from '@vue/reactivity'
import {Period} from './types'

export default {
    setup() {
        const periods:Period[] = ['Today', 'This Week', 'This Month']
        const selectedComponent = ref<Period>('Today')

        const updatePeriod = (period: Period) => {
            selectedComponent.value = period
        }
        return {
            periods,
            selectedComponent,
            updatePeriod
        }
    },
}
</script>
