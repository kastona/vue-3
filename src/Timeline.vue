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
    <a data-test="post" class="panel-block" v-for="(post, i) in posts" :key="i">
        <div>
            <a href="">{{post.title}}</a>
            <div>{{post.created.format('Do MM')}}</div>
        </div>
    </a>
    </div>
</section>
</template>

<script lang="ts">
import { ref, computed } from '@vue/reactivity'
import moment from 'moment'
import {Period, Post} from './types'
import {todayPost, thisWeekPost, thisMonthPost} from './mocks'


export default {
    setup() {
        const periods:Period[] = ['Today', 'This Week', 'This Month']
        const selectedComponent = ref<Period>('Today')
        const posts = computed(() => [todayPost, thisWeekPost, thisMonthPost].filter(post => {
            if(selectedComponent.value == 'Today' && post.created.isAfter(moment().subtract(1, 'day'))) {
                return true
            }else if (selectedComponent.value == 'This Week' && post.created.isAfter(moment().subtract(1, 'week'))) {
                return true
            }else if (selectedComponent.value == 'This Month' && post.created.isAfter(moment().subtract(1, 'month'))) {
                return true
            }

            return false
        }))
        const updatePeriod = (period: Period) => {
            selectedComponent.value = period
        }
        return {
            periods,
            selectedComponent,
            updatePeriod,
            posts
        }
    },
}
</script>
