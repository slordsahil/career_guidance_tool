let shuffledQuestions = []; // Array to hold questions related to the top-scoring field

// Sample questions for Data Science field
const dataScienceQuestions = [
    {
        question: "Which of the following is an unsupervised learning algorithm?",
        optionA: "Decision Trees",
        optionB: "K-nearest Neighbors (KNN)",
        optionC: "Linear Regression",
        optionD: "K-means Clustering",
        correctOption: "D",
        field: "Data Science"
    },
    {
        question:"What is the purpose of cross-validation in machine learning?",
        optionA: "To train the model on multiple datasets",
        optionB:" To validate the model on unseen data",
        optionC: " To select the best hyperparameters for the model",
        optionD: "All of the above" ,
        correctOption: "D",
        field: "Data Science"
    },
    {
        question:" Which evaluation metric is appropriate for imbalanced classification problems?",
        optionA: "Accuracy",
        optionB:" Precision",
        optionC: " F1-score",
        optionD: "All of the above" ,
        correctOption: "D",
        field: "Data Science"
    }, 
    {
        question:"Which algorithm is used for feature selection by recursively removing the least important feature?",
        optionA: " PCA (Principal Component Analysis)",
        optionB:" LDA (Linear Discriminant Analysis)",
        optionC: " RFE (Recursive Feature Elimination)",
        optionD: " K-means Clustering" ,
        correctOption: "C",
        field: "Data Science"
    },
    {
        question:"In deep learning, which activation function is commonly used for the output layer in a binary classification problem?",
        optionA: "Sigmoid",
        optionB:"ReLU",
        optionC: "Tanh",
        optionD: "Softmax" ,
        correctOption: "A",
        field: "Data Science"
    },
    {
        question:"Which statistical test is used to determine if there is a significant difference between the means of multiple groups?",
        optionA: " Student's t-test",
        optionB:" ANOVA (Analysis of Variance)",
        optionC: " Chi-square test",
        optionD: " Mann-Whitney U test" ,
        correctOption: "B",
        field: "Data Science"
    },
    {
        question:"Which algorithm is used for dimensionality reduction while preserving the maximum variance in the data?",
        optionA: "PCA (Principal Component Analysis)",
        optionB:"LDA (Linear Discriminant Analysis)",
        optionC: "t-SNE (t-Distributed Stochastic Neighbor Embedding)",
        optionD: "ICA (Independent Component Analysis)" ,
        correctOption: "A",
        field: "Data Science"
    },
    {
        question:"Which technique is used to handle missing data by filling in missing values with the mean or median of the column?",
        optionA: "Mean imputation",
        optionB:"Mode imputation",
        optionC: "K-nearest neighbors imputation",
        optionD: "Random forest imputation" ,
        correctOption: "A",
        field: "Data Science"
    },
    {
        question:"Which algorithm is commonly used for text classification tasks such as sentiment analysis?",
        optionA: "Naive Bayes",
        optionB:"Decision Trees",
        optionC: "K-means Clustering",
        optionD: "Linear Regression" ,
        correctOption: "A",
        field: "Data Science"
    },
    {
        question:"Which algorithm is commonly used for recommendation systems and collaborative filtering?",
        optionA: "K-means Clustering",
        optionB:"Singular Value Decomposition (SVD)",
        optionC: "Linear Regression",
        optionD: "Support Vector Machines (SVM)" ,
        correctOption: "B",
        field: "Data Science"
    },
];
const aimlQuestions = [
    {
        question:" Which of the following is a characteristic of ensemble learning algorithms?",
        optionA: "They rely on a single model for predictions",
        optionB:"They are not suitable for high-dimensional data",
        optionC: "They combine the predictions of multiple models to improve performance",
        optionD: "They require large amounts of labeled data" ,
        correctOption: "C",
        field: "AI & ML"
    },
    {
        question:"What is the purpose of regularization in machine learning?",
        optionA: "To increase model complexity",
        optionB:"To decrease model variance",
        optionC: "To prevent overfitting by penalizing large parameter values",
        optionD: "To speed up model training" ,
        correctOption: "C",
        field: "AI & ML"
    },
    {
        question:"Which of the following algorithms is suitable for handling imbalanced datasets?",
        optionA: "Support Vector Machines (SVM)",
        optionB:"Logistic Regression",
        optionC: "Random Forest",
        optionD: "k-Nearest Neighbors (kNN)" ,
        correctOption: "C",
        field: "AI & ML"
    },
    {
        question:"What does the term \"cross-validation\" refer to in machine learning?",
        optionA: "Splitting the dataset into training and testing sets",
        optionB:"Training the model on multiple datasets",
        optionC: "Evaluating the model's performance on unseen data",
        optionD: "Tuning hyperparameters using grid search" ,
        correctOption: "C",
        field: "AI & ML"
    },
    {
        question:"What does the term \"bias-variance tradeoff\" refer to in machine learning?",
        optionA: "The balance between model complexity and model performance",
        optionB:"The tradeoff between underfitting and overfitting",
        optionC: "The tradeoff between bias and variance in the error of the model",
        optionD: "The tradeoff between training time and prediction time" ,
        correctOption: "C",
        field: "AI & ML"
    },
    {
        question:"Which of the following algorithms is a kernelized version of logistic regression?",
        optionA: "Decision Trees",
        optionB:"Support Vector Machines (SVM)",
        optionC: "k-Nearest Neighbors (kNN)",
        optionD: "Random Forest" ,
        correctOption: "B",
        field: "AI & ML"
    },
    {
        question:"Which of the following is a disadvantage of using decision trees?",
        optionA: "They are prone to overfitting",
        optionB:"They cannot handle categorical variables",
        optionC: "They are not interpretable",
        optionD: "They require large amounts of computational resources" ,
        correctOption: "A",
        field: "AI & ML"
    },
    {
        question:"Which of the following techniques is used to handle missing data in a dataset?",
        optionA: "Mean imputation",
        optionB:"Mode imputation",
        optionC: "Median imputation",
        optionD: "All of the above" ,
        correctOption: "D",
        field: "AI & ML"
    },
    {
        question:"What does the term \"feature engineering\" refer to in machine learning?",
        optionA: "Selecting the best machine learning algorithm for a given problem",
        optionB:"Extracting useful features from raw data to improve model performance",
        optionC: "Tuning hyperparameters of a machine learning model",
        optionD: "Combining multiple models to improve predictive performance" ,
        correctOption: "B",
        field: "AI & ML"
    },
    {
        question:"Which of the following algorithms is a type of unsupervised learning?",
        optionA: "Linear Regression",
        optionB:"Decision Trees",
        optionC: "k-Means Clustering",
        optionD: "Support Vector Machines (SVM)" ,
        correctOption: "C",
        field: "AI & ML"
    },
 
    
];


