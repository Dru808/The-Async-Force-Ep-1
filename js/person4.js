/*jshint esversion: 6*/

function reqPerson4() {
  const requestData = JSON.parse(this.responseText);
  const name = requestData.name;
  const personName = document.querySelector('#person4Name');
  personName.innerHTML = 'I am ' + name;
}

function reqHomeWorld4() {
  const requestData = JSON.parse(this.responseText);
  const name = requestData.name;
  const personWorld = document.querySelector('#person4HomeWorld');
  personWorld.innerHTML = 'My home world is ' + name;
}

const oReq = new XMLHttpRequest();
oReq.addEventListener('load', reqPerson4);
oReq.open('GET' , 'http://swapi.co/api/people/4/');
oReq.send();

const oReq2 = new XMLHttpRequest();
oReq2.addEventListener('load', reqHomeWorld4);
oReq2.open('GET' , 'http://swapi.co/api/planets/1/');
oReq2.send();