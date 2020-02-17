function fac2(template: string, hookId: string) {
  return function(constructor: any) {
    // Of course, assigning "Function" is a symbol of decorator but it doesn't care to change it because, anyway, I can bridget between function fac2 and Class Person by using "@"
    const hooking = document.getElementById(hookId); // Then, from decorator factory, I passed 'app' Id which allows me to access the html code having "app" ID
    const callConstructor = new constructor(); //It allows me to make new obejct which possess "this.name=Anderson"
    if (hooking) {
      hooking.innerHTML = template; //If hooking exists, the inner HTML value is dependant on what string is put in template. And I added "<h1>Does it work?<h1>"
      hooking.querySelector("h1")!.textContent = callConstructor.name; //Then, it could call the value "Anderson" and put this into the H1 tag
    }
  };
}

@fac2("<h1>Does it work?</h1>", "decorator")
class Person {
  name = "Anderson";
  constructor() {
    console.log("Creating person object");
  }
}
