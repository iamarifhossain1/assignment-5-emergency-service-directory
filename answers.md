Q. No: 1 - What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer: 

1. getElementById :- using getElementById we can select or access an element with a specific id.

2. getElementsByClassName :- using getElementsByClassName we can select or access all element with a specific class.

3. querySelector :- using querySelector we can select or access the first element that matches a specified css selector.

4. querySelectorAll :- using querySelectorAll we can select or access all elements that matches a specified css selector.

Q. No: 2 - How do you **create and insert a new element into the DOM**?

Answer: to create and insert a new element into the DOM, we first create the element using document.createElement('p') and store it in a variable 
then we select the parent element where we want to insert the new element. finally we use appendChild() to insert the new element into the parent.

Q. No: 3 - What is **Event Bubbling** and how does it work?

Answer: Event Bubbling when you click on a small (child) element, the event moves up to its parent elements one by one.

How does it work: 

1. the event works on the button itself
2. then it moves to the button’s parent div
3. then it goes even higher to the body, html, and finally to the document.

Q. No: 4 - What is **Event Delegation** in JavaScript? Why is it useful?

Answer: Event Delegation is a technique where a single event listener is added to a parent element so that individual event listeners don’t have to be added to each child element.

Why Event Delegation is Useful? 
1. better performance
2. easier to manage
3. simpler code

Q. No: 5 - What is the difference between **preventDefault() and stopPropagation()** methods?

Answer: preventDefault() :- is a method that prevents the default action of an event. for example when used on a form’s submit event it stops the form from submitting normally which usually causes the page to reload.

stopPropagation() :- stopPropagation() is a method that stops the event from bubbling up (or capturing down) the DOM tree. the event will not trigger handlers on parent elements after the current target.