const softwareDeveloperQuestions = [
    {
        question: "What does the term \"refactoring\" mean in software development?",
        optionA: "Adding new features to existing code",
        optionB: "Rewriting code from scratch",
        optionC: "Restructuring existing code to improve readability and maintainability",
        optionD: "Fixing bugs in the code",
        correctOption: "C",
        field: "Software Developer"
    },
    {
        question: "Which of the following design patterns is commonly used to manage object creation in object-oriented programming?",
        optionA: "Singleton",
        optionB: "Observer",
        optionC: "Factory Method",
        optionD: "Decorator",
        correctOption: "C",
        field: "Software Developer"
    },
    {
        question: " What is the purpose of Continuous Integration (CI) in software development?",
        optionA: "To automate the process of deploying software to production",
        optionB: "To ensure that code changes from multiple developers are integrated frequently",
        optionC: "To conduct automated tests on the software",
        optionD: "To monitor system performance in real-time",
        correctOption: "B",
        field: "Software Developer"
    },
    {
        question: "Which of the following is a benefit of using version control systems like Git in software development?",
        optionA: "Tracking changes to source code",
        optionB: "Automating software deployments",
        optionC: "Generating documentation for the code",
        optionD: "Monitoring system logs",
        correctOption: "A",
        field: "Software Developer"
    },
    {
        question: "Which of the following is a key principle of the Agile software development methodology?",
        optionA: "Heavy documentation and planning upfront",
        optionB: "Fixed scope and timeline",
        optionC: "Embracing change and iterative development",
        optionD: "Centralized decision-making by a project manager",
        correctOption: "C",
        field: "Software Developer"
    },
    {
        question: "What does the term \"Scrum\" refer to in Agile development? ",
        optionA: "A type of version control system",
        optionB: "A project management framework for Agile development",
        optionC: "A programming language",
        optionD: "A software testing technique",
        correctOption: "B",
        field: "Software Developer"
    },
    {
        question: "Which of the following is a characteristic of Test-Driven Development (TDD)?",
        optionA: "Writing tests after implementing code",
        optionB: "Writing production code without tests",
        optionC: "Writing tests before implementing code",
        optionD: "Running tests manually after code implementation",
        correctOption: "C",
        field: "Software Developer"
    },
    {
        question: "What is the purpose of a code review in software development?",
        optionA: "To write new code",
        optionB: "To debug existing code",
        optionC: "To assess the quality of code and provide feedback",
        optionD: "To deploy code to production",
        correctOption: "C",
        field: "Software Developer"
    },
    {
        question: "Which of the following is a key principle of object-oriented programming (OOP)?",
        optionA: "Procedural abstraction",
        optionB: "Encapsulation",
        optionC: "Spaghetti code",
        optionD: "Global variables",
        correctOption: "B",
        field: "Software Developer"
    },
    {
        question: "What is the purpose of the \"try-catch\" block in exception handling? ",
        optionA: "To prevent exceptions from occurring",
        optionB: "To catch and handle exceptions that may occur during program execution",
        optionC: "To ignore exceptions and continue program execution",
        optionD: "To print debugging information",
        correctOption: "B",
        field: "Software Developer"
    },
];
const dataAnalystQuestions = [
    {
        question: "In data analysis, what is the purpose of a Box Plot?",
        optionA: "To visualize the distribution of categorical variables",
        optionB: "To detect outliers and assess the spread of numerical data",
        optionC: "To display trends over time",
        optionD: "To show the relationship between two continuous variables",
        correctOption: "B",
        field: "Data Analyst"
    },    
    {
        question: " Which statistical test is used to determine if there is a significant association between two categorical variables?",
        optionA: "Pearson correlation coefficient",
        optionB: "t-test",
        optionC: "Chi-square test",
        optionD: "ANOVA",
        correctOption: "C",
        field: "Data Analyst"
    }, 
    {
        question: "What is the purpose of data imputation in data analysis?",
        optionA: "To remove outliers from the dataset",
        optionB: "To fill in missing values in the dataset",
        optionC: "To standardize the scale of numerical variables",
        optionD: "To transform categorical variables into numerical ones",
        correctOption: "B",
        field: "Data Analyst"
    }, 
    {
        question: "Which type of chart is best suited for visualizing trends over time?",
        optionA: "Bar chart",
        optionB: "Histogram",
        optionC: "Line chart",
        optionD: "Scatter plot",
        correctOption: "C",
        field: "Data Analyst"
    }, 
    {
        question: "What does the term \"ANOVA\" stand for in statistics?",
        optionA: "Analysis of Variance",
        optionB: "Association of Variables",
        optionC: "Advanced Numerical Optimization and Validation Analysis",
        optionD: "Analysis of Non-Parametric Variables",
        correctOption: "A",
        field: "Data Analyst"
    }, 
    {
        question: "Which of the following techniques is commonly used for feature selection in data analysis?",
        optionA: "Principal Component Analysis (PCA)",
        optionB: "K-means Clustering",
        optionC: "Lasso Regression",
        optionD: "Support Vector Machines (SVM)",
        correctOption: "C",
        field: "Data Analyst"
    }, 
    {
        question: "What is the purpose of a Pareto Chart in data analysis?",
        optionA: "To display the distribution of a numerical variable",
        optionB: "To compare multiple categories based on their frequencies",
        optionC: "To identify the most significant factors contributing to a problem",
        optionD: "To visualize the relationship between two continuous variables",
        correctOption: "C",
        field: "Data Analyst"
    }, 
    {
        question: "Which of the following is not a measure of central tendency?",
        optionA: "Mean",
        optionB: "Median",
        optionC: "Mode",
        optionD: "Variance",
        correctOption: "D",
        field: "Data Analyst"
    }, 
    {
        question: "Which statistical test is used to determine if there is a significant difference between the means of multiple groups?",
        optionA: "t-test",
        optionB: "ANOVA",
        optionC: "Chi-square test",
        optionD: "Mann-Whitney U test",
        correctOption: "B",
        field: "Data Analyst"
    }, 
    {
        question: "What does the term \"hypothesis testing\" involve in data analysis?",
        optionA: "Exploring relationships between variables",
        optionB: "Fitting a model to the data",
        optionC: "Making inferences about population parameters based on sample data",
        optionD: "Visualizing data distributions",
        correctOption: "C",
        field: "Data Analyst"
    }, 

    
];

