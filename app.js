const write =  require ('./write')
const present= require ('./present')
const add = require ('./add')
const read =  require ('./read')



const data = process.argv

//write (data)

var note={}

if (data[2]== 'add'){
//build an object
    note  = {
        id: data [3],
        Student_Name: data [4],
        Student_Age : data [5]
    }
//get oldNote value
    var oldNote = read ()
//add note to note.txt
    add (note,oldNote)
//present input in the terminal
   
present (read())

}

