
// const data=require(`./src/data`)
// const students=require(`./src/student`)
// const stu=new students()
// console.log(stu.info(`ashraful`,59
// ));

// console.log(data);
const { data } = require("./src/data");
const {agecall}=require(`./src/function`)
console.log(agecall(45));


// const fs=require(`fs`)
// fs.writeFileSync(`node.txt.txt`,`l love `)

const fs=require(`fs`)

fs.writeFileSync(`azad.txt`,`my name is reasel`)
const names=fs.readFileSync(`azad.txt`)
console.log(names.toString());

fs.writeFileSync(`text.txt`,names)

const path=require(`path`)
const url=require(`url`)
const siteurl=`https://www.facebook.com/`


// console.log(path.join(__dirname,'ami','tomi','kara'));
console.log(url.parse(siteurl));