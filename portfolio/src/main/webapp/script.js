// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
  console.log("Helloooo");
}

function randomImage(){
    const imgContainer = document.getElementById('img-container');
    var imgAr = new Array();
    imgAr[0] = 'images/city-birdeye.jpg';
    imgAr[1] = 'images/night-city.jpg';
    imgAr[2] = 'images/nightcity-streeta2.jpg';
    var num = Math.floor( Math.random() * imgAr.length );

    imgContainer.src = imgAr[num];
    console.log(num);
}

async function randomMessage() {
  const responseFromServer = await fetch('/testing');
  const messagesObject = await responseFromServer.json();
  console.log(messagesObject);

  const navbarMessage = document.getElementById("message");

  var messageArray = [messagesObject.message1, messagesObject.message2,
        messagesObject.message3];
  var index = Math.floor(Math.random() * messageArray.length);
  console.log(messageArray);

  navbarMessage.innerText = messageArray[index];
}

