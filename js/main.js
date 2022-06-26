//Selections
let btn = document.querySelector("#menu-btn");
let menuList = document.querySelector(".menu-list");

let linksInput = document.querySelector(".input");
let InputBtn = document.querySelector(".inputBtn");
let linksOutput = document.querySelector(".linksOutput");


//Event Listeners
btn.addEventListener("click", menu);
InputBtn.addEventListener("click", addLinks);


//Functions
function menu() {
        menuList.classList.toggle("menu-list-open");
        // console.log("clicked")
}

function addLinks() {
        if (linksInput.value.trim() == "") {
                
                document.getElementById("check").innerHTML = "please add a Link";
                linksInput.classList.add("valid");
                // alert("please add Link!!");
        }
        else {
                let linkDiv = document.createElement("div");
                let links = document.createElement("textarea");
                let copyBtn = document.createElement("a");
                let hr = document.createElement("hr");
                links.innerText = linksInput.value;
                links.classList.add("links");
                linkDiv.appendChild(links);
                linkDiv.classList.add('linksDiv')
                linksOutput.appendChild(linkDiv);

                linkDiv.appendChild(hr);

                copyBtn.innerHTML = `copy`;
                copyBtn.classList.add("copyBtn");
                linkDiv.appendChild(copyBtn);

                //copied Function....
                function copyLink() {
                        links.select();
                        document.execCommand("Copy");
                        copyBtn.innerHTML = `copied!`;
                        copyBtn.style.backgroundColor = "hsl(257, 27%, 26%)";
                        console.log("clicked");
                }
                copyBtn.addEventListener("click", copyLink);

                linksInput.value = "";
        }

        console.log("clicked")
}