const informationSecurityAnalystQuestions = [
    {
        question: "What is the primary objective of a penetration test?",
        optionA: "To identify security vulnerabilities in a system or network",
        optionB: "To encrypt sensitive data",
        optionC: "To monitor network traffic",
        optionD: "To secure physical access to facilities",
        correctOption: "A",
        field: "Information Security Analyst"
    },   
    {
        question: "Which of the following is an example of an authentication factor?",
        optionA: "Something you know",
        optionB: "Something you are",
        optionC: "Something you want",
        optionD: "Something you see",
        correctOption: "A",
        field: "Information Security Analyst"
    },
    {
        question: "What does the term \"zero-day exploit\" refer to in cybersecurity?",
        optionA: "An attack that occurs at zero seconds past midnight",
        optionB: "A vulnerability that is exploited before the software vendor releases a patch",
        optionC: "An attack launched at the last minute before a deadline",
        optionD: "A vulnerability with zero impact on the system",
        correctOption: "B",
        field: "Information Security Analyst"
    },
    {
        question: "What is the purpose of a firewall in network security?",
        optionA: "To prevent unauthorized access to a network",
        optionB: "To encrypt data transmissions",
        optionC: "To detect and remove malware",
        optionD: "To monitor user activity on a network",
        correctOption: "A",
        field: "Information Security Analyst"
    },
    {
        question: "Which of the following is an example of a security control?",
        optionA: "Firewall",
        optionB: "Data encryption",
        optionC: "Intrusion Detection System (IDS)",
        optionD: "All of the above",
        correctOption: "D",
        field: "Information Security Analyst"
    },
    {
        question: "Which of the following is an example of multi-factor authentication (MFA)?",
        optionA: "Username and password",
        optionB: "Fingerprint scan",
        optionC: "Security question",
        optionD: "CAPTCHA",
        correctOption: "B",
        field: "Information Security Analyst"
    },
    {
        question: "What is the purpose of a Virtual Private Network (VPN) in cybersecurity?",
        optionA: "To authenticate users",
        optionB: "To encrypt internet traffic",
        optionC: "To detect malware",
        optionD: "To filter spam emails",
        correctOption: "B",
        field: "Information Security Analyst"
    },
    {
        question: "Which of the following is a common vulnerability assessment technique?",
        optionA: "Penetration testing",
        optionB: "Network sniffing",
        optionC: "Data masking",
        optionD: "SQL injection",
        correctOption: "A",
        field: "Information Security Analyst"
    },
    {
        question: "What does the term \"phishing\" refer to in cybersecurity?",
        optionA: "A technique used to authenticate users",
        optionB: "A type of malware",
        optionC: "A social engineering attack aimed at stealing sensitive information",
        optionD: "A method of encrypting data",
        correctOption: "C",
        field: "Information Security Analyst"
    },
    {
        question: "What is the purpose of an Intrusion Detection System (IDS) in cybersecurity?",
        optionA: "To prevent malware infections",
        optionB: "To monitor network traffic and detect suspicious activity",
        optionC: "To encrypt data transmissions",
        optionD: "To authenticate users",
        correctOption: "B",
        field: "Information Security Analyst"
    }, 
];
// Combining sample questions from both fields
const questions = [...dataScienceQuestions, ...webDevelopmentQuestions];

