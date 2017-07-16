<template>
  <div id="app">
    <top-menu v-if="isLoggedIn"></top-menu>
    <router-view :itemLists="[EAT,FUN,PLACE]" :items="FUN.items" v-on:login-state.native="showMenu"></router-view>
  </div>
</template>

<script>
import TopMenu from './components/TopMenu.vue'
import Overview from './components/Overview.vue'
import SelfTasks from './components/SelfTasks.vue'
import Firebase from 'firebase'

const config = {

}

const app = Firebase.initializeApp(config)
const db = app.database()
const trips

export default {
  name: 'app',
  components: {
    TopMenu,
    Overview,
    SelfTasks
  },
  data () {
    return {
      isLoggedIn: true,
      EAT: {
        name: "EAT",
        items: [
          {
            title: "Big Steak",
            subtitle: "youtube one"
          },
          {
            title: "Seafood",
            subtitle: "shrimp and fish"
          },
          {
            title: "Chinese food",
            subtitle: "ask Qianjin for help"
          }
        ]
      },
      FUN: {
        name: "FUN",
        items: [
          {
            title: "Universal studio",
            subtitle: "must go!"
          },
          {
            title: "Disney",
            subtitle: "is it expensive?"
          },
          {
            title: "Hollywood",
            subtitle: "we live right there!"
          },
          {
            title: "Beach",
            subtitle: "Santa Monica?"
          }
        ]
      },
      PLACE: {
        name: "PLACE",
        items: [
          {
            title: "Pasonina",
            subtitle: "visit qianjin?"
          },
          {
            title: "Hollywood",
            subtitle: "we live there"
          }
        ]
      }
    }
  },
  methods: {
    showMenu () {
      alert("h")
      this.isLoggedIn = true
    } 
  }
}
</script>
