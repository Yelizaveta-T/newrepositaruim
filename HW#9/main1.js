console.log("Part 1");
console.log("task-1");
let aa = Array();
aa[0]=2;
aa[1]=3;
aa[2]=4;
aa[3]=5;
aa[4]=4;
aa[5]=3;
aa[6]=2;
aa[7]=1;
aa[8]=5;
aa[9]=6;
console.log(aa[0] + " " + aa[1] + " " + aa[2] + " " + aa[3] + " " + aa[4]+ " " + aa[5]+ " " + aa[6]+ " " + aa[7]+ " " + aa[8]+ " " + aa[9]);
console.log("");

console.log("task-2");
let bb = Array();
bb[0]=2;
bb[1]=bb[0]*2;
bb[2]=bb[1]*2;
bb[3]=bb[2]*2;
bb[4]=bb[3]*2;
bb[5]=bb[4]*2;
console.log(bb[0]+" "+bb[1]+" "+bb[2]+" "+bb[3]+" "+bb[4]+" "+bb[5]);
console.log("");

console.log("task-3");
let cc=Array();
let mass="";
for(let i=0;i<6;i++){
    cc[i]=Math.pow(2, i+1);
    mass+=cc[i]+" ";
}
console.log(mass);
console.log("");

console.log("Task-4");
let dd = Array();
dd[0] = Math.floor(Math.random() * 10);
dd[1] = dd[0]*2;
dd[2] = dd[1]+1;
dd[3] = dd[0]*dd[1];
dd[4] = dd[1]*dd[3];
console.log(dd[0] + " " + dd[1] + " " + dd[2] + " " + dd[3] + " " + dd[4]);
console.log("");
console.log("");