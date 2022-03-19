function clicked() {
    document.getElementById("one").innerHTML = "This will replace the excisting content what ever present inside the tags"
    document.getElementById("two").style.background = "red"
    document.getElementById("pro1").innerHTML="changes the text"
    document.getElementById("trrue").value="Changes the text by using the value"
   let k= document.createElement('k')
   k.innerHTML="<h2><b>this changes to bold</b></h2>"
   k.id="Hello sample text"
   document.body.appendChild(k)

   let div=document.createElement('div')
   div.id='content'
   div.className="note"
   let h2=document.createElement('h2')
   h2.textContent="add the content in the h2 tag"
   div.appendChild(h2)
   document.body.appendChild(div)
}

function anchor() {
    document.getElementById("link")
    document.write(`<div>
    <h1>For the home page</h1>
   <img src="https://www.financialexpress.com/wp-content/uploads/2021/09/1200-19.jpg"
    width=40%
    <p>This is for the paragrapah</p>
    </div>`)
}

function lion() {
//    document.getElementsByClassName("funn1").innerHTML="this is fun"}
// document.getElementById("gunn1").innerHTML="Hello world"
// document.querySelectorAll("p")

}

// function mouseover(){

// document.getElementById("demo").innerHTML="Hello world"
// }




