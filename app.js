// // var lala=require('./utils.js') // now utils.js would be printed
// const fs=require('fs')
// fs.writeFileSync('notes.txt',"I am Abhishek Agarwal")
// // If we did just this then I could not get the variables which are defined in utils.js. So to do that we have to keep those variables in module.exports. We could have used require just as it is wothout assigning it to any variable. This would run the file but would not get the variables that are meant to be exported. So, we assigned it to a variable.
// // console.log(lala); // would print abhishek
// var add=require('./utils.js')
// console.log(add(4,5))

// b=a();
// console.log(b);

// //for modules you used name like require('fs'), for personal files, you use ./, for npm packages you have to use Direectly use npmpackage name like here, we are using validator package.
// const validator=require('validator')
// console.log(validator.isEmail("abhihsek31ag@gmail.com"))
// console.log(chalk.bold.inverse.green('Success!'));
// //process.argv contains array that has all the arguments available.
// console.log(process.argv);
const yargs=require('yargs');
const chalk=require("chalk");
const notes=require("./notes.js");
// console.log(yargs.argv);
//add notes, remove notes, 
// You can add a command to yargs by specifying it in a format as specified bellow:
yargs.version('1.1.0')
yargs.command({
    command:'add',
    describe:'adding numbers',
    builder:{
        title: {describe:"add title",
        demandOption:true,//This will help in making add the field of title important
        type:'string'},
        body:{describe:"adding body",
    demandOption:true,
type:'string'}
    },
    handler(argv) {
        notes.addNotes(argv.title,argv.body)
    }
})
yargs.command({
    command:'remove',
    describe:'removing',
    builder:{
        title:{describe:"add title to be removed",
        demandOption:true}},   
    handler(argv) {notes.remove(argv.title)}
})
yargs.command({
    command:'read',
    builder:{
        title:{describe:"Reading a cgiven note",
    demandOption:true}},
    describe:'reading your given command',
    handler(argv) {notes.readnote(argv.title)}
})
yargs.command({
    command:'list',
    describe:'Your list is',
    handler() {console.log(chalk.inverse.blue("showing list"))
notes.listnotes()}
})
// console.log(yargs.argv)
yargs.parse()
// to use the functionality of yargs command either you use console.log(yargs.argv) or use yargs.parse() it will appply the function of yargs without displaying the the content of argv
