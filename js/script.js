window.addEventListener('load',showContent);

const creater ="Udit kumar";
const contentChange = document.querySelector("#inspiring-words");
const textForm = document.querySelector('.form-section-4');
const textInput = document.querySelector("#input-section-four");
const voiceSelect =document.querySelector('#voice-select');
const button =document.querySelector('#button-content-section-4');

let content = contentChange.textContent;
//array of words to show on screen
const words =[
    'Dream Big' ,
    'Inspire MIllions!',
    'Find What you love !',
    'Follow your Passion! ',
    'Listen to your Heart ',
    'Make Dream a Reality!',
    '~ Udit Kumar'
];
/*
console.log(words.length);
console.log(words[1]);
*/
//funcion for the content change 
function showContent() {
    
            words.forEach((word,index)=>{
            
                              task(index);
                              
                });
  
        }

function task(index) { 
        setTimeout( function(){
            document.getElementById('inspiring-words').innerHTML=words[index];
        },2200*index);  // delayof 2 seconds 
}

// Section -4 (Speaker function using SpeechSynthesis
//init SpeechSynth API
const synth =window.speechSynthesis; 

let voices=[];

const getVoices = () =>{
    voices = synth.getVoices();
    //LOOP Thorugh voices and create option for all
    voices.forEach(voice =>{
        //create option for element 
        const option  = document.createElement('option');
        // fill option with voices and language 
        option.textContent=voice.name + '(' + voice.lang + ')';
        option.setAttribute('data-lang',voice.lang);
        option.setAttribute('data-name',voice.name);
        // to see option tag : console.log(option)
        // to append the child (option tag  ) in the select tag (voiceSelect)
        voiceSelect.appendChild(option);
    });
}


if (synth.onvoiceschanged!==undefined){
    synth.onvoiceschanged=getVoices;
}

getVoices();
console.log('div');
console.log(textInput.value);
console.log(textForm);
console.log(voiceSelect);
console.log(voices);

// Speak 
const speak = ()=>{

    if (synth.speaking){
        synth.cancel();
        console.error("Already Speaking...");
        return;
}



if (textInput.value === ''){
    window.alert('Atleast Write Something In Box');

}
console.log('wtf');
if (textInput.value !== ''){
//Get Speak Text
let speakText = new SpeechSynthesisUtterance(textInput.value);
//Speak end
speakText.onend = e =>{
    console.log('Done Speaking');
}

                            
 //speak error 
 speakText.onerror = e =>{
    console.error('Something went wrong');
    
  }
                           
 // Selected voice 
 const  selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');

 //  loop through the voices 
 voices.forEach(voice=>{
     if (voice.name===selectedVoice){
         speakText.voice=voice;

     }

 });

   //set pitch and rate 
   speakText.rate = 0.7;
   speakText.pitch=1.2;

   //speak bcz everything is ready now
   synth.speak(speakText);
   speakText = new SpeechSynthesisUtterance("Hello, My friend , My name is Udit kumar . And I wanna tell you one thing that,Don't ever give up on your dream, if you feel alone or lost");
   synth.speak(speakText);
   speakText = new SpeechSynthesisUtterance("don't  be , Have some faith because I , believe in you . Try harder and Never give up,  until you make your dream a reality. All the best, and go for it buddy . You will succeed one day ") ;
   synth.speak(speakText);
      
           }                  
}

//EVENT lISTENER

//Text Form Submit when user hits the submit button
button.addEventListener('click',e=>{
   
    e.preventDefault();
    console.log("why");
    speak();
    
    textInput.blur();
});

//voice select change
voiceSelect.addEventListener('change',e=>speak());

                 