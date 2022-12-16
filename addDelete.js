const stringLength =(string) =>{
   if(string.length == 0 || string.length >9){
    return "Give valid input"
   }else{
    return string.length;
   }

}

module.exports = stringLength;