<template>
  <table class="table table-bordered table-hover">
      <thead>
          <tr>
              <th>번호</th>
              <th>제목</th>
              <th>날짜</th>
              <th>조회수</th>
          </tr>
      </thead>
      <tbody> 
          <tr v-for="(post, i ) in posts" :key="i" @click="$router.push(`/detail/`+ i); "> 
              <td>{{posts[i].number}}</td>
              <td>{{posts[i].title}}</td>
              <td>{{posts[i].date}}</td>
              <td>{{posts[i].view}}</td>
          </tr>
      </tbody>
    </table>

  <button class="btn btn-secondary" @click="$router.go(-1)">뒤로가기</button>

</template>

<script>
export default {
  name  : 'List',
  props :{
    posts : Array
  },
  method : {
  
  }

}
</script>

<style>

</style>