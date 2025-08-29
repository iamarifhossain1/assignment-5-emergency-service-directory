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