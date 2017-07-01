<template>
    <div class="ui grid">
        <bucket-list name="Tasks" :items="items"></bucket-list>
    </div>
</template>

<script>
import BucketList from './BucketList.vue'

export default {
    name: 'self-tasks',
    components: {
        BucketList
    },
    props: ['items'] 
}
</script>