<template>
    <div>
        <div>{{childData}}</div>
        <button @click='updateParent'>向上传参</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            childData:'childData'
        }
    },
    methods:{
        updateParent(){
            this.$emit('childData',this.childData)
        }
    }
}
</script>