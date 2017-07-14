<template>
    <div class='ui centered card'>
        <div class='content' v-on:click="showForm(item.title)">
            <div class='header'>
                {{item.title}}
                <span class='right floated trash icon' v-on:click="deleteItem(item)">
                    <i class='trash icon'></i>
                </span>
            </div>
            <div class='meta'>
                {{item.subtitle}}
                <div class='right floated add circle icon' v-on:click="assignItem" v-show="!isAssigned">
                    <i class="add circle icon"></i>
                </div>
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
        <modal :name="item.title" transition="pop-out" :resizable="true" :height="800">
            <div class='ui segment'>
                <div class='ui form'>
                    <div class='field'>
                        <label>Title</label>
                        <input type='text' v-model="item.title"/>
                    </div>
                    <div class='field'>
                        <label>Detail</label>
                        <input type='text' v-model="item.subtitle"/>
                    </div>
                    <div class='field'>
                        <label>Link</label>
                        <input type='text'/>
                    </div>
                    <div class='field'>
                        <label>Memo</label>
                        <input type='text'/>
                    </div>
                    <div class='two fields'>
                        <div class='field'>
                            <label>Price</label>
                            <input type='text'/>
                        </div>
                        <div class='field'>
                            <label>Assign to</label>
                            <input type='text'/>
                        </div>
                    </div>
                    <div class='field'>
                        <div class="ui comments">
                            <h3 class="ui dividing header">Comments</h3>
                            <comment v-for="(comment, index) in comments" :comment="comment" :key="index"></comment>
                        </div>
                        <form class="ui reply form">
                            <div class="field">
                            <textarea></textarea>
                            </div>
                            <div class="ui blue labeled submit icon button">
                            <i class="icon edit"></i> Add Reply
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
import Comment from './Comment.vue'

export default {
  name: 'bucket-list-item',
  props: ['item'],
  components: {
      Comment
  },
  data () {
    return {
      isAssigned: false,
      comments: [
          {
            author: 'Bubu Qian',
            text: 'This is the first comment',
            time: 'yesterday',
            avatar: '../assets/boy-1.png'
          },
          {
            author: 'Jiajia Bu',
            text: 'Wow, second comment!',
            time: 'today',
            avatar: '../assets/girl-1.png'
          }
      ]
    }
  },
  methods: {
    showForm (name) {
      this.$modal.show(name)
    },
    hideForm (name) {
      this.$modal.hide(name)
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
