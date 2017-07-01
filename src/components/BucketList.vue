<template>
    <div class="column">
        <div class="ui container">
            <h2 class="ui centered header">{{name}}</h2>
            <bucket-list-item v-on:delete-item="deleteItem" v-for="(item, index) in items" :item="item" :key="index"></bucket-list-item>
            <create-bucket-list-item v-on:create-item="addItem"></create-bucket-list-item>
        </div>
    </div>
</template>

<script>
import BucketListItem from './BucketListItem.vue'
import CreateBucketListItem from './CreateBucketListItem.vue'

export default {
    name: 'bucket-list',
    props: ['name', 'items'],
    components: {
        BucketListItem,
        CreateBucketListItem
    },
    methods: {
        addItem (item) {
            this.items.push(item)
        },
        deleteItem (item) {
            const index = this.items.indexOf(item)
            this.items.splice(index, 1)
        }
    }
}
</script>