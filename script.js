function check() {
  const pwd = document.getElementById("pwd").value;
  const corretta = "TESSEO2025"; // <-- scegli qui la tua password

  if (pwd === corretta) {
    window.location.href = "contenuto.html";
  } else {
    document.getElementById("msg").innerText = "Password errata";
  }
}
