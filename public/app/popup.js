document.addEventListener("DOMSubtreeModified", function() {

    let linkElements = document.getElementsByClassName("Link1");
    console.log(linkElements)

    for (let i = 0; i < linkElements.length; i++) {
      linkElements[i].addEventListener("click", function() {
        window.open(linkElements[i].href, "_blank");
      })
    }
})