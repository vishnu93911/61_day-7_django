document.body.style.margin = "0";
document.body.style.fontFamily = "Poppins, Arial";
document.body.style.background = "linear-gradient(145deg, #ff9a9e, #fad0c4)";
document.body.style.minHeight = "100vh";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";

const box = document.getElementById("box");
box.style.width = "70%";
box.style.maxWidth = "550px";
box.style.background = "rgba(255,255,255,0.2)";
box.style.backdropFilter = "blur(10px)";
box.style.padding = "40px";
box.style.borderRadius = "20px";
box.style.boxShadow = "0 12px 30px rgba(0,0,0,0.2)";
box.style.textAlign = "center";
box.style.animation = "floatUpDown 3s infinite ease-in-out";

const form = document.getElementById("formBox");
form.style.display = "grid";
form.style.gap = "15px";

document.querySelectorAll("input, textarea").forEach(el => {
    el.style.padding = "12px";
    el.style.border = "none";
    el.style.borderRadius = "10px";
    el.style.fontSize = "16px";
    el.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
});

const btn = document.querySelector("button");
btn.style.padding = "12px";
btn.style.background = "linear-gradient(135deg, #ff758c, #ff7eb3)";
btn.style.color = "white";
btn.style.borderRadius = "10px";
btn.style.border = "none";
btn.style.fontSize = "18px";
btn.style.cursor = "pointer";
btn.style.boxShadow = "0 6px 15px rgba(0,0,0,0.2)";
btn.style.transition = "0.3s";

btn.onmouseover = () => (btn.style.transform = "scale(1.05)");
btn.onmouseout = () => (btn.style.transform = "scale(1)");

/* Floating Animation */
document.head.insertAdjacentHTML("beforeend", `
<style>
@keyframes floatUpDown {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}
</style>
`);
