console.log("dictionary");

const myJson = `{
    "word": "example",
    "results": [
      {
        "definition": "a representative form or pattern",
        "partOfSpeech": "noun",
        "synonyms": [
          "model"
        ],
        "typeOf": [
          "representation",
          "internal representation",
          "mental representation"
        ],
        "hasTypes": [
          "prefiguration",
          "archetype",
          "epitome",
          "guide",
          "holotype",
          "image",
          "loadstar",
          "lodestar",
          "microcosm",
          "original",
          "paradigm",
          "pilot",
          "prototype",
          "template",
          "templet",
          "type specimen"
        ],
        "derivation": [
          "exemplify"
        ],
        "examples": [
          "I profited from his example"
        ]
      },
      {
        "definition": "something to be imitated",
        "partOfSpeech": "noun",
        "synonyms": [
          "exemplar",
          "good example",
          "model"
        ],
        "typeOf": [
          "ideal"
        ],
        "hasTypes": [
          "pacemaker",
          "pattern",
          "beauty",
          "prodigy",
          "beaut",
          "pacesetter"
        ],
        "derivation": [
          "exemplify",
          "exemplary"
        ]
      },
      {
        "definition": "an occurrence of something",
        "partOfSpeech": "noun",
        "synonyms": [
          "case",
          "instance"
        ],
        "typeOf": [
          "happening",
          "natural event",
          "occurrence",
          "occurrent"
        ],
        "hasTypes": [
          "clip",
          "mortification",
          "piece",
          "time",
          "humiliation",
          "bit"
        ],
        "derivation": [
          "exemplify"
        ],
        "examples": [
          "but there is always the famous example of the Smiths"
        ]
      },
      {
        "definition": "an item of information that is typical of a class or group",
        "partOfSpeech": "noun",
        "synonyms": [
          "illustration",
          "instance",
          "representative"
        ],
        "typeOf": [
          "information"
        ],
        "hasTypes": [
          "excuse",
          "apology",
          "specimen",
          "case in point",
          "sample",
          "exception",
          "quintessence",
          "precedent"
        ],
        "derivation": [
          "exemplify",
          "exemplary"
        ],
        "examples": [
          "this patient provides a typical example of the syndrome",
          "there is an example on page 10"
        ]
      },
      {
        "definition": "punishment intended as a warning to others",
        "partOfSpeech": "noun",
        "synonyms": [
          "deterrent example",
          "lesson",
          "object lesson"
        ],
        "typeOf": [
          "monition",
          "admonition",
          "word of advice",
          "warning"
        ],
        "derivation": [
          "exemplary"
        ],
        "examples": [
          "they decided to make an example of him"
        ]
      },
      {
        "definition": "a task performed or problem solved in order to develop skill or understanding",
        "partOfSpeech": "noun",
        "synonyms": [
          "exercise"
        ],
        "typeOf": [
          "lesson"
        ],
        "examples": [
          "you must work the examples at the end of each chapter in the textbook"
        ]
      }
    ],
    "syllables": {
      "count": 3,
      "list": [
        "ex",
        "am",
        "ple"
      ]
    },
    "pronunciation": {
      "all": "ɪɡ'zæmpəl"
    },
    "frequency": 4.67
  }`;


const myObj = JSON.parse(myJson);

let resultbtn = document.getElementById('resultbtn');
resultbtn.addEventListener('click', () => {
    populateresults();
})

