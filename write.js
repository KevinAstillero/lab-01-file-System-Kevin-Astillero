const fs = require ('fs');
const write = function (input){
    fs.writeFileSync ('Task.txt', input)

}
module.exports = write
