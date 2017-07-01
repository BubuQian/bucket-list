<template>
    <div class="ui center aligned grid">
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row">
            <div class="three wide column form-holder">
                <h2 class="ui blue header">
                    <div class="content">
                        Log-in into your account
                    </div>
                </h2>
                <form class="ui large form">
                    <div class="ui stacked segment">
                        <div class="field">
                            <div class="ui left icon input">
                                <i class="user icon"></i>
                                <input type="text" name="username" placeholder="e-mail address">
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui left icon input">
                                <i class="lock icon"></i>
                                <input type="password" name="password" placeholder="Password">
                            </div>
                        </div>
                        <router-link :to="`/overview`" class="ui large fluid primary submit button" v-on:click.native="login_user">Login</router-link>
                    </div>
                </form>
                <div class="ui message">
                    New to us?<router-link :to="`/signup`"> Sign Up</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    methods: {
        login_user () {
            this.$router.app.$emit('login-state')
        }
    }
}
</script>