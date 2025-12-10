document.body.style.margin = "0";
document.body.style.fontFamily = "Poppins, Arial";
document.body.style.background = "linear-gradient(120deg, #84fab0, #8fd3f4)";
document.body.style.height = "100vh";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";

const box = document.getElementById("loginBox");
box.style.width = "330px";
box.style.padding = "35px";
box.style.background = "rgba(255,255,255,0.2)";
box.style.backdropFilter = "blur(15px)";
box.style.borderRadius = "20px";
box.style.boxShadow = "0 10px 30px rgba(0,0,0,0.25)";
box.style.textAlign = "center";
box.style.transform = "scale(0.8)";
box.style.animation = "popIn 0.7s forwards";

document.head.insertAdjacentHTML("beforeend", `
<style>
@keyframes popIn {
  0% { transform: scale(0.5); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}
</style>
`);

const form = document.getElementById("loginForm");
form.style.display = "grid";
form.style.gap = "15px";

document.querySelectorAll("#loginForm input").forEach(inp => {
    inp.style.padding = "12px";
    inp.style.fontSize = "16px";
    inp.style.border = "none";
    inp.style.borderRadius = "8px";
    inp.style.boxShadow = "0 5px 15px rgba(0,0,0,0.15)";
});

const btn = document.querySelector("button");
btn.style.padding = "12px";
btn.style.background = "linear-gradient(135deg, #43e97b, #38f9d7)";
btn.style.color = "white";
btn.style.border = "none";
btn.style.borderRadius = "10px";
btn.style.boxShadow = "0 6px 18px rgba(0,0,0,0.2)";
btn.style.fontSize = "18px";
btn.style.cursor = "pointer";
btn.style.transition = "0.3s";

btn.onmouseover = () => (btn.style.transform = "translateY(-4px)");
btn.onmouseout = () => (btn.style.transform = "translateY(0)");
