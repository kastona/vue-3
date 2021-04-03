<template>
    <div v-for="friend in friends" :key="friend" v-text="friend"></div>
</template>

<script lang="ts">
export default {
    setup() {
        let friends:String[] = ['Janet', 'Jennifer','Esther', 'Blessing']

        return {
            friends
        }
    },
}
</script>