// Function to filter questions based on the field with the maximum score
function filterQuestionsByTopField() {
    // Assuming 'fieldsScores' is an array of objects containing field name and corresponding scores
    const topField = fieldsScores.reduce((prev, current) => (prev.score > current.score) ? prev : current);

    // Filtering questions based on the field with the maximum score
    const filteredQuestions = questions.filter(question => question.field === topField.name);

    return filteredQuestions;
}

// Function to handle questions based on the field with the maximum score
function handleQuestions() {
    shuffledQuestions = filterQuestionsByTopField();
}

let questionNumber = 1; // Holds the current question number
let playerScore = 0; // Holds the player score
let wrongAttempt = 0; // Amount of wrong answers picked by player
let indexNumber = 0; // Will be used in displaying next question

// Function for displaying next question in the array to DOM
function NextQuestion(index) {
    const currentQuestion = shuffledQuestions[index];
    document.getElementById("question-number").innerHTML = questionNumber;
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
}

// Function to check for answer
function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber]; // Gets current question 
    const currentQuestionAnswer = currentQuestion.correctOption; // Gets current question's answer
    const options = document.getElementsByName("option"); // Gets all elements in DOM with name of 'option' (in this case, radio inputs)

    // Checking if a radio input has been checked
    if (!options.some(option => option.checked)) {
        document.getElementById('option-modal').style.display = "flex";
        return;
    }

    // Checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked && option.value === currentQuestionAnswer) {
            playerScore++; // Adds to player's score
        } else if (option.checked && option.value !== currentQuestionAnswer) {
            wrongAttempt++; // Adds to wrong attempts 
        }
    });

    indexNumber++; // Moves to next question
    questionNumber++;
}

