<template>
    <div>
        <b></b>
        <b></b>
        <h4 class="ui horizontal divider header">
            Teammates
        </h4>
        <div class="ui relaxed list">
            <div class="item" v-for="(teammate, index) in teammates">
                <img class="ui avatar image" src="../assets/boy-1.png">
                <div class="content">
                    <a class="header">{{teammate.name}}</a>
                    <div class="description">{{teammate.description}}</div>
                </div>
            </div>
            <div class='ui fluid basic icon button' v-on:click="leaveTrip(item)">
                <i class='add user icon'></i>
            </div>
        </div>
        <b></b>
    </div>
</template>

<script>
export default {
    name:'teammates',
    data () {
        return {
            teammates: [
                {
                    name: "Bubu Qian",
                    image: "../assets/boy-1.png",
                    description: "Hiker, Hacker"
                },
                {
                    name: "Jiajia Bu",
                    image: "../assets/girl.png",
                    description: "Cutie Queen"
                },
                {
                    name: "Maggie Bi",
                    image: "../assets/gir-l.png",
                    description: "I love short skinny guy~"
                },
                {
                    name: "Xiao Ge",
                    image: "../assets/man-2.png",
                    description: "Hi there MATE!"
                }
            ]
        }
    }
}
</script>