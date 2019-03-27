var fs=require('fs')
var chalk=require('chalk')

const getNotes=()=>
    {
        return "Your notes..."
    }   


const addNotes=(title,body)=>{
    const notes=loadNotes() 
    // const DuplicateNote=notes.filter((note)=>note.title===ti tle)
    const DuplicateNote=notes.find((item)=>item.title===title) // Difference between find and filter is that through find whenever that item is found, it breaks whereas in filter it checks for all the elements.
    debugger
    if(DuplicateNote)(console.log(chalk.red.inverse("Title already taken!")))
    else
    {
    notes.push({title:title,body:body})
        
    console.log(chalk.blue.inverse("Note Added!"))}
    savedFile(notes)
}

const remove=(title)=>{
    const notes=loadNotes()
    if(notes.length===0) //Always remember that notes===[] will not work. Neither will !notes work
    console.log(chalk.red.inverse("Notes stack is empty"))
    else
    {const notesafterwards=notes.filter(function(note){return note.title!=title})
    if(notesafterwards.length===notes.length)
    (console.log(chalk.red.inverse("No such title found")))
    else
    {savedFile(notesafterwards)
        console.log(chalk.green.inverse("note removed!"))
    }}
}
const savedFile=(notes)=>
    {
        const data=JSON.stringify(notes)
        fs.writeFileSync('notes.json',data)
    }

const loadNotes=()=>{
    try{
    const dataBuffer=fs.readFileSync('notes.json')
    const DataString=dataBuffer.toString()
    return JSON.parse(DataString)}
    catch(e){
        return []
    }
}
const listnotes=()=>{
    const a=loadNotes()
    var b=[]
    // for(var i=0;i<a.length;i++)            // Method 1
    // b.push(a[i].title)
    b=a.map((item)=>item.title)                // Method 2
    console.log(b)
//     a.forEach((element)=> {                        //Method 3. .forEach acually does not return anything and hence is not required
//         console.log(element.title)
//     });
}
const readnote=(title)=>{
const a=loadNotes()
for(i=0;i<a.length;i++)
{
if(a[i].title===title)
    {console.log("Your title was: "+a[i].title)    
    console.log("Your title's body was: "+a[i].body)
    break}
}
}
module.exports={
    addNotes:addNotes,
    remove:remove,
    listnotes:listnotes,
    readnote:readnote
}