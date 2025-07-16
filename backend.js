function readMore(elem){
  elem.getproperty("flex = 8")
};

let buttRM = document.getElementsByClassName("read-more1");
let buttRM2 = document.getElementsByClassName("read-more2");
let Post = document.getRootNode(composed = "true").nodename;
let output = document.createElement("p").innerHTML = `${Post}`;

buttRM.addEventListener("click", readMore())
buttRM2.addEventListener("click", readMore())