<template>
  <div class="toast" v-show="toastShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "toast",
    // props:{
    // message:{
    //   type:String,
    //   default:'提示！'
    // },
    // toastShow:{
    //   type: Boolean,
    //   default: false
    // }
    // },
    data(){
      return {
        message:'',
        toastShow:false
      }
    },
    methods:{
      show(toastMessage,duration=2000){
        console.log(toastMessage);
        this.toastShow = true
        console.log(this.toastShow);
        this.message = toastMessage

        setTimeout(()=>{
          this.message = ''
          this.toastShow = false
        },duration)
      }
    }

  }
</script>

<style scoped>
.toast{
  position: fixed;
  left: 50%;
  top: 50%;
  padding: 5px 8px;
  transform:translate(-50%,-50%);
  z-index: 999;

  background-color: #99ffd1;
}
</style>