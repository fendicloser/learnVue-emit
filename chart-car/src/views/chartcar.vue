<template>
    <div>
        <ul>
            <li @click='tryDel(elem)' :key='elem' v-for="(i,elem) in dat">{{i.a}}</li>
        </ul>
        .....
        <input  @change="changeSelectAll" :checked="selectAll" type="checkbox" name='selectAll' />全选
        {{selectAll}}
        <chartlist @del='handleDel' @numberchange='handleNumberChange' :selectList='selectList' :chartdata='chartdata'></chartlist>
        <button @click='submit'>结算</button>
    </div>

</template>
<script>
import chartlist from '../components/chartlist'
export default {
    created(){
        this.axios.get('http://127.0.0.1:8079/tryChartCar').then((data)=>{
            this.chartdata=data.data
            for(var i=0;i<this.chartdata.good.length;i++){
                this.selectList.push(false)
            }
            alert('获取成功')
        })
    },
    data(){
        return {
            dat:[{a:11},{a:22},{a:33},{a:44}],
            chartdata:{},
            selectAll:false,
            selectList:[],
        }
    },
    updated(){
        console.log('1')
    },
    watch:{
        selectList(){
            console.log('1')
        }
    },
    methods:{
        tryDel(elem){
            this.dat.splice(elem,1)
        
        },
        submit(){
            var sum=0
            for(var i in this.chartdata.good){
                sum+=this.chartdata.good[i].number
            }
            console.log(`一共购买了${sum}个商品`,this.chartdata.good)
        },
        changeSelectAll(){
            this.selectAll=!this.selectAll
            for(var i=0; i<this.selectList.length;i++){
                this.selectList[i]=!this.selectList[i]
            }
            //console.log(this.selectList)
        },
        handleNumberChange(array){
            var index=array[1]
            var number=array[0]
            this.chartdata.good[index].number=number
        },
        handleDel(index){
            
            this.chartdata.good.splice(0,1)
            console.log(this.chartdata.good)
            // console.log(index)
            // console.log(this.chartdata.good.splice(1,1))
            //this.chartdata.good.splice(index,1)
            // var forDel=JSON.parse(JSON.stringify(this.chartdata.good))
            // forDel.splice(index,1)

            // this.chartdata.good=forDel
        },
    },
    components:{chartlist}
}
</script>