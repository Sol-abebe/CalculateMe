let result=document.getElementById("inputext");
let calculate=(Number)=>{
    result.value +=Number;

}
let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("Enter the valid Input");
    }
}
function backspc(){
    result.value= result.value.substr(0,result.value.length - 1);
} 
function del(){
    result.value= result.value;
}
function sqrt () {
    result.value =Math.sqrt(result.value, 2);
}
function log() {
    result.value = Math.log10(result.value);
}
function pow () {
    result.value = Math.pow(result.value, 2);
}
function sin() {
        result.value = Math.sin(result.value);
        
    }
function cos() {
    result.value = Math.cos(result.value);
    
}
function tan() {
    result.value = Math.tan(result.value);
}
