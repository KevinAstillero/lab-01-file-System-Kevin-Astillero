const fs = require ('fs');
const write = function (data){
    fs.writeFileSync ('Task.txt', data)

}
module.exports = write
