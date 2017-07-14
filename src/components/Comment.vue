<template>
<div class="comment">
    <a class="avatar">
        <img :src="comment.avatar">
    </a>
    <div class="content">
        <a class="author">{{comment.author}}</a>
        <div class="metadata">
        <span class="date">{{comment.time}}</span>
        </div>
        <div class="text">
        {{comment.text}}
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'comment',
    props: ['comment']
}
</script>