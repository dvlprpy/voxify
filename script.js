let muteMic = document.querySelector(".bi-mic-mute-fill");
let unmuteMic = document.querySelector(".bi-mic-fill");
let micDesc = document.querySelector(".description-mic");
let voiceLang = document.querySelector("#select-lang");
let voiceResult = document.querySelector(".speechResult");
let micState = 0



function checkPre(param) {
    // console.log(param.classList[1]);

    if (param.classList[1] == "bi-mic-mute-fill") {
        if (voiceLang.value != "Language:") {
            param.classList.replace("bi-mic-mute-fill", "bi-mic-fill");
            micDesc.innerHTML = "listening...";
            startSpeech2Text(voiceLang.value, "start");
        }else{
            window.alert('To use our services, you must first select your voice language.')
        }
    } else if (param.classList[1] == "bi-mic-fill") {
        param.classList.replace("bi-mic-fill", "bi-mic-mute-fill");
        micDesc.innerHTML = "The speech-to-text feature is only supported in the Chrome browser.";
        stopSpeech2Text();
    }
}

let recognition;
function startSpeech2Text(lang) {

    recognition = new webkitSpeechRecognition();
    switch (lang) {
        case "Iran":
        case "iran":
            recognition.lang = "fa-IR"
            voiceResult.classList.remove("english-voice")
            voiceResult.classList.add("persian-voice");
            break;
        case "usa":
            voiceResult.classList.remove("persian-voice")
            voiceResult.classList.add("english-voice");
            recognition.lang = "en-US";
            break;
        case "uk":
            voiceResult.classList.remove("persian-voice")
            voiceResult.classList.add("english-voice");
            recognition.lang = "en-GB"
            break;
        default:
            break;
    }
    recognition.interimResults = true;
    recognition.continuous = true;

    let previousTranscript = '';
    recognition.onresult = function (event) {
        let transcript = '';
        const resultIndex = event.resultIndex;
         transcript = event.results[resultIndex][0].transcript;
         previousTranscript = transcript + " "; 
        voiceResult.textContent = previousTranscript;
    };

    recognition.onerror = function (event) {
        console.error('Recognition error:', event.error);
    };
    recognition.start();
}

function stopSpeech2Text() {
    if(recognition){
        recognition.stop();
    }else{
        console.log("recognition is not defined");
    }
}


function applyStyle(style) {
    let textarea = document.querySelector("#myTextArea");
    switch (style) {
        // 1: bold
        case "bold":
            textarea.style.fontWeight = "bold";
            break;
        // 2: italic
        case "italic":
            textarea.style.fontStyle = "italic";
            break;
        // 3: underline
        case "underline":
            textarea.style.textDecoration = "underline";
            break;
        // 4: justify text
        case "justify":
            textarea.style.textAligm = "justify";
            break;
        // 5: justify left 
        case "justify-left":
            textarea.style.textAligm = "left";
            break;
        // 6: justify right
        case "justify-right":
            textarea.style.textAligm = "right";
            break;
        // 7: justify center
        case "justify-center":
            textarea.style.textAligm = "center";
            break;
        // 8: lowercase 
        case "lower-case":
            textarea.style.textTransform = "lowercase";
            break;
        // 9: uppercase
        case "upper-case":
            textarea.style.textTransform = "uppercase";
            break;
        // 10: capitalize
        case "capitalize":
            textarea.style.textTransform = "capitalize";
            break;
        // 11: direction ltr
        case "direction-ltr":
            textarea.style.direction = "ltr";
            break;
        // 12: direction rtl
        case "direction-rtl":
            textarea.style.direction = "rtl";
            break;
            
        default:
            break;
    }
}

function removeStyle(style) {
    let textarea = document.querySelector("#myTextArea");
    switch (style) {
        // 1: bold
        case "bold":
            textarea.style.fontWeight = "";
            break;
        // 2: italic
        case "italic":
            textarea.style.fontStyle = "";
            break;
        // 3: underline
        case "underline":
            textarea.style.textDecoration = "";
            break;
        // 4: justify text
        case "justify":
            textarea.style.textAligm = "";
            break;
        // 5: justify left 
        case "justify-left":
            textarea.style.textAligm = "";
            break;
        // 6: justify right
        case "justify-right":
            textarea.style.textAligm = "";
            break;
        // 7: justify center
        case "justify-center":
            textarea.style.textAligm = "";
            break;
        // 8: lowercase 
        case "lower-case":
            textarea.style.textTransform = "";
            break;
        // 9: uppercase
        case "upper-case":
            textarea.style.textTransform = "";
            break;
        // 10: capitalize
        case "capitalize":
            textarea.style.textTransform = "";
            break;
        // 11: direction ltr
        case "direction-ltr":
            textarea.style.direction = "";
            break;
        // 12: direction rtl
        case "direction-rtl":
            textarea.style.direction = "";
            break;
            
        default:
            break;
    }
}



function formatDoc(cmd, value=null) {
	if(value) {
		window.execCommand(cmd, false, value);
	} else {
		// document.querySelector("#myTextArea").execCommand(cmd);
		window.execCommand(cmd);
	}
}