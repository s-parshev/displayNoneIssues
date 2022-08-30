function displayAudienceHelp() {
  const persentage = [25, 50, 95, 19];
  const containerElement = document.getElementById("container");
  containerElement.classList.remove("hide");
  setTimeout(()=>{
    play(persentage)
  },100)
}
function play(array){
  const persentage = [...array]

  const divOne = document.getElementById("one");
  const divOnePercentage = document.getElementById("onePercentage");
  const divTwo = document.getElementById("two");
  const divTwoPercentage = document.getElementById("twoPercentage");
  const divThree = document.getElementById("three");
  const divThreePercentage = document.getElementById("threePercentage");
  const divFoure = document.getElementById("four");
  const divFourPercentage = document.getElementById("fourPercentage");
  divOne.style.height = 100 - persentage[0] + "px";
  divOnePercentage.style.top = 100 - persentage[0] + "px";
  divOnePercentage.innerHTML = persentage[0] + "%";
  divOnePercentage.classList.add("playAnimation");


  divTwo.style.height = 100 - persentage[1] + "px";
  divTwoPercentage.style.top = 100 - persentage[1] + "px";
  divTwoPercentage.innerHTML = persentage[1] + "%";
  divTwoPercentage.classList.add("playAnimation")

  divThree.style.height = 100 - persentage[2] + "px";
  divThreePercentage.style.top = 100 - persentage[2] + "px";
  divThreePercentage.innerHTML = persentage[2] + "%";
  divThreePercentage.classList.add("playAnimation")


  divFoure.style.height = 100 - persentage[3] + "px";
  divFourPercentage.style.top = 100 - persentage[3] + "px";
  divFourPercentage.innerHTML = persentage[3] + "%";
  divFourPercentage.classList.add("playAnimation")

}

