document.getElementById("btn").addEventListener("click", function () {
  const msgEl = document.getElementById("msg");
  const timeStr = new Date().toLocaleString("vi-VN");
  msgEl.textContent = "✨ Phiên bản 2.0 - Đã deploy thành công lúc: " + timeStr;
  msgEl.style.color = "#0284c7";
});
