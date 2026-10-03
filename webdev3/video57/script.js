let a =1;
for (let i = 0; i < 100; i++) {
    console.log(a+i);
   
    
}
let obj={
    name:'harry',
    role:'programmer',
    company:'xcompany'
}
for (const key in obj) {
    const element = object[key];
    console.log(key, element)
    
    
}
for (const c of 'harry') {
    console.log(c)
    
}
let i=0;
while (i<6) {
    console.log(i)
    i++;
    
}
do {
    console.log(i)
    i++;
    
} while (i<6);