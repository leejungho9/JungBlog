<template>
  <div class="banner">
  <div class="text-group">
    <h4>Frontend Developer's <br> 📚 Study Blog 📚</h4>
  </div>
</div>
</template>

<script>
export default {
    name : 'main',
    mounted() {
      let text  = document.querySelector('.text-group')
      setTimeout(function(){
        text.style.transform = "translate(0px)";
      }, 1);  
    }
}
</script>

<style>
.banner {
  background-image: url("../assets/banner.jpg");
  width: 100%;
  height: 600px;
  background-position : center;
  background-repeat: no-repeat;
  background-size : cover;
  position: relative;
}
.text-group{
  position: absolute;
  left : 40px;
  bottom : 40px;
  color : #fff;
  text-align: left;
}
.text-group h4{
    display: block;
    font-weight: 700;
    font-size: 40px;
}

.text-group{
  transform: translateX(-1000px);
  transition: 1s;
}


</style>