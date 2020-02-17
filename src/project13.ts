// Utilizing Factory
// Before I start, I can review the concept of decorator factory

function fac1<T>(store: T) {
  //I reviewed generic too to find out whether it could be applied to a decorator.
  return function(connected: Function) {
    const stored = [];
    stored.push(store);
    console.log(stored);
    console.log(connected); //there is a transferred class.
  };
}

@fac1<string>("have to be string")
class defaultC {}

//Let's practice new factory which could be used like angular.

function fac2(template: string, hookId: string) {
  return function(_: Function) {
    const hooking = document.getElementById(hookId); // Then, from decorator factory, I passed 'app' Id which allows me to access the html code having "app" ID
    if (hooking) {
      hooking.innerHTML = template; //If hooking is true, the inner HTML value is dependant on what string is put in template. And I add "<h1>Does it work?<h1>"
    }
  };
}

@fac2("<h1>Does it work?</h1>", "app")
class Person {
  name = "Anderson";
  constructor() {
    console.log("Creating person object");
  }
}
