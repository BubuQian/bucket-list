<template>
    <dev class="ui card">
        <router-link :to="`/overview`" class="image">
            <img src="../assets/la-1.png">
        </router-link>
        <div class="content">
            <a class="header">
                {{item.name}}
            </a>
            <span class='right floated trash icon' v-on:click="leaveTrip(item)">
                <i class='trash icon'></i>
            </span>
            <div class="meta">
            <span class="date">{{item.date}}</span>
            </div>
        </div>
        <div class="extra content">
            <a>
            <i class="user icon"></i>
            {{item.memberNumber}} members in this trip
            </a>
        </div>
    </dev>
</template>

<script>
export default {
  name: 'trip',
  props: ['item'],
  methods: {
    leaveTrip (item) {
      this.$emit('leave-trip', item)
    }
  }
}
</script>