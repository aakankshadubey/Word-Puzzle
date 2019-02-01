$(() => {
    // set a timeout of 2 seconds
    setTimeout(() => {
       document.getElementById('start').style.visibility = "hidden"
       document.getElementById('start').style.height = 0
       document.getElementById('hidden').style.height = "325px"
       document.getElementById('hidden').style.visibility = "visible"
 
    }, 2000);
 })
 