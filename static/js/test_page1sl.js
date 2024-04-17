//this would be the object shape for storing the questions  
//you can change the questions to your own taste or even add more questions..
const questions = [
        {
            "question": "What is a primary key in a database?",
            "optionA": "A key used for opening the database",
            "optionB": "A unique identifier for each record in a table",
            "optionC": "A key used for primary operations like CRUD",
            "optionD": "A key used for secondary indexing",
            "correctOption": "optionB"
        },
        {
            "question": "What is the purpose of SQL?",
            "optionA": "To design user interfaces",
            "optionB": "To manage databases and query data",
            "optionC": "To create graphical assets for applications",
            "optionD": "To write programming scripts",
            "correctOption": "optionB"
        },
        {
            "question": "What is normalization in DBMS?",
            "optionA": "Converting data into normal forms",
            "optionB": "Denormalizing the database schema",
            "optionC": "Optimizing queries for faster execution",
            "optionD": "Creating redundant data",
            "correctOption": "optionA"
        },
   
        {
            "question": "What is the first phase of the SDLC?",
            "optionA": "Testing",
            "optionB": "Maintenance",
            "optionC": "Planning",
            "optionD": "Design",
            "correctOption": "optionC"
        },
        {
            "question": "What is the waterfall model in SDLC?",
            "optionA": "A linear sequential approach",
            "optionB": "An iterative approach",
            "optionC": "A collaborative approach",
            "optionD": "An incremental approach",
            "correctOption": "optionA"
        },
        {
            "question": "What is prototyping in SDLC?",
            "optionA": "Developing the final product directly",
            "optionB": "Creating a simplified version of the system",
            "optionC": "Testing the system rigorously",
            "optionD": "Documenting the system requirements",
            "correctOption": "optionB"
        },
        {
            "question": "What is a kernel in an operating system?",
            "optionA": "The outer layer of the OS",
            "optionB": "The central component that manages resources",
            "optionC": "The user interface of the OS",
            "optionD": "The file management system",
            "correctOption": "optionB"
        },
        {
            "question": "What is virtual memory?",
            "optionA": "Physical memory installed on a computer",
            "optionB": "Memory allocated temporarily on the hard disk",
            "optionC": "Memory accessed through a virtual machine",
            "optionD": "Memory used for virtual machines",
            "correctOption": "optionB"
        },
        {
            "question": "What is multitasking in operating systems?",
            "optionA": "Running multiple programs simultaneously",
            "optionB": "Executing one program at a time",
            "optionC": "Managing multiple processors",
            "optionD": "Running multiple instances of the same program",
            "correctOption": "optionA"
        },
        {
            "question": "What is the purpose of software architecture?",
            "optionA": "To design user interfaces",
            "optionB": "To provide a blueprint for building software systems",
            "optionC": "To manage databases",
            "optionD": "To develop algorithms",
            "correctOption": "optionB"
        },
        {
            "question": "What is MVC architecture?",
            "optionA": "Model, View, Component",
            "optionB": "Model, View, Controller",
            "optionC": "Module, View, Component",
            "optionD": "Model, Visual, Controller",
            "correctOption": "optionB"
        },
        {
            "question": "What is a design pattern in software design?",
            "optionA": "A common solution to a recurring problem",
            "optionB": "A unique approach to software development",
            "optionC": "A graphical representation of software modules",
            "optionD": "A type of software testing",
            "correctOption": "optionA"
        },
        {
            "question": "What does 'encapsulation' mean in OOP?",
            "optionA": "Hiding implementation details",
            "optionB": "Extending a class",
            "optionC": "Inheriting properties from a parent class",
            "optionD": "Creating objects",
            "correctOption": "optionA"
        },
        {
            "question": "What is inheritance in OOP?",
            "optionA": "A mechanism for code reuse",
            "optionB": "A way to hide data",
            "optionC": "A method for encapsulation",
            "optionD": "A way to create new classes",
            "correctOption": "optionA"
        },
        {
            "question": "What is polymorphism in OOP?",
            "optionA": "The ability to inherit multiple classes",
            "optionB": "The ability to have multiple constructors",
            "optionC": "The ability to have multiple forms",
            "optionD": "The ability to override methods",
            "correctOption": "optionC"
        },
        {
            "question": "What is encryption?",
            "optionA": "The process of converting plaintext into ciphertext",
            "optionB": "The process of decrypting ciphertext",
            "optionC": "The process of generating keys",
            "optionD": "The process of authenticating users",
            "correctOption": "optionA"
        },
        {
            "question": "What is a symmetric encryption algorithm?",
            "optionA": "An algorithm that uses two keys",
            "optionB": "An algorithm that uses the same key for encryption and decryption",
            "optionC": "An algorithm that is only used for decryption",
            "optionD": "An algorithm that is used for public key cryptography",
            "correctOption": "optionB"
        },
        {
            "question": "What is a digital signature?",
            "optionA": "A scanned image of a handwritten signature",
            "optionB": "A unique identifier for a digital document",
            "optionC": "A hash value encrypted with a private key",
            "optionD": "A timestamp for a digital document",
            "correctOption": "optionC"
        },
        {
            "question": "What is a firewall?",
            "optionA": "A physical barrier around a network",
            "optionB": "A software or hardware-based security system",
            "optionC": "A protocol for secure communication",
            "optionD": "A method for data encryption",
            "correctOption": "optionB"
        },
        {
            "question": "What is an intrusion detection system (IDS)?",
            "optionA": "A system for encrypting data",
            "optionB": "A system for monitoring network traffic and detecting suspicious activity",
            "optionC": "A system for filtering spam emails",
            "optionD": "A system for managing digital certificates",
            "correctOption": "optionB"
        },
        {
            "question": "What is VPN?",
            "optionA": "Virtual Private Network",
            "optionB": "Volatile Private Network",
            "optionC": "Virtual Public Network",
            "optionD": "Volatile Public Network",
            "correctOption": "optionA"
        },
        {
            "question": "What is the purpose of security policies?",
            "optionA": "To slow down network traffic",
            "optionB": "To enforce rules and guidelines for security practices",
            "optionC": "To increase network bandwidth",
            "optionD": "To limit user access to the network",
            "correctOption": "optionB"
        },
        {
            "question": "What is two-factor authentication (2FA)?",
            "optionA": "A method of encrypting data",
            "optionB": "A method of authenticating users using two different factors",
            "optionC": "A method of securing physical locations",
            "optionD": "A method of encrypting communication channels",
            "correctOption": "optionB"
        },
        {
            "question": "What is a security audit?",
            "optionA": "A review of security measures to identify vulnerabilities",
            "optionB": "A simulation of a security breach",
            "optionC": "A test of backup systems",
            "optionD": "A test of disaster recovery procedures",
            "correctOption": "optionA"
        },
        {
            "question": "What is vulnerability assessment?",
            "optionA": "Testing network speed",
            "optionB": "Identifying weaknesses in a system",
            "optionC": "Ensuring 100% uptime",
            "optionD": "Enhancing network aesthetics",
            "correctOption": "optionB"
        },
        {
            "question": "What is penetration testing?",
            "optionA": "Testing user interfaces",
            "optionB": "Testing the strength of physical barriers",
            "optionC": "Simulating cyber attacks",
            "optionD": "Testing backup systems",
            "correctOption": "optionC"
        },
        {
            "question": "What is the difference between vulnerability assessment and penetration testing?",
            "optionA": "There is no difference",
            "optionB": "Vulnerability assessment focuses on identifying weaknesses, while penetration testing involves exploiting those weaknesses",
            "optionC": "Penetration testing focuses on identifying weaknesses, while vulnerability assessment involves exploiting those weaknesses",
            "optionD": "Vulnerability assessment involves physical testing, while penetration testing involves digital testing",
            "correctOption": "optionB"
        },
        {
            "question": "What is SIEM?",
            "optionA": "A system for managing network speed",
            "optionB": "A system for ensuring 100% uptime",
            "optionC": "A system for collecting, analyzing, and managing security data",
            "optionD": "A system for enhancing network aesthetics",
            "correctOption": "optionC"
        },
        {
            "question": "What is the primary function of SIEM?",
            "optionA": "To test user interfaces",
            "optionB": "To monitor network traffic",
            "optionC": "To analyze security information and events",
            "optionD": "To manage physical barriers",
            "correctOption": "optionC"
        },
        {
            "question": "What does SIEM help organizations with?",
            "optionA": "Speed optimization",
            "optionB": "Ensuring 100% uptime",
            "optionC": "Detecting and responding to security threats",
            "optionD": "Enhancing network aesthetics",
            "correctOption": "optionC"
        },
        {
            "question": "What is IAM?",
            "optionA": "A system for managing network speed",
            "optionB": "A system for ensuring 100% uptime",
            "optionC": "A system for managing user identities and their access to resources",
            "optionD": "A system for enhancing network aesthetics",
            "correctOption": "optionC"
        },
        {
            "question": "What is the purpose of IAM?",
            "optionA": "To test user interfaces",
            "optionB": "To monitor network traffic",
            "optionC": "To manage user access to resources securely",
            "optionD": "To manage physical barriers",
            "correctOption": "optionC"
        },
        {
            "question": "What does IAM help organizations with?",
            "optionA": "Speed optimization",
            "optionB": "Ensuring 100% uptime",
            "optionC": "Managing identities and access to resources effectively",
            "optionD": "Enhancing network aesthetics",
            "correctOption": "optionC"
        },
        {
            "question": "What is a data structure?",
            "optionA": "A way to organize and store data",
            "optionB": "A method for increasing network speed",
            "optionC": "A technique for ensuring 100% uptime",
            "optionD": "A method for enhancing network aesthetics",
            "correctOption": "optionA"
        },
        {
            "question": "What is an algorithm?",
            "optionA": "A tool for monitoring network traffic",
            "optionB": "A set of instructions for solving a problem",
            "optionC": "A method for securing data",
            "optionD": "A technique for improving user interfaces",
            "correctOption": "optionB"
        },
        {
            "question": "What is the time complexity of bubble sort?",
            "optionA": "O(n)",
            "optionB": "O(log n)",
            "optionC": "O(n^2)",
            "optionD": "O(n!)",
            "correctOption": "optionC"
        },
        {
            "question": "What is deep learning?",
            "optionA": "A type of machine learning",
            "optionB": "A method for increasing network speed",
            "optionC": "A technique for ensuring 100% uptime",
            "optionD": "A method for enhancing network aesthetics",
            "correctOption": "optionA"
        },
        {
            "question": "What is a neural network?",
            "optionA": "A network of computers",
            "optionB": "A network for ensuring 100% uptime",
            "optionC": "A computational model inspired by the human brain",
            "optionD": "A method for improving user interfaces",
            "correctOption": "optionC"
        },
        {
            "question": "What is backpropagation?",
            "optionA": "A method for increasing network speed",
            "optionB": "A technique for ensuring 100% uptime",
            "optionC": "A method for adjusting weights in a neural network",
            "optionD": "A technique for enhancing network aesthetics",
            "correctOption": "optionC"
        },
        {
            "question": "What is data preprocessing?",
            "optionA": "A method for increasing network speed",
            "optionB": "A technique for cleaning and transforming raw data",
            "optionC": "A method for ensuring 100% uptime",
            "optionD": "A technique for enhancing network aesthetics",
            "correctOption": "optionB"
        },
        {
            "question": "What is feature engineering?",
            "optionA": "A method for monitoring network traffic",
            "optionB": "A technique for creating new features from existing data",
            "optionC": "A method for securing data",
            "optionD": "A technique for improving user interfaces",
            "correctOption": "optionB"
        },
        {
            "question": "What is normalization in data preprocessing?",
            "optionA": "Converting data into normal forms",
            "optionB": "Denormalizing the data",
            "optionC": "Optimizing queries for faster execution",
            "optionD": "Creating redundant data",
            "correctOption": "optionA"
        },
        {
            "question": "What is data wrangling?",
            "optionA": "A method for increasing network speed",
            "optionB": "A process of cleaning and organizing raw data",
            "optionC": "A technique for ensuring 100% uptime",
            "optionD": "A method for enhancing network aesthetics",
            "correctOption": "optionB"
        },
        {
            "question": "What is missing data imputation?",
            "optionA": "A method for monitoring network traffic",
            "optionB": "A technique for handling missing values in data",
            "optionC": "A method for securing data",
            "optionD": "A technique for improving user interfaces",
            "correctOption": "optionB"
        },
        {
            "question": "What is outlier detection?",
            "optionA": "Identifying unusual data points",
            "optionB": "Monitoring network traffic",
            "optionC": "Securing data transmission",
            "optionD": "Enhancing network aesthetics",
            "correctOption": "optionA"
        },
        {
            "question": "What is data exploration?",
            "optionA": "A method for increasing network speed",
            "optionB": "A process of analyzing and understanding data",
            "optionC": "A technique for ensuring 100% uptime",
            "optionD": "A method for enhancing network aesthetics",
            "correctOption": "optionB"
        },
        {
            "question": "What is data visualization?",
            "optionA": "A method for monitoring network traffic",
            "optionB": "A technique for representing data visually",
            "optionC": "A method for securing data",
            "optionD": "A technique for improving user interfaces",
            "correctOption": "optionB"
        },
        {
            "question": "What is the purpose of histograms in data visualization?",
            "optionA": "Displaying temporal data",
            "optionB": "Showing the distribution of numerical data",
            "optionC": "Representing geographic data",
            "optionD": "Enhancing network aesthetics",
            "correctOption": "optionB"
        },
        {
            "question": "What is machine learning?",
            "optionA": "A method for increasing network speed",
            "optionB": "A branch of artificial intelligence that enables computers to learn from data",
            "optionC": "A technique for ensuring 100% uptime",
            "optionD": "A method for enhancing network aesthetics",
            "correctOption": "optionB"
        },
        {
            "question": "What is supervised learning?",
            "optionA": "Learning with labeled data",
            "optionB": "Learning without any supervision",
            "optionC": "Learning from scratch",
            "optionD": "Learning without any data",
            "correctOption": "optionA"
        },
        {
            "question": "What is unsupervised learning?",
            "optionA": "Learning with labeled data",
            "optionB": "Learning without any supervision",
            "optionC": "Learning from scratch",
            "optionD": "Learning without any data",
            "correctOption": "optionB"
        },
        {
            "question": "What is calculus?",
            "optionA": "A branch of mathematics that deals with continuous change",
            "optionB": "A method for increasing network speed",
            "optionC": "A technique for ensuring 100% uptime",
            "optionD": "A method for enhancing network aesthetics",
            "correctOption": "optionA"
        },
        {
            "question": "What is linear algebra?",
            "optionA": "A method for increasing network speed",
            "optionB": "A branch of mathematics that deals with vector spaces and linear mappings between such spaces",
            "optionC": "A technique for ensuring 100% uptime",
            "optionD": "A method for enhancing network aesthetics",
            "correctOption": "optionB"
        },
        {
            "question": "What is probability theory?",
            "optionA": "A method for increasing network speed",
            "optionB": "A branch of mathematics that deals with uncertainty",
            "optionC": "A technique for ensuring 100% uptime",
            "optionD": "A method for enhancing network aesthetics",
            "correctOption": "optionB"
        },
        {
            "question": "What is Excel?",
            "optionA": "A method for increasing network speed",
            "optionB": "A spreadsheet software",
            "optionC": "A technique for ensuring 100% uptime",
            "optionD": "A method for enhancing network aesthetics",
            "correctOption": "optionB"
        },
        {
            "question": "What is a formula in Excel?",
            "optionA": "A method for increasing network speed",
            "optionB": "An expression that performs calculations on values in a worksheet",
            "optionC": "A technique for ensuring 100% uptime",
            "optionD": "A method for enhancing network aesthetics",
            "correctOption": "optionB"
        },
        {
            "question": "What is a pivot table?",
            "optionA": "A method for increasing network speed",
            "optionB": "A data summarization tool",
            "optionC": "A technique for ensuring 100% uptime",
            "optionD": "A method for enhancing network aesthetics",
            "correctOption": "optionB"
        },
        {
            "question": "What is a database?",
            "optionA": "A method for increasing network speed",
            "optionB": "A structured collection of data",
            "optionC": "A technique for ensuring 100% uptime",
            "optionD": "A method for enhancing network aesthetics",
            "correctOption": "optionB"
        },
        {
            "question": "What is SQL?",
            "optionA": "A method for increasing network speed",
            "optionB": "Structured Query Language, used for managing databases",
            "optionC": "A technique for ensuring 100% uptime",
            "optionD": "A method for enhancing network aesthetics",
            "correctOption": "optionB"
        },
        {
            "question": "What is normalization?",
            "optionA": "A method for increasing network speed",
            "optionB": "The process of organizing data in a database efficiently",
            "optionC": "A technique for ensuring 100% uptime",
            "optionD": "A method for enhancing network aesthetics",
            "correctOption": "optionB"
        },
        {
            "question": "What are ethics in data analysis?",
            "optionA": "A method for increasing network speed",
            "optionB": "Principles and standards that govern the use of data",
            "optionC": "A technique for ensuring 100% uptime",
            "optionD": "A method for enhancing network aesthetics",
            "correctOption": "optionB"
        },
        {
            "question": "What is data privacy?",
            "optionA": "A method for increasing network speed",
            "optionB": "The protection of sensitive information from unauthorized access",
            "optionC": "A technique for ensuring 100% uptime",
            "optionD": "A method for enhancing network aesthetics",
            "correctOption": "optionB"
        },
        {
            "question": "What is bias in data analysis?",
            "optionA": "A method for increasing network speed",
            "optionB": "Systematic errors in data that can skew results",
            "optionC": "A technique for ensuring 100% uptime",
            "optionD": "A method for enhancing network aesthetics",
            "correctOption": "optionB"
        }
    

        
]







