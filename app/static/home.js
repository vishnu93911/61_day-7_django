document.body.style.margin = "0";
document.body.style.fontFamily = "Poppins, Arial";
document.body.style.background = "linear-gradient(135deg, #4facfe, #00f2fe)";
document.body.style.height = "100vh";
document.body.style.display = "flex";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";

const box = document.getElementById("container");
box.style.background = "rgba(255,255,255,0.2)";
box.style.backdropFilter = "blur(10px)";
box.style.padding = "40px";
box.style.borderRadius = "20px";
box.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
box.style.textAlign = "center";
box.style.width = "320px";
box.style.transform = "scale(0.9)";
box.style.transition = "0.4s";

box.onmouseover = () => (box.style.transform = "scale(1.02)");
box.onmouseout = () => (box.style.transform = "scale(0.9)");

document.querySelector("#links").style.marginTop = "20px";

document.querySelectorAll("#links a").forEach(a => {
    a.style.display = "inline-block";
    a.style.margin = "10px";
    a.style.padding = "12px 20px";
    a.style.borderRadius = "10px";
    a.style.background = "linear-gradient(135deg, #ff9966, #ff5e62)";
    a.style.color = "white";
    a.style.textDecoration = "none";
    a.style.fontSize = "16px";
    a.style.boxShadow = "0 5px 12px rgba(0,0,0,0.2)";
    a.style.transition = "0.3s ease";

    a.onmouseover = () => {
        a.style.transform = "translateY(-4px)";
        a.style.boxShadow = "0 8px 18px rgba(0,0,0,0.3)";
    };
    a.onmouseout = () => {
        a.style.transform = "translateY(0)";
        a.style.boxShadow = "0 5px 12px rgba(0,0,0,0.2)";
    };
});
