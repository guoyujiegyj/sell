'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap
// var app=express()


// var appData=require('../data.json')
// var seller=appData.seller
// var goods=appData.goods
// var ratings=appData.ratings

// var apiRoutes=express.router()
// apiRoutes.get('/seller',function(req,res){
//   res.json({
//     errno:0,
//     data:seller
//   })
// })

// apiRoutes.get('/goods',function(req,res){
//   res.json({
//     errno:0,
//     data:goods
//   })
// })

// apiRoutes.get('/rating',function(req,res){
//   res.json({
//     errno:0,
//     data:ratings
//   })
// })
// appData.use('/api',apiRoutes)

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
