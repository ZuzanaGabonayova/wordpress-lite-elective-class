<template>
  <div>
    <h1>
      front page
    </h1>

    <v-card class="ma-5 pa-4" v-for="post in posts" :key="post">
      <p>Title: {{ post.title }}</p>
      <p>Description: {{ post.description }}</p>
      <p>Quote Number: {{ post.quoteNumber }}</p>
      <p>ID: {{ post.id }}</p>
      <v-btn @click="firebaseDeleteSingleItem(post.id)">DELETE</v-btn>
    </v-card>
    
  </div>
</template>

<script setup>
import { db } from '../firebase.js'
import { ref } from 'vue'


import { collection, getDocs } from "firebase/firestore";

const posts = ref([]);

const querySnapshot = await getDocs(collection(db, "posts"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  posts.value.push({
    ...doc.data(),
    id: doc.id
  })
  console.log(doc.id, " => ", doc.data());
});

</script>
