let count = 0;
const decreaseButton = document.getElementsByClassName("decreaseBtn")[0];

decreaseButton.addEventListener("click", function() {
  count -= 1;
  document.getElementById("counter").innerHTML = count;
  colorUpdate()
});

const increaseButton=document.getElementsByClassName("increaseBtn")[0];

increaseButton.addEventListener("click",function(){
    count+=1;
    document.getElementById("counter").innerHTML = count;
    colorUpdate()

});

const resetButton=document.getElementsByClassName("resetBtn")[0];

resetButton.addEventListener("click",function(){
    count=0;
    document.getElementById("counter").innerHTML=count;
    colorUpdate()

})


function colorUpdate(){
    const counter = document.getElementById("counter");
    if (count>0){
        counter.style.color="green";
    } else if (count<0){
        counter.style.color="red";
    }else{
        counter.style.color="black";
    }
}
