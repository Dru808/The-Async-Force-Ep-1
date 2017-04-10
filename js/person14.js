/*jshint esversion: 6*/

function reqPerson14() {
  const requestData = JSON.parse(this.responseText);
  const name = requestData.name;
  const personName = document.querySelector('#person14Name');
  personName.innerHTML = 'I am ' + name;
}

function reqSpecies14() {
  const requestData = JSON.parse(this.responseText);
  const name = requestData.name;
  const personWorld = document.querySelector('#person14Species');
  personWorld.innerHTML = 'I am of the ' + name + ' species';
}

const oReq3 = new XMLHttpRequest();
oReq3.addEventListener('load', reqPerson14);
oReq3.open('GET' , 'http://swapi.co/api/people/14/');
oReq3.send();

const oReq4 = new XMLHttpRequest();
oReq4.addEventListener('load', reqSpecies14);
oReq4.open('GET' , 'http://swapi.co/api/species/1/');
oReq4.send();