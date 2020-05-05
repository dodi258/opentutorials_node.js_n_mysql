//local에서 개발중이면
if (process.env.NODE_ENV === 'development') {
    module.exports = require('./dev'); 
}