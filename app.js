const write =  require ('./write')
const present= require ('./present')
const add = require ('./add')
const read =  require ('./read')
const del = require ('./del')
const update = require ('./update')


const input = process.argv

//write (data)

var note={}

if (input[2]== 'add'){
//build an object
    note  = {
        id: input [3],
        title: input [4],
        Author: input [5]
    }
//get oldNote value
    var oldNote = read ()
//add note to note.txt
    add (note,oldNote)
//present input in the terminal
   
present (read())

}

if (input [2]== 'read'){
    const present = require ('./present') 
    
    present(read())
}

if (input [2] === 'delete' ){
    let id = input [3]
    let oldNote =  read()
    let del = require('./del')

    del (id, oldNote)
    present(read())

}
if (input [2] === 'update'){
    let id = {
        id: input [3],
        title: input [4],
        Author : input [5]
    }
    let oldNote = read ()
    update (id ,oldNote)

    present (read())
}