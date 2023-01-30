let one = document.querySelector(".option-one");
let two = document.querySelector(".option-two");
let pic = document.querySelector(".picture"); //not hidden
let pie = document.querySelector(".art"); //hidden


one.onclick=function(){
  pic.style.display="none";
  pie.style.display="block";
};

two.onclick=function(){
  pie.style.display="none";
  pic.style.display="block";
}
