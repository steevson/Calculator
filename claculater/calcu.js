function outbutton(val){
    console.log(val)
   document.getElementById('screen').value+=val

}
function cleardisplay(){
    document.getElementById("screen").value=""
}
function answer(){
    var text =document.getElementById('screen').value
    var result =eval(text)
    document.getElementById("screen").value=result
}