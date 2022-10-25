function Abc(){
    function Def(){
       var a= document.getElementById("a").value
       var b=document.getElementById('b').value
      if (a===null){

      
      alert ("pls fill")
    }
    else if(b===null)
    {
        alert("pls fill")
    }
    else
     {
        alert("success")
     }  
     
}
    return(
        <>
        <input id="a" type="text" />
        <input id="b" type="text" />

    

        <button onClick={Def}>Click</button>
        </>
    )
    
}
export default Abc