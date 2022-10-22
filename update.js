const fs = require ('fs')

const update = function (note, oldNote){
    const oNote = JSON.parse(oldNote)
    const newNote = oNote.map (function(n,idx){
        if (n.id == note.id) {
            n.title = note.title
            n.Author = note.Author
           
        }
        return n
    })
    fs.writeFileSync('./Task.txt', JSON.stringify(newNote))
    
}
module.exports= update