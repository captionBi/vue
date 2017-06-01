<template>
    <article class="weui-article">
        <h1>大标题</h1>
        <section>
            <h2 class="title">{{title}}</h2>
            <section>
                <h3>1.1 节标题</h3>
                <p v-html='content'></p>
                <p>
                    <img src="" alt="">
                    <img src="" alt="">
                </p>
            </section>
            
        </section>
    </article>
</template>

<script>
    module.exports={
        data(){
            return{
                id:'',
                detailNews:'',
                title:'',
                content:''
            }
        },
        methods:{

        },
        mounted(){
            var self=this;
            $.ajax({
                url:'https://cnodejs.org/api/v1/topic/'+ self.$route.params.id,
                type:'get',
                dataType:'json',
                //data:{id:self.$route.params.id}
            }).then(function(data){
                    //console.log(self.$route.params.id)
                    //console.log(data.data);
                    self.datailNews=data.data
                    self.title=self.datailNews.title;
                    self.content=self.datailNews.content;
            })
        }
    }
</script>