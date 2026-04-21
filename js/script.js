const nextBtn = document.getElementById("nextBtn");
const skipBtn = document.getElementById("skipBtn");

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    const path = window.location.pathname;

    if (path.includes("index")) {
      window.location.href = "onboarding2.html";
    } else if (path.includes("onboarding2")) {
      window.location.href = "onboarding3.html";
    } else {
      window.location.href = "login.html";
    }
  });
}

if (skipBtn) {
  skipBtn.addEventListener("click", () => {
    window.location.href = "login.html";
  });
}
