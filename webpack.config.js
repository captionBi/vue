module.exports ={
    entry:'./main.js',
    output:{
        path:__dirname + "/public",
        filename:'bundle.js'
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
        }
    },
     module:{
        loaders:[{
            test: /\.js$/,
            loader: "babel-loader"
        },{
           
            test: /\.vue$/ ,
            loader: "vue-loader"
        },{
            
            test: /\.scss$/ ,
            loader: "sass-loader"
        },{
    
            test: /\.html$/ ,
            loader: "html-loader"
        },{
            test: /\.css$/,
            loader: "style-loader!css-loader"
        },{
            test: /\.(jpg|png|gif|jpeg)$/,
            loader: "url-loader"
        },{
            test: /\.(ttf|svg|woff|eot)$/,
            loader: "file-loader"
        }]
    },
    devServer:{
        //服务器文件夹
        contentBase: "./public",
        //port
        //实时更新
        inline: true
    }
}
