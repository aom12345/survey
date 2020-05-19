class Form {
  constructor() {
    
  }

  display(){
    var title = createElement('h1');
    title.html("Survey");
    title.position(150, 0);
    
    var input = createInput("Name");
    var button = createButton('Start');
    var age =createInput("Age");
    input.position(130, 160);
    button.position(250, 250);
    age.position(130,180);
    button.mousePressed(function(){
      input.hide();
      button.hide();
      age.hide();
      var name = input.value();
      var greeting = createElement('h2');
      greeting.html("Hello " + name );
      var q1= createElement('h3'); 
      greeting.position(130, 80);
      q1.html("What is your favorite game or activity ?");
      q1.position(10,140);
      var ans1=createInput("ANSWER")
      var next = createButton('Question2');
     ans1.position(20,210);
     next.position(250,250);
     next.mousePressed(function(){
     q1.hide();
     next.hide();
     greeting.hide();
     ans1.hide();
     var q2=createElement('h3'); 
     q2.html("What is your favorite colour or color?")
     q2.position(10,140);
     var ans2=createInput("ANSWER");
     ans2.position(20,210);
     var end=createButton('End');
    end.position(250,250);
    end.mousePressed(function(){
    end.hide();
    q2.hide();
    ans2.hide();
    var thanks= createElement('h1');
    thanks.html("THANK YOU");
    thanks.position(100,200);
    });
     });
    });
  }
}
