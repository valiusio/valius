module.exports = {
// this configuration allows you to enable/disable component splitting proccess into chunk files

    chainWebpack: config => {

        return (process.env.VUE_APP_API_CHUNK_BUILD) && config.optimization.delete('splitChunks')
    }
}
