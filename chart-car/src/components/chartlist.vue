<template>
    <ul>
        <chartitem @del='del' @subadd='subadd' @add='add' :key="elem" :elem="i" :index="elem" :selectItem="selectList[elem]" v-for="(i,elem) of chartdata.good" ></chartitem>
        {{selectList}}
    </ul>
</template>
<script>
import chartitem from './chartitem'
export default {
     props:['chartdata','index','selectList'],
     data(){
         return {
             arry:[],
         }
     },
     mounted(){
         console.log('mounted'+this.selectList)
     },
    components:{
        chartitem
    },
    watch:{
        'selectList'(){
            console.log(this.selectList)
        }
    },
    methods:{
        del(index){
            this.$emit('del',index)
        },
        subadd(arry){
            this.arry=arry
            this.$emit('numberchange',arry)
        },
        add(arry){
            this.arry=arry
            this.$emit('numberchange',arry)
        },

    }
}
</script>