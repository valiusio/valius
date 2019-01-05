module.exports = {
// this configuration allows you to enable/disable component splitting proccess into chunk files

    chainWebpack: config => {
        config.optimization.delete('splitChunks')
    }
}
