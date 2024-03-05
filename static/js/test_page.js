//this would be the object shape for storing the questions  
//you can change the questions to your own taste or even add more questions..
const questions = [
    {
        question: "What is the primary goal of network security? ?",
        optionA: "To increase network speed",
        optionB: "To ensure 100% uptime",
        optionC: "To protect data and resources from unauthorized access, attacks, and damage",
        optionD: "To enhance network aesthetics",
        correctOption: "optionC"
    },

    {
        question: "Which of the following is an example of a passive attack in network security?",
        optionA: "a) Denial of Service (DoS) attack",
        optionB: "b) Man-in-the-Middle (MitM) attack",
        optionC: "c) Phishing attack",
        optionD: "d) Packet sniffing",
        correctOption: "optionD"
    },

    {
        question: "What is the purpose of a Firewall in network security?",
        optionA: "To increase network bandwidth",
        optionB: "To filter and control incoming and outgoing network traffic",
        optionC: "To physically secure network infrastructure",
        optionD: " To monitor user activity",
        correctOption: "optionB"
    },

    {
        question: "Which cryptographic protocol is commonly used to secure communication over the internet, providing a secure connection between a client and a server?",
        optionA: " SSL (Secure Sockets Layer)",
        optionB: "HTTP (Hypertext Transfer Protocol)",
        optionC: " UDP (User Datagram Protocol)",
        optionD: "SMTP (Simple Mail Transfer Protocol)",
        correctOption: "optionA"
    },

    {
        question: "What is the primary purpose of a Security Policy in an organization?",
        optionA: "To maximize network speed",
        optionB: "To ensure 100% uptime",
        optionC: "To define rules and guidelines for securing information and resources",
        optionD: "To monitor user activity",
        correctOption: "optionC"
    },

    {
        question: "What does the term 'Least Privilege' mean in the context of security policies?",
        optionA: "Providing users with maximum permissions",
        optionB: "Granting permissions based on job roles, giving only the minimum access necessary",
        optionC: "Allowing unrestricted access to sensitive data",
        optionD: "Applying the same level of privilege to all users",
        correctOption: "optionB"
    },

    {
        question: "Which of the following is an example of a technical security control in an organization?",
        optionA: "Security training programs",
        optionB: "Security awareness posters",
        optionC: "Firewall configurations",
        optionD: "Acceptable use policies",
        correctOption: "optionC"
    },

    {
        question: "What is the purpose of a Disaster Recovery Plan in the context of security procedures?",
        optionA: "To exploit security weaknesses",
        optionB: "To identify and quantify security vulnerabilities in a system",
        optionC: "To enforce security policies",
        optionD: "To provide training for security personnel",
        correctOpton: "optionB"
    },

    {
        question: "Which of the following is a common method used in Vulnerability Assessment?",
        optionA: "Social engineering attacks",
        optionB: "Port scanning",
        optionC: "Encryption algorithms",
        optionD: "Wireless network configuration",
        correctOption: "optionB"
    },

    {
        question: "What does the term 'False Positive' mean in the context of Vulnerability Assessment?",
        optionA: "Incorrectly identifying a vulnerability that doesn't exist",
        optionB: "Ignoring a genuine security threat",
        optionC: "Identifying a vulnerability correctly",
        optionD: "Finding a vulnerability but not taking any action",
        correctOption: "optionA"
    },

    {
        question: "What is the role of automated tools in a Vulnerability Assessment?",
        optionA: "To manually examine code for security issues",
        optionB: "To simulate social engineering attacks",
        optionC: "To identify vulnerabilities quickly and efficiently",
        optionD: "To enforce access control policies",
        correctOption: "optionC"
    },

    {
        question: "What is the result of the expression 3x + 5y when x = 2 and y = 4?",
        optionA: "26",
        optionB: "22",
        optionC: "23",
        optionD: "29",
        correctOption: "optionB"
    },


    {
        question: "If a rectangle has a length of 8 units and a width of 5 units, what is its area?",
        optionA: "13 square units",
        optionB: "26 square units",
        optionC: "40 square units",
        optionD: "56 square units",
        correctOption: "optionC"
    },

    {
        question: "Solve for x: 2x - 7 = 15.",
        optionA: "x = 6",
        optionB: "x = 8",
        optionC: "x = 11",
        optionD: "x = 9",
        correctOption: "optionD"
    },

    {
        question: "If a circle has a radius of 6 units, what is its circumference? (Use π = 3.14)",
        optionA: "18.84 units",
        optionB: "37.68 units",
        optionC: "12.56 units",
        optionD: "31.42 units",
        correctOption: "optionD"
    },

    {
        question: "What is the primary goal of data wrangling in the context of data preparation?",
        optionA: "To visualize data patterns",
        optionB: "To clean and transform raw data into a usable format",
        optionC: "To perform statistical analysis",
        optionD: "To deploy machine learning models",
        correctOption: "optionB"
    },

    {
        question: "Which of the following is an example of data cleaning?",
        optionA: "a) Creating data visualizations",
        optionB: "b) Imputing missing values",
        optionC: "c) Running machine learning algorithms",
        optionD: "d) Extracting insights from raw data",
        correctOption: "optionB"
    },

    {
        question: "What does the term 'outlier' refer to in the context of data cleaning?",
        optionA: "The mean of a dataset",
        optionB: "An observation that significantly deviates from the overall pattern",
        optionC: "The median of a dataset",
        optionD: "A measure of data spread",
        correctOption: "optionB"
    },

    {
        question: "What is the primary purpose of data exploration in the context of data analysis?",
        optionA: "To create visualizations",
        optionB: "To extract insights and patterns from data",
        optionC: "To clean and preprocess data",
        optionD: "To deploy machine learning models",
        correctOption: "optionB"
    },

    {
        question: "Which type of visualization is best suited for showing the distribution of a single numerical variable?",
        optionA: "Scatter plot",
        optionB: "Histogram",
        optionC: "Pie chart",
        optionD: "Line chart",
        correctOption: "optionB"
    },

    {
        question: "What does the term 'correlation' refer to in the context of data exploration?",
        optionA: "The relationship between two or more variables",
        optionB: "The process of data cleaning",
        optionC: "The visualization of data patterns",
        optionD: "The removal of outliers from a dataset",
        correctOption: "optionA"
    },

    {
        question: "Which of the following visualization techniques is useful for comparing the proportions of different categories in a dataset?",
        optionA: "Box plot",
        optionB: "Scatter plot",
        optionC: "Bar chart",
        optionD: "Heatmap",
        correctOption: "optionC"
    },

    {
        question: "What is a Database Management System (DBMS) used for?",
        optionA: "To design user interfaces",
        optionB: "To store, retrieve, and manage data in a structured format",
        optionC: "To develop programming languages",
        optionD: "To perform mathematical calculations",
        correctOption: "optionB"
    },

    {
        question: "Which of the following statements about relational databases is true?",
        optionA: "They only support unstructured data",
        optionB: "Data is stored in tables, and relationships can be established between tables",
        optionC: "They are primarily used for storing multimedia files",
        optionD: "They don't require a predefined schema",
        correctOption: "optionB"
    },

    {
        question: "In the context of databases, what does the term 'SQL' stand for?",
        optionA: "Structured Query Language",
        optionB: "Standard Query Level",
        optionC: "Systematic Query Logic",
        optionD: "Secure Query Layer",
        correctOption: "optionA",
    },

    {
        question: "What is the purpose of an Index in a database?",
        optionA: "To create a backup of the database",
        optionB: "To ensure data consistency",
        optionC: "To speed up data retrieval by providing quick access to specific columns",
        optionD: "To enforce access control policies",
        correctOption: "optionC"
    },

    {
        question: "What does the term 'data bias' refer to in the context of data analysis?",
        optionA: "The speed at which data is processed",
        optionB: "Unintentional and systematic errors in data collection or analysis that can lead to skewed results",
        optionC: "The amount of data stored in a database",
        optionD: "The level of accuracy in statistical model",
        correctOption: "optionB"
    },

    {
        question: "Which ethical principle emphasizes the responsibility of data analysts to be transparent about their methods and decisions?",
        optionA: "Confidentiality",
        optionB: "Integrity",
        optionC: "Accountability",
        optionD: "Transparency",
        correctOption: "optionD"
    },

    {
        question: "What is the significance of obtaining informed consent in data analysis?",
        optionA: "It ensures that data analysts are well-informed about the latest analytical tools",
        optionB: "It legally permits data analysts to use any available data for analysis",
        optionC: "It respects individuals' autonomy by obtaining permission before collecting and analyzing their data",
        optionD: "It is only required for government-related data analysis",
        correctOption: "optionC"
    },

    {
        question: "What is the primary goal of feature engineering in machine learning?",
        optionA: "To create new features that do not exist in the original dataset",
        optionB: "To reduce the dimensionality of the dataset",
        optionC: "To select the most important features for modeling",
        optionD: "To transform raw data into a format suitable for training machine learning models",
        correctOption: "optionD"
    },

    {
        question: "Which of the following techniques is commonly used for handling missing data during preprocessing?",
        optionA: "Deleting the rows with missing values",
        optionB: "Imputing missing values with mean, median, or mode",
        optionC: "Assigning arbitrary values to missing entries",
        optionD: "Ignoring missing values during analysis",
        correctOption: "optionB"
    },

    {
        question: "When would you use normalization as a feature preprocessing technique?",
        optionA: "When dealing with categorical variables",
        optionB: "When features have different scales and need to be standardized",
        optionC: "When handling missing values in a dataset",
        optionD: "When creating interaction terms between feature",
        correctOption: "optionB"
    },

    {
        question: "What is the main goal of machine learning?",
        optionA: "To write efficient code",
        optionB: "To create user-friendly interfaces",
        optionC: "To develop algorithms that can learn and make predictions from data",
        optionD: "To perform mathematical calculations",
        correctOption: "optionC"
    },

    {
        question: "What is the role of the training set in a machine learning model?",
        optionB: "To evaluate the performance of the model",
        optionC: "To fine-tune hyperparameters",
        optionA: "To make predictions on new, unseen data",
        optionD: "To teach the model by providing input-output pairs",
        correctOption: "optionD"
    },

    {
        question: "Which type of machine learning algorithm is used for predicting a continuous output, such as house prices?",
        optionA: "Classification",
        optionB: "Clustering",
        optionC: "Regression",
        optionD: "Reinforcement learning",
        correctOption: "optionC"
    },

    {
        question: "In supervised learning, what is the role of the target variable?",
        optionA: "It is the input feature to the model",
        optionB: "It is used for validation purposes",
        optionC: "It is the output variable that the model aims to predict",
        optionD: "It is not required in supervised learning",
        correctOption: "optionC"
    },

    {
        question: "What is the primary advantage of deep learning over traditional machine learning algorithms?",
        optionA: "Deep learning requires less computational power",
        optionB: "Deep learning can automatically learn hierarchical features from data",
        optionC: "Deep learning is limited to shallow neural networks",
        optionD: "Deep learning is not suitable for handling large datasets",
        correctOption: "optionB"
    },

    {
        question: "What is a neural network layer responsible for learning and extracting features from the input data?",
        optionA: "Output layer",
        optionB: "Hidden layer",
        optionC: "Input layer",
        optionD: "Activation layer",
        correctOption: "optionB"
    },

    {
        question: "What is backpropagation in the context of deep learning?",
        optionA: "A technique for updating weights in a neural network based on the prediction error",
        optionB: "The process of forward pass through a neural network",
        optionC: "The activation function used in the output layer",
        optionD: "A regularization method for preventing overfitting",
        correctOption: "optionA"
    },

    {
        question: "What is a convolutional neural network (CNN) primarily designed for?",
        optionA: "Text classification",
        optionB: "Image recognition and computer vision tasks",
        optionC: "Time series forecasting",
        optionD: "Natural language processing",
        correctOption: "optionB"
    },

    {
        question: "What is the primary purpose of a Security Information and Event Management (SIEM) system?",
        optionA: "To manage network bandwidth",
        optionB: "To prevent all cybersecurity threats",
        optionC: "To collect, analyze, and respond to security events and incidents",
        optionD: "To automate software development processes",
        correctOption: "optionC"
    },

    {
        question: "Which of the following is a key component of a SIEM system that collects logs and events from various sources?",
        optionA: "Firewall",
        optionB: "Intrusion Detection System (IDS)",
        optionC: "Security Incident Response Platform",
        optionD: "Log Collector",
        correctOption: "optionD"
    },

    {
        question: "What is the purpose of correlation in the context of SIEM?",
        optionA: "To encrypt sensitive data",
        optionB: "To link related security events and identify potential threats",
        optionC: "To monitor user activity",
        optionD: "To manage access control policies",
        correctOption: "optionB"
    },

    {
        question: "Which of the following activities is typically performed during the 'Incident Response' phase of a SIEM system?",
        optionA: "Collecting logs",
        optionB: "Analyzing network traffic",
        optionC: "Responding to and mitigating security incidents",
        optionD: "Configuring firewalls",
        correctOption: "optionC"
    },

    {
        question: "What is the primary goal of Identity and Access Management (IAM) in cybersecurity?",
        optionA: "To manage network bandwidth",
        optionB: "To encrypt all data transmissions",
        optionC: "To ensure only authorized individuals have access to resources and data",
        optionD: "To prevent all cybersecurity threats",
        correctOption: "optionC"
    },

    {
        question: "What is the purpose of Single Sign-On (SSO) in IAM?",
        optionA: "To require users to enter multiple passwords for authentication",
        optionB: "To allow users to use the same set of credentials to access multiple applications",
        optionC: "To limit access to a single user at a time",
        optionD: "To encrypt data during transmission",
        correctOption: "optionB"
    },

    {
        question: "Which of the following is a common authentication factor used in IAM systems?",
        optionA: "Something you know (e.g., password)",
        optionB: "Something you see (e.g., fingerprint)",
        optionC: "Something you hear (e.g., voice recognition)",
        optionD: "All of the above",
        correctOption: "optionD"
    },

    {
        question: " What is the principle of least privilege in the context of IAM?",
        optionA: "Granting users the maximum permissions they might need",
        optionB: "Granting users only the permissions necessary to perform their tasks",
        optionC: "Denying all access to users by default",
        optionD: "Ignoring user access control altogether",
        correctOption: "optionB"
    },

    {
        question: "What is the keyboard shortcut to paste special values in Excel?",
        optionA: "Ctrl+C",
        optionB: "Ctrl+V",
        optionC: "Ctrl+Alt+V",
        optionD: "Ctrl+Shift+V",
        correctOption: "optionC"
    },

    {
        question: "Which Excel function is used to find the highest value in a range? ",
        optionA: "MAX()",
        optionB: "HIGH()",
        optionC: "TOP()",
        optionD: "SUM()",
        correctOption: "optionA"
    },

    {
        question: "What does the function VLOOKUP in Excel stand for?",
        optionA: "Vertical Lookup",
        optionB: "Variable Lookup",
        optionC: "Value Lookup",
        optionD: "View Lookup",
        correctOption: "optionA"
    },

    {
        question: "What is the purpose of the CONCATENATE function in Excel?",
        optionA: "To add numbers in a range",
        optionB: "To merge or combine text from multiple cells into one cell",
        optionC: "To calculate the average of a range",
        optionD: "To find the square root of a number",
        correctOption: "optionB"
    },

    {
        question: "What is the primary purpose of an Operating System?",
        optionA: "To manage hardware resources",
        optionB: "To write application programs",
        optionC: "To design user interfaces",
        optionD: "To create database systems",
        correctOption: "optionA"
    },

    {
        question: "Which memory management technique involves dividing memory into fixed-size partitions?",
        optionA: "Paging",
        optionB: "Segmentation",
        optionC: "Virtual memory",
        optionD: "Contiguous memory allocation",
        correctOption: "optionD"
    },

    {
        question: "What is the role of a Scheduler in an Operating System?",
        optionA: "To manage input/output devices",
        optionB: "To allocate resources to processes",
        optionC: "To handle file operations",
        optionD: "To create virtual memory spaces",
        correctOption: "optionB"
    },

    {
        question: "What does the acronym 'GUI' stand for in the context of Operating Systems?",
        optionA: "General User Interface",
        optionB: "Graphical User Interface",
        optionC: "Global User Integration",
        optionD: "Generalized Unit Interaction",
        correctOption: "optionB"
    },

    {
        question: "What is the primary purpose of a Database Management System (DBMS)?",
        optionA: "To design user interfaces",
        optionB: "To create backup copies of files",
        optionC: "To manage and organize data in databases",
        optionD: "To write application code",
        correctOption: "optionC"
    },

    {
        question: "Which of the following is a key feature of the relational database model?",
        optionA: "No support for relationships between tables",
        optionB: "Storing data in a hierarchical structure",
        optionC: "Organizing data in tables with rows and columns",
        optionD: "Storing data in a flat file format",
        correctOption: "optionC"
    },

    {
        question: "n a relational database, what is the purpose of a Foreign Key?",
        optionA: "To uniquely identify each record in a table",
        optionB: "To establish relationships between tables",
        optionC: "To enforce data integrity constraints",
        optionD: "To index columns for faster retrieval",
        correctOption: "optionB"
    },

    {
        question: "What does ACID stand for in the context of database transactions?",
        optionA: "Atomicity, Consistency, Isolation, Durability",
        optionB: "Association, Concurrency, Integrity, Design",
        optionC: "Accuracy, Cohesion, Isolation, Dependency",
        optionD: "Allocation, Currency, Indexing, Durability",
        correctOption: "optionA"
    },

    {
        question: "What is the main principle of Object-Oriented Programming (OOP)?",
        optionA: "Linear programming",
        optionB: "Procedural execution",
        optionC: "Code reusability and modularity",
        optionD: "Functional programming",
        correctOption: "optionC"
    },

    {
        question: "Which OOP concept involves bundling data and methods that operate on the data?",
        optionA: "Inheritance",
        optionB: "Polymorphism",
        optionC: "Encapsulation",
        optionD: "Abstraction",
        correctOption: "optionC"
    },

    {
        question: "In OOP, what does Inheritance allow a class to do?",
        optionA: "Hide implementation details",
        optionB: "Acquire properties and behaviors of another class",
        optionC: "Restrict access to class members",
        optionD: "Override all methods from the superclass",
        correctOption: "optionB"
    },

    {
        question: "What is the purpose of Polymorphism in OOP?",
        optionA: "To create multiple instances of a class",
        optionB: "To hide the implementation details of a class",
        optionC: "To allow a single function or method to work on different types of data",
        optionD: "To establish relationships between classes",
        correctOption: "optionC"
    },

    {
        question: "hat is the primary purpose of a Data Structure?",
        optionA: "To store and organize data",
        optionB: "To perform mathematical calculations",
        optionC: "To create user interfaces",
        optionD: "To manage database transactions",
        correctOption: "optionA"
    },

    {
        question: "Which data structure follows the Last In, First Out (LIFO) principle?",
        optionA: "Queue",
        optionB: "Stack",
        optionC: "Linked List",
        optionD: "Array",
        correctOption: "optionB"
    },

    {
        question: "What is the time complexity of a binary search algorithm in the worst-case scenario?",
        optionA: "O(1)",
        optionB: "O(log n)",
        optionC: "O(n)",
        optionD: "O(n^2)",
        correctOption: "optionB"
    },

    {
        question: "SWhich sorting algorithm has a time complexity of O(n^2) in the worst-case scenario?",
        optionA: "Merge Sort",
        optionB: "Quick Sort",
        optionC: "Bubble Sort",
        optionD: "Insertion Sort",
        correctOption: "optionC"
    },

    {
        question: "What does SDLC stand for in the context of software development?",
        optionA: "Software Design and Lifecycle",
        optionB: "Systematic Development and Life Cycle",
        optionC: "Software Development Life Cycle",
        optionD: "Structured Deployment and Lifecycle",
        correctOption: "optionC"
    },

    {
        question: "Which phase of the SDLC involves gathering and documenting requirements for the software project?",
        optionA: "Implementation",
        optionB: "Design",
        optionC: "Planning",
        optionD: "Requirements Analysis",
        correctOption: "optionD"
    },

    {
        question: "What is the primary goal of the Testing phase in the SDLC?",
        optionA: "To design the user interface",
        optionB: "To find and fix defects in the software",
        optionC: "To create a detailed plan for the project",
        optionD: "To gather feedback from users",
        correctOption: "optionB"
    },

    {
        question: "Which SDLC model involves the incremental and iterative development of the software, allowing for flexibility and changes throughout the process?",
        optionA: "Waterfall model",
        optionB: "Spiral model",
        optionC: "Agile model",
        optionD: "V-Model",
        correctOption: "optionC"
    },

    {
        question: "What is the primary goal of Software Architecture?",
        optionA: "To write efficient code",
        optionB: "To design a user-friendly interface",
        optionC: "To define the high-level structure of a software system",
        optionD: "To manage project documentation",
        correctOption: "optionC"
    },

    {
        question: "Which design principle promotes breaking a system into smaller, manageable, and independent modules or components?",
        optionA: "Encapsulation",
        optionB: "Inheritance",
        optionC: "Modularity",
        optionD: "Polymorphism",
        correctOption: "optionC"
    },

    {
        question: "What does the term 'ssCoupling' refer to in software design?",
        optionA: "The degree of interdependence between modules",
        optionB: "The process of combining data and methods in a class",
        optionC: "The relationship between a superclass and its subclasses",
        optionD: "The degree to which a system can handle changes",
        correctOption: "optionA"
    },

    {
        question: "Which architectural pattern divides an application into three interconnected components: the presentation layer, the business logic layer, and the data storage layer?",
        optionA: "Model-View-Controller (MVC)",
        optionB: "Observer Pattern",
        optionC: "Singleton Pattern",
        optionD: "Factory Method Pattern",
        correctOption: "optionA"
    },

    {
        question: "What is the primary purpose of cryptography?",
        optionA: "To secure communication and protect data from unauthorized access",
        optionB: "To compress data for efficient storage",
        optionC: "To improve the performance of algorithms",
        optionD: "To create random numbers for encryption",
        correctOption: "optionA"
    },

    {
        question: "Which type of cryptography uses a single key for both encryption and decryption?",
        optionA: "Symmetric-key cryptography",
        optionB: "Asymmetric-key cryptography",
        optionC: "Public-key cryptography",
        optionD: "Hash-based cryptography",
        correctOption: "optionA"
    },

    {
        question: "What is the purpose of a Digital Signature in cryptography?",
        optionA: "To encrypt data for secure transmission",
        optionB: "To verify the identity of the sender and ensure data integrity",
        optionC: "To generate random keys for symmetric encryption",
        optionD: "To hash passwords for storage",
        correctOption: "optionB"
    },

    {
        question: "In Public-key cryptography, which key is used for encryption, and which key is used for decryption?",
        optionA: "Both keys are used for encryption",
        optionB: "Both keys are used for decryption",
        optionC: "Public key for encryption, Private key for decryption",
        optionD: "Private key for encryption, Public key for decryption",
        correctOption: "optionC"
    },

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() {
    //function to shuffle and push 10 questions to shuffledQuestions array
    //app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 39) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    // document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
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
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            // document.getElementById(wrongLabelId).style.backgroundColor = "red"
            // document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
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
        if (indexNumber <= 39) {
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
    if (playerScore <= 10) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 11 && playerScore < 30) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 31) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 40) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
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