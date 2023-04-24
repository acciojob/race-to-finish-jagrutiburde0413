const result=document.getElementById("output")
let promise1=new Promise(function(resolve){
	setTimeout(()=>{
		resolve(1)
	},Math.floor(Math.random()*5000))
})
let promise2=new Promise(function(resolve){
	setTimeout(()=>{
		resolve(2)
	},Math.floor(Math.random()*5000))
})
let promise3=new Promise(function(resolve){
	setTimeout(()=>{
		resolve(3)
	},Math.floor(Math.random()*5000))
})
let promise4=new Promise(function(resolve){
	setTimeout(()=>{
		resolve(4)
	},Math.floor(Math.random()*5000))
})
let promise5=new Promise(function(resolve){
	setTimeout(()=>{
		resolve(5)
	},Math.floor(Math.random()*5000))
})
window.promises = [promise2,promise2,promise3,promise4,promise5];
const p=Promise.any(promises)
p.then((value)=>{
	result.innerText=value;
})
