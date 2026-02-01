const data={
1:["GUROU","WIZARD","NAKAYOSHIKOYOSHI","TAKI","NEXUS","MIRU_KING","PIMAN_TRIBE","FREESIA","KAGURA","LETHAL"],
2:[],3:[],4:[]
};
let cur=1;
function setDiv(d){cur=d;render()}
function render(){
 const t=document.getElementById("table");
 t.innerHTML="";
 data[cur].forEach((n,i)=>{
  t.innerHTML+=`<tr><td>${i+1}</td><td><img src="assets/teams/${n}.png" height="24"> ${n}</td></tr>`;
 })
}
render();