// Called when the next button is clicked
function handleNextQuestion() {
    checkForAnswer(); // Check if player picked right or wrong option
    unCheckRadioButtons(); // Uncheck radio buttons for next question
    setTimeout(() => {
        if (indexNumber < shuffledQuestions.length) {
            NextQuestion(indexNumber); // Displays next question
        } else {
            handleEndGame(); // Ends game if all questions are answered
        }
    }, 1000);
}

// Sets options background back to null after displaying the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = "";
    });
}

// Unchecking all radio buttons for next question
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        option.checked = false;
    });
}

// Function for when all questions have been answered
function handleEndGame() {
    let remark = null;
    let remarkColor = null;

    if (playerScore <= 10) {
        remark = "Bad Grades, Keep Practicing.";
        remarkColor = "red";
    } else if (playerScore >= 11 && playerScore < 30) {
        remark = "Average Grades, You can do better.";
        remarkColor = "orange";
    } else if (playerScore >= 31) {
        remark = "Excellent, Keep the good work going.";
        remarkColor = "green";
    }
    const playerGrade = (playerScore / shuffledQuestions.length) * 100;

    // Data to display to score board
    document.getElementById('remarks').innerHTML = remark;
    document.getElementById('remarks').style.color = remarkColor;
    document.getElementById('grade-percentage').innerHTML = playerGrade;
    document.getElementById('wrong-answers').innerHTML = wrongAttempt;
    document.getElementById('right-answers').innerHTML = playerScore;
    document.getElementById('score-modal').style.display = "flex";
}

// Closes score modal, resets game
function closeScoreModal() {
    questionNumber = 1;
    playerScore = 0;
    wrongAttempt = 0;
    indexNumber = 0;
    document.getElementById('score-modal').style.display = "none";
    handleQuestions();
    NextQuestion(indexNumber);
}

// Function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none";
}

// Timer Function
function timer() {
    let remainingTime = 3600; // Adjust the seconds to set the timer (Max Limit 3600)
    let intervalID = setInterval(function () {
        remainingTime--;
        convertTo(remainingTime);
        if (remainingTime == 0) {
            clearInterval(intervalID);
            alert("Time Up"); // Call any function or redirect screen
        }
    }, 1000);
}

// Function to convert seconds to Hour, Minutes and Seconds
function convertTo(sec) {
    const hours = Math.floor(sec / 3600);
    const minutes = Math.floor((sec % 3600) / 60);
    const seconds = sec % 60;

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

// Start the timer
timer();
