<template>
    <nav class="is-primary panel">
        <p class="panel-tabs">
            <a :class="currentItem == child? 'is-active': ''" data-test="navItem" href="#" v-for="child in children" :key="child">{{child}}</a>
        </p>
    </nav>
</template>

<script lang="ts">
import {Friend} from './types'
import {ref} from '@vue/reactivity'
export default {
    setup() {
        let children: Friend[] = ['Steve', 'James', 'Andrew']
        let currentItem = ref<Friend>('Steve')
        return {
            children,
            currentItem
        }
    }
}
</script>