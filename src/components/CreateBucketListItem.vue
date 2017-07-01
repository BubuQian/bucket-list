<template>
    <div class='ui basic content aligned segment'>
        <div class='ui centered card'>
            <button class='ui basic button icon' v-on:click="openForm" v-show="!isCreating">
                <i class='plus icon'></i>
            </button>
        </div>
        <div class='ui centered card' v-show="isCreating">
            <div class='content'>
                <div class='ui form'>
                    <div class='field'>
                        <label>Title</label>
                        <input v-model="titleText" type='text' ref='title' defaultValue=""/>
                    </div>
                    <div class='field'>
                        <label>Subtitle</label>
                        <input v-model="subtitleText" type='text' ref='subtitle' defaultValue=""/>
                    </div>                    
                    <div class='ui two button attached buttons'>
                        <button class='ui primary button' v-on:click="sendForm">
                            Create
                        </button>
                        <button class='ui button' v-on:click="closeForm">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'create-bucket-list-item',
    data () {
        return {
            titleText: '',
            subtitleText: '',
            isCreating: false
        }
    },
    methods: {
        openForm () {
        this.isCreating = true
        },
        closeForm () {
        this.isCreating = false
        this.titleText = ''
        this.subtitleText = ''
        this.isCreating = false
        },
        sendForm () {
            if (this.titleText.length > 0 && this.subtitleText.length > 0) {
            const title = this.titleText
            const subtitle = this.subtitleText
            this.$emit('create-item', {
                title,
                subtitle,
                done: false
            })
            }
            this.titleText = ''
            this.subtitleText = ''
            this.isCreating = false
        }
    }
}
</script>
