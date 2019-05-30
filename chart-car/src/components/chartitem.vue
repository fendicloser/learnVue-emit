<<template>
    <li>
        <input @change='check' type='checkbox' :checked='checked' name='select'>

        {{detail}}
        <button @click="subadd">-</button>
        {{number}}
        <button @click="add">+</button>
        {{selectItem}}
        <button @click="del">X</button>
    </li>
</template>
<<script>
export default {
    props:['elem','index','selectItem'],
    data(){
        return{
            checked:false,
            name:this.elem.name,
            url:this.elem.imageUrl ,
            number:this.elem.number,
            detail:this.elem.detail
        }
    },
    methods:{
        del(){
            this.$emit('del',this.index)
        },
        check(){
            if(this.checked){
                this.number=0
            }else{
                this.number=1
            }
            this.checked=!this.checked
        },
        subadd(){
            if(this.number>0){
                this.number-=1
                if(this.number==0){
                    this.checked=false
                }
                this.$emit('subadd',[this.number,this.index])
            }
        },
        add(){
            this.number+=1
            this.checked=true
            this.$emit('add',[this.number,this.index])
        }
    }
}
</script>