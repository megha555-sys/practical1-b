let arr=[]


// we are making an todo list function

document.getElementById("add").onclick=(e)=>{


  let item=document.getElementById("text").value
  let item1=document.getElementById("second").value

  arr.push(item)
  arr.push(item1)

  localStorage.setItem("task",JSON.stringify(arr))

  e.preventDefault()

}


document.getElementById("ret").onclick=(e)=>{


  if ("text" == "item"){
    console.log("False")
      }
      else{
        console.log("True")
      }
      e.preventDefault()
}
