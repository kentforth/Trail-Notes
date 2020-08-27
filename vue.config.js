module.exports = {
    devServer: {
        port: 3000
    },
    configureWebpack:{
        optimization: {
            splitChunks: {
                minSize: 10000,
                maxSize: 250000,
            }
        }
    }
}
