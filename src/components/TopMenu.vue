<template>
  <div class="ui pointing main menu">
    <router-link :to="`/overview`" :class="overviewClassObject" v-on:click.native="switchActive('overview')">
      Overview
    </router-link>
    <router-link :to="`/trips`" :class="tripsClassObject" v-on:click.native="switchActive('trips')">
      Trips
    </router-link>
    <router-link :to="`/tasks`" :class="tasksClassObject" v-on:click.native="switchActive('tasks')">
      Tasks
    </router-link>
    <div class="right menu">
      <a class="ui item">
        <img class="ui avatar image" src="../assets/man-4.png">
        {{me.name}}
      </a>
    </div>
  </div>
</template>

<script>
export default {
    name: 'top-menu',
    data () {
      return {
        me: {
          name: "Bro Q",
          image: "../assets/man-4.png"
        },
        activePage: "overview"
      }
    },
    computed: {
      overviewClassObject: function() {
        return {
          active: this.activePage === "overview",
          item:true, 
        }
      },
      tripsClassObject: function() {
        return {
          active: this.activePage === "trips",
          item:true,
        }
      },
      tasksClassObject: function() {
        return {
          active: this.activePage === "tasks",
          item:true,
        }
      }
    },
    methods: {
      switchActive (page) {
        this.activePage = page;
      }
    }

}
</script>