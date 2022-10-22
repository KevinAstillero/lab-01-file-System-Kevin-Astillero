const fs = require ('fs')
const read = function (){
    return fs.readFileSync ('Task.txt' , 'utf8')
}
module.exports = read