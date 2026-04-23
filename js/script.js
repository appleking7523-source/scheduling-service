/* =========================
   Onboarding
========================= */

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

/* =========================
   Signup
========================= */

const signupForm = document.querySelector(".signup-wrapper");

if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // 나중에 회원가입 유효성 검사 추가
    window.location.href = "home.html";
  });
}

/* =========================
   Login
========================= */

const loginForm = document.querySelector(".login-wrapper");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // 나중에 로그인 검증 추가
    window.location.href = "home.html";
  });
}

/* =========================
   Schedule Modal
========================= */

const openScheduleModal = document.getElementById("openScheduleModal");
const closeScheduleModal = document.getElementById("closeScheduleModal");
const scheduleModal = document.getElementById("scheduleModal");

if (openScheduleModal && closeScheduleModal && scheduleModal) {
  openScheduleModal.addEventListener("click", () => {
    scheduleModal.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  closeScheduleModal.addEventListener("click", () => {
    scheduleModal.classList.remove("active");
    document.body.style.overflow = "";
  });

  scheduleModal.addEventListener("click", (e) => {
    if (e.target === scheduleModal) {
      scheduleModal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
}

/* =========================
   Logout
========================= */

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    window.location.href = "login.html";
  });
}
