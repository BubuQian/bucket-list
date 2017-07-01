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
                        Becoming a member is easy!
                    </div>
                </h2>
                <form class="ui large form">
                    <div class="ui stacked segment">
                        <div class="field">
                            <div class="ui left icon input">
                                <i class="user icon"></i>
                                <input type="text" name="username" placeholder="User name">
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui left icon input">
                                <i class="mail icon"></i>
                                <input type="text" name="email" placeholder="e-mail address">
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui left icon input">
                                <i class="lock icon"></i>
                                <input type="password" name="password" placeholder="Create a password">
                            </div>
                        </div>
                        <div class="ui checkbox">
                            <input type="checkbox" name="agreement">
                            <label><small>By click this, I agree to whatever rules you have</small></label>
                        </div>
                        <br></br>
                        <router-link :to="`/overview`" class="ui large fluid primary submit button">Sign up</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    name:"signup"
}
</script>