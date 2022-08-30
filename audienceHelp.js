function displayAudienceHelp() {
  const persentage = [25, 50, 95, 19];
  const mainElement = document.getElementById("main");
  const containerElement = document.getElementById("audience");
  const iconElement = document.getElementById("icon-audience")
  mainElement.classList.remove("hide");
  containerElement.classList.remove("hide");
  iconElement.classList.remove("hide");
  setTimeout(()=>{
    audience(persentage)
  },100)
}
function audience(array){
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
function callAFriendHint(){
  const mainElement = document.getElementById("main");
  const iconElement = document.getElementById("icon-friend");
  const containerElement = document.getElementById("friend");
  containerElement.classList.remove("hide");
  mainElement.classList.remove("hide");
  iconElement.classList.remove("hide")
  setTimeout(()=>{
    friend()
  },100)
}
function friend(){
  const userMessage =" I think the correct answer is 'J'."
  const messageElement = document.getElementById("messages");
  messageElement.innerHTML = userMessage;
}
function hideFriendHint(){
  const mainElement = document.getElementById("main");
  const containerElement = document.getElementById("friend");
  const iconFriendElement = document.getElementById("icon-friend");
  iconFriendElement.classList.add("hide");
  containerElement.classList.add("hide")
  mainElement.classList.add("hide")
}
function hideAudienceHint(){
  const mainElement = document.getElementById("main");
  const audineceElement = document.getElementById("audience");
  const iconAudienceElement = document.getElementById("icon-audience");
  iconAudienceElement.classList.add("hide")
  audineceElement.classList.add("hide")
  mainElement.classList.add("hide")
}