// Code necessary to do the following:

// 1. Select the section with an id of container without using querySelector.
const section = document.getElementById("container");

// 2. Select the section with an id of container using querySelector.
const sectionQuery = document.querySelector("#container");

// 3. Select all of the list items with a class of “second”.
const listItems = document.querySelectorAll(".second");

// 4. Select a list item with a class of third, but only the list item inside of the ol tag.
const listItem = document.querySelector("ol .third");

// 5. Give the section with an id of container the text “Hello!”.
section.textContent = "Hello";

// 6. Add the class main to the div with a class of footer.
const div = document.querySelector(".footer");
div.classList.add("main");

// 7. Remove the class main on the div with a class of footer.
div.classList.remove("main");

// 8. Create a new li element.
const newItem = document.createElement("li");

// 9. Give the li the text “four”.
newItem.textContent = "four";

// 10. Append the li to the ul element.
const list = document.querySelector("ul");
list.append(newItem);

// 11. Loop over all of the lis inside the ol tag and give them a background color of “green”.
const olList = document.querySelectorAll("ol li");
for (let item of olList) {
  item.classList.add("li-background");
}

// 12. Remove the div with a class of footer
const footerDiv = document.querySelector(".footer");
footerDiv.remove();
