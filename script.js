let questions = [
    {
        "question": "Was ist die Hauptstadt von Spanien?",
        "answer_1": "Barcelona",
        "answer_2": "Bilbao",
        "answer_3": "Madrid",
        "answer_4": "Grenada",
        "right_answer": 3
    },
    {
        "question": "Was ist die Landeshauptstadt von Baden-Württemberg?",
        "answer_1": "Karlsruhe",
        "answer_2": "Stuttgart",
        "answer_3": "Mannheim",
        "answer_4": "Freiburg",
        "right_answer": 2
    },
    {
        "question": "Was das flächenmäßig größte Land der Erde?",
        "answer_1": "China",
        "answer_2": "USA",
        "answer_3": "Indien",
        "answer_4": "Russland",
        "right_answer": 4
    },
    {
        "question": "Was ist die Landeshauptstadt von Niedersachsen?",
        "answer_1": "Hannover",
        "answer_2": "Wolfsburg",
        "answer_3": "Osnabrück",
        "answer_4": "Braunschweig",
        "right_answer": 1
    },
    {
        "question": "Was ist die Hauptstadt von Australien?",
        "answer_1": "Sydney",
        "answer_2": "Melbourne",
        "answer_3": "Adelaide",
        "answer_4": "Canberra",
        "right_answer": 4
    },
    {
        "question": "Was ist die Hauptstadt von der Niederlande?",
        "answer_1": "Eindhoven",
        "answer_2": "Amsterdam",
        "answer_3": "Rotterdam",
        "answer_4": "Den Haag",
        "right_answer": 2
    },
    {
        "question": "Was ist die Hauptstadt von Italien?",
        "answer_1": "Rom",
        "answer_2": "Turin",
        "answer_3": "Mailand",
        "answer_4": "Venedig",
        "right_answer": 1
    },
    {
        "question": "Welche ist keine Hauptstadt in Südamerika?",
        "answer_1": "Brasilia",
        "answer_2": "Rio de Janeiro",
        "answer_3": "Buenos Aires",
        "answer_4": "Lima",
        "right_answer": 2
    },
    {
        "question": "Was ist die Landeshauptstadt von Thüringen?",
        "answer_1": "Jena",
        "answer_2": "Weimar",
        "answer_3": "Gera",
        "answer_4": "Erfurt",
        "right_answer": 4
    },
    {
        "question": "Welche ist keine Hauptstadt in Asien?",
        "answer_1": "Jakarta",
        "answer_2": "Manila",
        "answer_3": "Ulaanbaatar",
        "answer_4": "Shanghai",
        "right_answer": 4
    },
    {
        "question": "Welche ist keine Hauptstadt in Europa?",
        "answer_1": "Oslo",
        "answer_2": "Malmö",
        "answer_3": "Prag",
        "answer_4": "Budapest",
        "right_answer": 2
    },
    {
        "question": "Welche ist keine Hauptstadt in Europa?",
        "answer_1": "Bukarest",
        "answer_2": "Chisinau",
        "answer_3": "Manchester",
        "answer_4": "Wien",
        "right_answer": 3
    },
    {
        "question": "Was ist die Landeshauptstadt von Sachsen?",
        "answer_1": "Leipzig",
        "answer_2": "Chemnitz",
        "answer_3": "Zwickau",
        "answer_4": "Dresden",
        "right_answer": 4
    },
    {
        "question": "Was ist die Landeshauptstadt von Rheinland-Pflaz?",
        "answer_1": "Mainz",
        "answer_2": "Kaiserslautern",
        "answer_3": "Trier",
        "answer_4": "Worms",
        "right_answer": 1
    },
    {
        "question": "Was ist die Landeshauptstadt von Nordrhein-Westfalen?",
        "answer_1": "Düsseldorf",
        "answer_2": "Dortmund",
        "answer_3": "Essen",
        "answer_4": "Köln",
        "right_answer": 1
    },
    {
        "question": "Was ist die Landeshauptstadt von Hessen?",
        "answer_1": "Darmstadt",
        "answer_2": "Frankfurt",
        "answer_3": "Wiesbaden",
        "answer_4": "Kassel",
        "right_answer": 3
    },
    {
        "question": "Welche ist keine Hauptstadt in Afrika?",
        "answer_1": "Rabat",
        "answer_2": "Accra",
        "answer_3": "Alexandria",
        "answer_4": "Tunis",
        "right_answer": 3
    },
    {
        "question": "Welche ist keine Hauptstadt auf der Arabischen Halbinsel?",
        "answer_1": "Riad",
        "answer_2": "Doha",
        "answer_3": "Abu Dhabi",
        "answer_4": "Dubai",
        "right_answer": 4
    },
];

