const tree = document.querySelector("#tree");
const liList = tree.querySelectorAll("li");

// this is all w/ help from Andre, my brain is not giving me any leads today
function hideOnClick(e) {
    const sibling = e.target.nextSibling;
    // console.log(e.target);
    // console.log(e.target.nextSibling);
    if (sibling !== null) {
        if (sibling.style.display === "" || sibling.style.display === "block") {
            sibling.style.display = "none";
        } else if (sibling.style.display === "none") {
            sibling.style.display = "block";
        };
    };
}

tree.addEventListener("click", hideOnClick);


// Hover effect --> comes from Joel, it uses the CSS in the HTML file
for (let li of liList) {
    let span = document.createElement('span');
    li.prepend(span);
    span.append(span.nextSibling); // move the text node into span
}


