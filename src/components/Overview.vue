<template>
  <div class="ui internally celled grid">
    <div class="fourteen wide column">
      <div class="ui grid">
        <div class="three column row">
          <bucket-list v-for="(itemList, index) in itemLists" :name="itemList.name" :items="itemList.items" :key="index"></bucket-list>
        </div>
      </div>
    </div>
    <div class="two wide column">
      <div class="row">
        <teammates></teammates>
      </div>
      <div class="row">
        <activity-feed></activity-feed>
      </div>
    </div>
  </div>
</template>

<script>
import BucketList from './BucketList.vue'
import Teammates from './Teammates.vue'
import ActivityFeed from './ActivityFeed.vue'

export default {
  name: 'overview',
  components: {
      BucketList,
      Teammates,
      ActivityFeed
  },
  props: ['item-lists']
}
</script>