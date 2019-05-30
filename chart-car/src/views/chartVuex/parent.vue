<template>
    <div>
        {{parentData}}
        <child @childData='handleChildDataChange'></child>
    </div>
</template>
<script>
import child from '../../components/child'
export default {
    data(){
        return {
            parentData:'parentData'
        }
    },
    methods:{
        handleChildDataChange(childData){
            console.log('己收到'+childData)
        }
    },
    components:{child}
}
</script>