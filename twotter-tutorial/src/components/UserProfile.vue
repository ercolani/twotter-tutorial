<template>
  <div class="user-profile">
    <div class="user-profile__user-panel">
      <h1 class="user-profile__username">@{{ user.username}}</h1>
      <div class="user-profile__admin-badge" v-if="user.isAdmin">
        Admin
      </div>
      <div class="user-profile__follower-count">
        <strong>Followers: </strong> {{ followers}}
      </div>
      <form class="user-profile__create-twoot" @submit.prevent="createNewTwoot">
        <label for="newTwoot"><strong>New Twoot</strong></label>
        <textarea id="newTwoot" rows="4" v-model="newTwootContent"/>

        <div class="user-profile_create-twoot-type">
          <label for="newTwootType"><strong>Type:</strong></label>
          <select for="newTwootType" v-model="selectedTwootType">
            <option :value="option.value" v-for="(option, index) in twootTypes" :key="index">
              {{ option.name }}
            </option>
          </select>
        </div>

        <button>
          Twoot!
        </button>
      </form>
    </div>
    <div class="user-profile__twoots-wrapper">
      <TwootItem v-for="twoot in user.twoots" 
      :key="twoot.id" 
      :username="user.username"  
      :twoot="twoot" 
      @favourite="toggleFavourite"/>
    </div>
  </div>
</template>

<script>
import TwootItem from './Twootitem.vue';

export default {
  components: { TwootItem },
  name: 'UserProfile',
  data(){
    return{
      
      newTwootContent:'',
      selectedTwootType:'instant',

      twootTypes:[
        {value:'draft', name:'Draft'},
        {value:'instant', name:'Instant Twoot'}
      ],

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
            {id: 2, content: "Dont forget to subscribe!"}
          ]
        }
      }
    },

  watch: {
    followers(newFollowerCount, oldFollowerCount){
      if(oldFollowerCount<newFollowerCount){
        console.log(`${this.user.username} has gained a follower!`)
      }
    }
  },

  computed: {
    fullName(){
      return `${this.user.firstName} ${this.user.lastName}`;
    }
  },

  methods: {
    followUser(){
      this.followers++
    },

    toggleFavourite(id){
      console.log(`Favourited Tweet #${id}`)
    },

    createNewTwoot(){
      if(this.newTwootContent && this.selectedTwootType !== 'draft'){
        this.user.twoots.unshift({
          id: this.user.twoots.length + 1,
          content: this.newTwootContent
        })
        this.newTwootContent = '';
      }
    }
  },

  mounted(){
    this.followUser();
  },
}
</script>

<style lang="scss" scoped>

.user-profile{
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 50px;
  padding: 50px 5%;
}

.user-profile__user-panel{
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #DFE3E8;
}

.user-profile__admin-badge{
  background: goldenrod;
  color: white;
  margin-top: 5px;
  border-radius: 5px;
  /* margin-right:auto; */
  padding: 0 10px;
  font-weight: bold;
  margin-bottom: 20px;
}

.user-profile__follower-count{
  text-align: left;
}

.user-profile_twoots-wrapper{
  display: grid;
  grid-gap:10px;
}

.user-profile__create-twoot{
  border-top:1px solid #DFE3E8;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
}

h1{
  margin: 0;
}

</style>
