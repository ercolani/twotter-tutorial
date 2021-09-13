<template>
  <div class="user-profile">
    <div class="user-profile__sidebar">
      <div class="user-profile__user-panel">
        <h1 class="user-profile__username">@{{ state.user.username}}</h1>
        <div class="user-profile__admin-badge" v-if="state.user.isAdmin">
          Admin
        </div>
        <div class="user-profile__follower-count">
          <strong>Followers: </strong> {{ state.followers}}
        </div>
      </div>
      <CreateTwootPanel @add-twoot="addTwoot"/>
    </div>
    <div class="user-profile__twoots-wrapper">
      <TwootItem 
        v-for="twoot in state.user.twoots" 
        :key="twoot.id" 
        :username="state.user.username"  
        :twoot="twoot" 
      />
    </div>
  </div>
</template>

<script>
import {reactive} from 'vue';
import TwootItem from './Twootitem.vue'
import CreateTwootPanel from "./CreateTwootPanel.vue";

export default {
  name: 'UserProfile',
  components: { CreateTwootPanel, TwootItem },
  setup(){
      const state = reactive({
        followers: 0,
        user:{
          id: 1,
          username: '_MitchellRomney',
          firstName: 'Mitchell',
          lastName: 'Romney',
          email: 'mitchellromney@theearthissquare.com',
          isAdmin: true,
          twoots:[
              {id: 1, content: 'Twotter is Amazin!'},
              {id: 2, content: "Dont forget to subscribe!"},
              {id: 3, content: "Dont forget to subscribe!"}
            ]
          }
        })

    function addTwoot(twoot){
      console.log("hello");
        state.user.twoots.unshift({id: state.user.twoots.length + 1, content: twoot});
    }

    return{
      state,
      addTwoot
    }
  }
};

</script>

<style lang="scss" scoped>

.user-profile{
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 50px;
  padding: 50px 5%;

  .user-profile__user-panel{
    text-align: left;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #DFE3E8;

    h1{
      margin: 0;
    }

    .user-profile__admin-badge{
      background: goldenrod;
      color: white;
      margin-top: 5px;
      border-radius: 5px;
      margin-right:auto;
      padding: 0 10px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .user-profile__follower-count{
      text-align: left;
    }

    .user-profile_twoots-wrapper{
      display: grid;
      grid-gap: 10px;
      margin-bottom: auto;
    }
  }
}

</style>
