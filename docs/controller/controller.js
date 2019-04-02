myApp.controller('DetailsCtrl', function($scope){

  $scope.services = [
    { 
      "bg": '#379dcd',
      "image": "../assets/video.png",
      "title": "VIDEO CV & PRESENTATION",
      "brief": "PLUNES video editing application is a platform where you can not only create video CVs and Presentations but also edit your videos online in real time."
    },
    {
      "bg": '#9ecb43',  
      "image": "../assets/student.png",
      "title": "STUDENTS",
      "brief": "An Online Platform for Legal and Medical Students where they can have real time experience of solving client concerns with Experienced Professionals."
    },
    {
      "bg": '#cecece',
      "image": "../assets/debate.png",
      "title": "LIVE DEBATE",
      "brief": "Debate is the activity that brings the art of reading, thinking and speaking together in one place. Debate is an art that every individual must possess."
    },
    {
      "bg": '#fcad00',
      "image": "../assets/professional.png",
      "title": "PROFESSIONAL",
      "brief": "We cover every field of legal and medical expertise and have best professionals / experts from across the nation to serve you with in a click."
    },
    {
      "bg": '#e74c3c',
      "image": "../assets/ask.png",
      "title": "ASK MY CONCERN",
      "brief": "Millions of people still cannot access adequate healthcare services and legal services in India due to the shortage of doctors and lawyers respectively."
    }
  ]
});

myApp.controller('SignUpCtrl', function($scope){
  $scope.name = "hello"
});

myApp.controller('LoginCtrl', function($scope){
  $scope.name = "hello"
});