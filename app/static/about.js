document.body.style.margin = "0";
document.body.style.fontFamily = "Poppins, Arial";
document.body.style.background = "linear-gradient(135deg, #667eea, #764ba2)";
document.body.style.minHeight = "100vh";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";

const b = document.getElementById("box");
b.style.width = "70%";
b.style.maxWidth = "600px";
b.style.padding = "40px";
b.style.background = "rgba(255, 255, 255, 0.15)";
b.style.backdropFilter = "blur(10px)";
b.style.borderRadius = "18px";
b.style.boxShadow = "0 15px 35px rgba(0,0,0,0.3)";
b.style.textAlign = "center";
b.style.opacity = "0";
b.style.transform = "translateY(40px)";
b.style.transition = "0.8s ease";

setTimeout(() => {
    b.style.opacity = "1";
    b.style.transform = "translateY(0)";
}, 200);

document.querySelector("h2").style.color = "white";
document.querySelector("h2").style.textShadow = "0 0 10px white";

document.querySelector("p").style.color = "#f1f1f1";
document.querySelector("p").style.fontSize = "18px";
document.querySelector("p").style.lineHeight = "1.6";