function populateresults() {
    let results = myObj['results'];
    console.log(results);
    let html = "";
    results.forEach((element, index) => {
        html += ` 
      <div class="card-header" id="headingOne">
          <h5 class="mb-0">
              <button class="btn btn-link" data-toggle="collapse" data-target="#collaps${index}"
                  aria-expanded="true" aria-controls="collapse${index}">
                  RESULTS ${index + 1}
              </button>
          </h5>
      </div>

      <div id="collaps${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#accordion">
          <div class="card-body">
              <p>
                <a class="btn btn-info" data-toggle="collapse" href="#multiCollapseExample1"
                      role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Definition</a>
                 
                <button class="btn btn-info" type="button" data-toggle="collapse"
                      data-target="#multiCollapseExample2" aria-expanded="false"
                      aria-controls="multiCollapseExample2">Synonyms</button>
                <button class="btn btn-info" type="button" data-toggle="collapse"
                      data-target="#multiCollapseExample3" aria-expanded="false"
                      aria-controls="multiCollapseExample3">TypeOf</button>
                <button class="btn btn-info" type="button" data-toggle="collapse"
                      data-target="#multiCollapseExample4" aria-expanded="false"
                      aria-controls="multiCollapseExample4">HasTypes</button>
                <button class="btn btn-info" type="button" data-toggle="collapse"
                      data-target="#multiCollapseExample5" aria-expanded="false"
                      aria-controls="multiCollapseExample5">Examples</button>
                <button class="btn btn-info" type="button" data-toggle="collapse"
                      data-target=".multi-collapse" aria-expanded="false"
                      aria-controls="multiCollapseExample1 multiCollapseExample2 multiCollapseExample3 multiCollapseExample4 multiCollapseExample5  ">All</button>
              </p>
              <div class="row">
                  <div class="col">
                      <div class="collapse multi-collapse" id="multiCollapseExample1">
                          <div class="card card-body">
                              <h4> Definition</h4>
                              <p>
                              ${element.definition}
                          </p>
                          </div>
                      </div>
                  </div>
                  <div class="col">
                      <div class="collapse multi-collapse" id="multiCollapseExample2">
                          <div class="card card-body">
                              <h4> Synonyms</h4>
                              ${element.synonyms}
                          </div>
                      </div>
                  </div>
                  <div class="col">
                      <div class="collapse multi-collapse" id="multiCollapseExample3">
                          <div class="card card-body">
                              <h4> TypeOf</h4>
                            
                              ${element.typeOf}
                             
                          </div>
                      </div>
                  </div>
                  <div class="col">
                      <div class="collapse multi-collapse" id="multiCollapseExample4">
                          <div class="card card-body">
                              <h4> HasTypes</h4>
                              ${element.hasTypes}
                              
                          </div>
                      </div>
                  </div>
                  <div class="col">
                      <div class="collapse multi-collapse" id="multiCollapseExample5">
                          <div class="card card-body">
                              <h4> Examples</h4>
                              ${element.examples}
                             
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>`;
    });
    let result = document.getElementById('result');
    result.innerHTML = html;
}




// let syllablebtn = document.getElementById('syllablebtn')
// syllablebtn.addEventListener('click', () => {
//     populatesyllables();
// })

// function populatesyllables() {
//     let syllables = myObj['syllables'];
//     let html = "";
//     syllables((element, index) => {
//         html += ` gyftghb`;
//     });
//     let syllable = document.getElementById('syllable');
//     syllable.innerHTML = html;
// }



// // console.log(example.results);

// // url = "dictionary.txt"

// const xhr = new XMLHttpRequest();
// xhr.open('GET', `dictionary.txt`, true);
// // console.log(example);


// xhr.onload = function () {
//     if (this.status === 200) {
//         let json = JSON.parse(myJson);
//         let results = json.results;
//         console.log(results);
//         let newsHtml = "";

//         results.forEach(function (element, index) {

//             // console.log(element, index);
//             let news = `
//                         <div class="card">
//                             <div class="card-header" id="heading${index}">
//                                 <h5 class="mb-0">
//                                     <button class="btn btn-link collapsed"  data-toggle="collapse" data-target="#collapse${index}"
//                                         aria-expanded="true" aria-controls="collaps${index}">
//                                         <b>Braking News ${index + 1}:</b> ${element["title"]}
//                                     </button>
//                                 </h5>
//                             </div>

//                             <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}" data-parent="#newsAcodion">
//                                 <div class="card-body">
//                                    ${element["content"]}.<a href="${element["url"]}" target="_blank" > Read more here</a>
//                                 </div>
//                             </div>
//                         </div> `;

//             newsHtml += news;
//         });
//         newsAcodion.innerHTML = newsHtml;
//     }
//     else {
//         console.log("Some error occured")
//     }
// }


// xhr.send();