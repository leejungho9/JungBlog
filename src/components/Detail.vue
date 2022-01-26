<template>

  <div class="detail-container" >

        <h5>{{posts[$route.params.id].title}}</h5>
        <p>{{posts[$route.params.id].content}}</p>

  </div>

    <button class="btn btn-secondary" @click="$router.go(-1)">뒤로가기</button>
</template>

<script>

export default {
    name : "Detail",
    data() {
        return {
            
        }
    },
    props : {
        posts : Array
    }
}
</script>

<style>
    .detail-container {
        width: 100%;

    }
</style>