<template>
    <div class="ui link six doubling cards">
        <trip v-on:leave-trip="leaveTrip" v-for="(item,index) in trips" :item="item" :key="index"></trip>
    </div>
</template>

<script>
import Trip from './Trip.vue'

export default {
    name: 'trips',
    components: {
        Trip
    },
    data () {
        return {
            trips: [
                {
                    name: "LA July/4",
                    date: "7/4 - 7/9",
                    memberNumber: 2
                },
                {
                    name: "Seattle Second trip",
                    date: "10/11 - 10/19",
                    memberNumber: 3
                },
                {
                    name: "Japan Thanksgiving",
                    date: "11/4 - 11/20",
                    memberNumber: 4
                }
            ]
        }
    },
    methods: {
        leaveTrip (item) {
            const index = this.trips.indexOf(item)
            this.trips.splice(index, 1)
        }
    }
}
</script>