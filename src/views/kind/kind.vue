 <template>
   <div id="kind">
     <navi-bar class="kind-nav" ><div slot="center">分类</div></navi-bar>
     <div class="bigCategory left">
       <big-category :big-categories="bigKindTags" @bigKindTagsClick="bigKindTagsClick"></big-category>
     </div>
     <div class="smallKind left">
       <small-category :small-category="smallKindTags"></small-category>
     </div>
   </div>
</template>

<script>
export default {
name: "kind",
  created() {
  this.getCategoryKind()
  },
  data(){
  return {
    scroll:null,
    bigKindTags:[],
    smallKindTags:[],
    currentIndex:0
  }
},
  methods:{
  getCategoryKind(){
    getBigCategory().then((res)=>{
      this.bigKindTags = res.data.category.list
      getSmallCategory(this.bigKindTags[this.currentIndex].maitKey).then((res)=>{
        this.smallKindTags = res.data.list
      })
    })

  },
    bigKindTagsClick(index){
      getSmallCategory(this.bigKindTags[index].maitKey).then((res)=>{
        this.smallKindTags = res.data.list
      })
    },
    getBigCategory(){

    }
  },
  components:{
  NaviBar,
    bigCategory,
    smallCategory
  }
}
import {getBigCategory,getSmallCategory} from "../../network/kind";
import NaviBar from "../../components/common/navigationbar/NaviBar";
import bigCategory from './childComponents/bigCategory'
import smallCategory from './childComponents/smallCategory'
import betterScroll from "../../components/common/better-scroll/betterScroll";
</script>

<style scoped>
  .kind-nav {
    background-color: var(--color-tint);
    color: #efefef;
  }
  .bigCategory {
    width: 26%;
    background-color: rgba(0,0,0,0.03);
  }

.smallKind {
  width: 74%;
}
</style>
