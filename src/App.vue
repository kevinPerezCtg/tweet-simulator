<template>
  <Menu :openClosedForm="openClosedForm" :showForm="showForm"/>
  <TweetForm :openClosedForm="openClosedForm" :showForm="showForm" :reloadTweets="reloadTweets"/>
  <TweetList :tweets="tweets" :reloadTweets="reloadTweets"/>
</template>

<script>
import { ref } from "vue";
import Menu from "./components/Menu";
import TweetForm from "./components/TweetForm";
import useFormTweet from "./hooks/useFormTweet";
import TweetList from "./components/TweetList";
import { getTweetApi } from "./api/tweet"
 
export default {
  name: 'App',
  components:{
    Menu,
    TweetForm,
    TweetList,
  },
  setup (){
    let tweets = ref(getTweetApi().reverse());
    const reloadTweets = () =>{
      tweets.value = getTweetApi().reverse();
    }
    return{
      ...useFormTweet(),
      tweets,
      reloadTweets,
    };
  }
}
</script>

<style lang="scss">
</style>