// Wir holen die  "Nullte" Stelle aus dem JSON Array
let currentQuestion = 0;
let rightQuestions = 0;
let AUDIO_SUCCESS = new Audio('audio/success.wav');
let AUDIO_FAIL = new Audio('audio/fail.wav');


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}


function showQuestion() {
    if (currentQuestion >= questions.length) { // show end screen
        showEndscreen();
    } else { // show question
        updateToNextQuestion();
    }
}


function showEndscreen() {
    document.getElementById('end-screen').style = ''; // Damit entfernen wir den style (hier wird display:none entfernt)
    document.getElementById('question-body').style = 'display: none';

    document.getElementById('total-qeuestions').innerHTML = questions.length;
    document.getElementById('right-questions').innerHTML = rightQuestions;
    document.getElementById('header-image').src = 'img/medal.jpg';
}


function updateToNextQuestion() {
    let percent = (currentQuestion + 1) / questions.length ;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style = `width: ${percent}%;`;   

    let question = questions[currentQuestion]; // Wir holen aus dem Array questions den aktuellen JSON(currentQuestion, hier 0)
    
    question['question']; // Wi holen die Frage aus dem JSON questions
    document.getElementById('question-text').innerHTML = question['question']; // Wir holen per ID('question-text) die Card mit der Frage und lassne die aktuelle Frage dort anzeigen
    document.getElementById('answer_1').innerHTML = question['answer_1']; // Per ID 'answer_1 bis 4'
    document.getElementById('answer_2').innerHTML = question['answer_2']; // holen wir die jew. Antwort-Card
    document.getElementById('answer_3').innerHTML = question['answer_3']; // und lassen die jew. Antwort dort
    document.getElementById('answer_4').innerHTML = question['answer_4']; // anzeigen (qeustion['answer_1 bis 4]')
    document.getElementById('question-number').innerHTML = currentQuestion + 1; // Hiermit wird die Numemr der aktuellen Frage angezeigt
}

// In der Variable selection stecken answer_1 bis answer_4
function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1); // Damit greifen wir auf den letzten Buchstaben des Strings im Array(hier auf die "Zahl" hinter answer_)
    // Die richtige Antwort in einer variable; die variable question greift auf das jew. JSON Array zu
    let idOfRightAnswer = `answer_${question['right_answer']}`;


    // Wir finden so heraus, auf welche Antwort der User klickt ( per selectedQuestionNumber greifen wir auf die letzte Stelle von answer zu )
    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');// parentNode greift auf das parent element zu.
        document.getElementById('next-button').disabled = false;
        AUDIO_SUCCESS.play();
        rightQuestions++;
    } else { // somit wollen wir der parent div eine Klasse hinzufügen per classList.add
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success'); // So lassen wir uns nach einer falschen Antwort die richtige anzeigen
        AUDIO_FAIL.play();

        document.getElementById('next-button').disabled = false; // der Button für die nächste Frage wird wieder friegegeben
    }  // nachdem wir auf eine ANtwort geklickt haben
}


function nextQuestion(selectedQuestionNumber) {
    currentQuestion++; // DIe Variable wir immer um 1 erhöht (z.B. von 0 auf 1, von 1 auf 2 usw)
    document.getElementById('next-button').disabled = true; // Der 'Nächste Frage' Button wird wieder disabled
    resetAnswerButtons(); // Diese Funktion bewirktm dass die Antwortz Buttons dereen Hintergrundfarbe nach dem Natworten verschwindet (bg-succes und bg-danger)
    showQuestion(); // Danach wird die Funktion showQuesiton wieder aufgerufen
}


function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

// Funktion um das Spiel neu zu starten
function restartGame() {
    document.getElementById('header-image').src = 'img/geo.jpg';
    document.getElementById('question-body').style = ''; // question-body wieder anzeigen 
    document.getElementById('end-screen').style = 'display: none'; // end-screen ausblenden
    currentQuestion = 0;
    rightQuestions = 0;

    init();
}