let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
var marklist = [] //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    const currentQuestion = questions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    // document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = questions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            // document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++//adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            marklist.push(1)
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            // document.getElementById(wrongLabelId).style.backgroundColor = "red"
            // document.getElementById(correctOption).style.backgroundColor = "green"
            marklist.push(0) //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <=1) {
            //displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null
    
    // condition check for player remark and remark color
    if (playerScore <= 20) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 20 && playerScore < 48) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 48) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }

    const playerGrade = (playerScore / 63) * 100
    //data to display to score board
    k=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('list-answers').innerHTML = k
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"
}


                                
                            
    



//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    marklist = []
    indexNumber = 0
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}

// Timer Function
function timer() {
    // Adjust the seconds to set the timer (Max Limit 3600)
    let reminingTime = 3600;
    let intervalID = setInterval(function () {
        // console.log(reminingTime--)
        reminingTime--
        // document.getElementById("timer").innerHTML = reminingTime

        convertTO(reminingTime);
        if (reminingTime == 0) {
            clearInterval(intervalID);
            alert("Time Up") // Call any fuction or redirect screen
        }
    }, 1000)
}


// Call the AJAX function when the document is ready
    // AJAX call function

    // Call the function to send POST request



// This function converts the seconds to Hour, Minutes and Seconds
// Max Limit 3600 Seconds.
function convertTO(sec) {
    var hours = (sec / 3600);
    let minutes = Math.trunc(sec / 60);
    let seconds = Math.trunc(sec % 60)
    // console.log(hours.toFixed(0) + " " + minutes.toFixed(0) + " " + seconds.toFixed(0))

    if (hours.toFixed(0) - 1 < 0) {
        document.getElementById("hours").innerHTML = 0;
    } else {
        document.getElementById("hours").innerHTML = hours.toFixed(0) - 1;
    }

    document.getElementById("minutes").innerHTML = minutes.toFixed(0)
    document.getElementById("seconds").innerHTML = seconds.toFixed(0)
}

timer()
