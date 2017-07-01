<template>
    <div class='ui centered card'>
        <div class='content'>
            <div class='header'>
                {{item.title}}
                <span class='right floated edit icon' v-on:click="showForm">
                    <i class='edit icon'></i>
                </span>
                <span class='right floated trash icon' v-on:click="deleteItem(item)">
                    <i class='trash icon'></i>
                </span>
            </div>
            <div class='meta'>
                {{item.subtitle}}
                <span class='right floated add circle icon' v-on:click="assignItem" v-show="!isAssigned">
                    <i class="add circle icon"></i>
                </span>
                <img class="ui avatar image right floated" src="../assets/boy-1.png" v-show="isAssigned">
            </div>
        </div>
        <div class="content">
            <div class='extra content'>
                <span class="right floated">
                <i class="heart outline like icon"></i>
                17 likes
                </span>
                <i class="comment icon"></i>
                3 comments          
            </div>
        </div>
        <div class='content' v-show="isEditing">
            <div class='ui form'>
                <div class='field'>
                    <label>Title</label>
                    <input type='text' v-model="item.title"/>
                </div>
                <div class='field'>
                    <label>Subtitle</label>
                    <input type='text' v-model="item.subtitle"/>
                </div>
                <div class='ui buttom top attached buttons'>
                    <button class='ui primary button' v-on:click="hideForm">
                        Close X
                    </button>
                </div>
            </div>
        </div>
        <div 
    </div>
</template>

<script>
export default {
  name: 'bucket-list-item',
  props: ['item'],
  data () {
    return {
      isEditing: false,
      isAssigned: false
    }
  },
  methods: {
    showForm () {
      this.isEditing = true
    },
    hideForm () {
      this.isEditing = false
    },
    deleteItem (item) {
      this.$emit('delete-item', item)
    },
    assignItem () {
      this.isAssigned = true
    }
  }
}
</script>
