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

// function randomImage(){
//     path = path || 'images/';
//     const img_container = document.getElementById('img-container');
//     var imgAr = new imgArray(3);
//     img[0] = 'city-birdeye.jpg';
//     img[1] = 'night-city.jpg';
//     img[2] = 'nightcity-streeta2.jpg';
    
//     var num = Math.floor( Math.random() * imgAr.length );
//     img_container.src = 'images/' + img[num];
//     console.log(num);
// }

// function getRandomImage(imgAr, path) {
//     path = path || 'images/'; // default path here
//     var num = Math.floor( Math.random() * imgAr.length );
//     var img = new imgArray(4)imgAr[ num ];
//     var imgStr = '<img src="' + path + img + '" alt = "">';
//     document.write(imgStr); document.close();
// }