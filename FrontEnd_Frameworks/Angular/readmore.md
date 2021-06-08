# Key concepts?

--> Angular is Data-oriented approach and not controll-oriented approach= where wi always get the dom element through the id and that is how we gets its value

1. Directives are:" Directives are markers on a DOM element that tell AngularJS to attach a specified behavior to that DOM element or even transform the DOM element and its children. In short, it extends the HTML."
   <a src="https://www.tutorialsteacher.com/angularjs/angularjs-directives#:~:text=Directives%20are%20markers%20on%20a,where%20ng%20stands%20for%20Angular.">read more on Directives</a>

2. Modules- containers for organizing the code
3. Routes- each module has routes that determine the view
4. Controllers- they are the "brains" of the view and they provide data and  
   functionalities/functions to "Factories" and "Services" that control the view.
   The controllers pass data to the view through the "$scope"
   this is parallel to the "model" part in the "model-view-controller" architecture.
   The controller gets the data from a "factory" or a service.
   This data is bound to the view using directives that are part of the $scope
5. $scope - is written with a "$" since it is an angular specific object that connects the view to the logic.
   Module->config->routes:-view-{$scope}-controller-
6. Factories and services- are singletons= isolated from other code and can be reused

#### read and practice more on:

1. https://www.djamware.com/post/5a0673c880aca7739224ee21/mean-stack-angular-5-crud-web-application-example
2. https://www.positronx.io/angular-7-reactive-forms-validation-tutorial/
3. https://www.positronx.io/mean-stack-tutorial-angular-7-crud-bootstrap/

Continue my practice on:
https://stackblitz.com/edit/angular-dog59u?file=src%2Fapp%2Fproduct-list%2Fproduct-list.component.html
