function displayAudienceHelp() {
  //данни от изфикващата функция
  const arr = [10.55, 50.21, 95.99, 19];
  //селектиране на елементи
  const containerElement = document.getElementById("container");
  containerElement.classList.remove("hide");
  const divOne = document.getElementById("one");
  const divOnePercentage = document.getElementById("onePercentage");
  const divTwo = document.getElementById("two");
  const divTwoPercentage = document.getElementById("twoPercentage");
  const divThree = document.getElementById("three");
  const divThreePercentage = document.getElementById("threePercentage");
  const divFoure = document.getElementById("four");
  const divFourPercentage = document.getElementById("fourPercentage");
  //задаванена стойности за височина, процент и клас за анимиране
  divOne.style.height = 100 - arr[0] + "px";
  divOnePercentage.style.top = 100 - arr[0] + "px";
  divOnePercentage.innerHTML = arr[0] + "%";
  divOne.classList.add("playAnimation");
  divOnePercentage.classList.add("playAnimation");

  divTwo.style.height = 100 - arr[1] + "px";
  divTwoPercentage.style.top = 100 - arr[1] + "px";
  divTwoPercentage.innerHTML = arr[1] + "%";

  divThree.style.height = 100 - arr[2] + "px";
  divThreePercentage.style.top = 100 - arr[2] + "px";
  divThreePercentage.innerHTML = arr[2] + "%";
  divThree.classList.add("playAnimation");

  divFoure.style.height = 100 - arr[3] + "px";
  divFourPercentage.style.top = 100 - arr[3] + "px";
  divFourPercentage.innerHTML = arr[3] + "%";
  divFoure.classList.add("playAnimation");
}
// function playAnimation(){
//   const arr = [10.55, 50.21, 95.99, 19];
//   const divOne = document.getElementById("one");
//   const divOnePercentage = document.getElementById("onePercentage");
//   const divTwo = document.getElementById("two");
//   const divTwoPercentage = document.getElementById("twoPercentage");
//   const divThree = document.getElementById("three");
//   const divThreePercentage = document.getElementById("threePercentage");
//   const divFoure = document.getElementById("four");
//   const divFourPercentage = document.getElementById("fourPercentage");
//   //задаванена стойности за височина, процент и клас за анимиране
//   divOne.style.height = 100 - arr[0] + "px";
//   divOnePercentage.style.top = 100 - arr[0] + "px";
//   divOnePercentage.innerHTML = arr[0] + "%";
//   divOne.classList.add("playAnimation");
//   divOnePercentage.classList.add("playAnimation");

//   divTwo.style.height = 100 - arr[1] + "px";
//   divTwoPercentage.style.top = 100 - arr[1] + "px";
//   divTwoPercentage.innerHTML = arr[1] + "%";
//   divTwo.classList.add("playAnimation");

//   divThree.style.height = 100 - arr[2] + "px";
//   divThreePercentage.style.top = 100 - arr[2] + "px";
//   divThreePercentage.innerHTML = arr[2] + "%";
//   divThree.classList.add("playAnimation");

//   divFoure.style.height = 100 - arr[3] + "px";
//   divFourPercentage.style.top = 100 - arr[3] + "px";
//   divFourPercentage.innerHTML = arr[3] + "%";
//   divFoure.classList.add("playAnimation");
// }
function callAFriendHint(string) {
  console.log(string);
}
function fiftyFiftyHint() {
  const testElement = document.getElementById("test");
  testElement.classList.remove("hide")
  const testBarElement = document.getElementById("bar")
}
