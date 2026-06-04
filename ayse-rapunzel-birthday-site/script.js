const PASSWORD = "1010";
const TOGETHER_SINCE = "2024-10-10";
const BIRTHDAY = "2026-06-06";
const CUSTOM_MUSIC_FILE = "";

const body = document.body;
const lockScreen = document.getElementById("lockScreen");
const pinForm = document.getElementById("pinForm");
const pinInput = document.getElementById("pinInput");
const dots = [...document.querySelectorAll(".pin-dots span")];
const lockMessage = document.getElementById("lockMessage");
const siteContent = document.getElementById("siteContent");
const musicToggle = document.getElementById("musicToggle");
const envelope = document.getElementById("envelope");
const openLetter = document.getElementById("openLetter");

let audioContext;
let masterGain;
let musicTimer;
let musicOn = false;
let customAudio;

body.classList.add("is-locked");
pinInput.focus({ preventScroll: true });

function updatePinDisplay() {
  const value = pinInput.value.replace(/\D/g, "").slice(0, 4);
  if (pinInput.value !== value) {
    pinInput.value = value;
  }
  dots.forEach((dot, index) => {
    dot.classList.toggle("is-filled", index < value.length);
  });
}

function setPin(value) {
  pinInput.value = value.replace(/\D/g, "").slice(0, 4);
  updatePinDisplay();
}

function wrongPassword() {
  lockMessage.textContent = "Kapı bu rakamlarla açılmadı.";
  pinForm.classList.remove("shake");
  void pinForm.offsetWidth;
  pinForm.classList.add("shake");
  setTimeout(() => {
    setPin("");
    pinInput.focus({ preventScroll: true });
  }, 340);
}

function unlockSite() {
  lockMessage.textContent = "Kapı açılıyor.";
  lockScreen.classList.add("unlocked");
  startMusic();
  setTimeout(() => {
    siteContent.hidden = false;
    body.classList.remove("is-locked");
    lockScreen.classList.add("is-hidden");
    requestAnimationFrame(() => {
      document.getElementById("top").scrollIntoView({ block: "start" });
    });
  }, 1250);
}

pinInput.addEventListener("input", updatePinDisplay);

pinForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (pinInput.value === PASSWORD) {
    unlockSite();
  } else {
    wrongPassword();
  }
});

pinForm.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  if (button.dataset.key) {
    setPin(pinInput.value + button.dataset.key);
    if (pinInput.value.length === 4) {
      setTimeout(() => pinForm.requestSubmit(), 90);
    }
  }

  if (button.dataset.action === "clear") {
    setPin(pinInput.value.slice(0, -1));
  }
});

document.addEventListener("keydown", (event) => {
  if (!body.classList.contains("is-locked")) return;
  if (/^\d$/.test(event.key)) {
    event.preventDefault();
    setPin(pinInput.value + event.key);
    if (pinInput.value.length === 4) {
      setTimeout(() => pinForm.requestSubmit(), 90);
    }
  }
  if (event.key === "Backspace") {
    event.preventDefault();
    setPin(pinInput.value.slice(0, -1));
  }
});

function createAmbientShapes() {
  const lanternField = document.querySelector(".lantern-field");
  const balloonField = document.querySelector(".balloon-field");
  const lilyField = document.querySelector(".lily-field");

  for (let index = 0; index < 18; index += 1) {
    const lantern = document.createElement("span");
    lantern.className = "lantern";
    lantern.style.setProperty("--x", `${6 + Math.random() * 88}%`);
    lantern.style.setProperty("--delay", `${-Math.random() * 24}s`);
    lantern.style.setProperty("--duration", `${18 + Math.random() * 16}s`);
    lantern.style.setProperty("--scale", `${0.68 + Math.random() * 0.72}`);
    lanternField.append(lantern);
  }

  const balloonHues = [274, 318, 42, 356, 94];
  for (let index = 0; index < 12; index += 1) {
    const balloon = document.createElement("span");
    balloon.className = "balloon";
    balloon.style.setProperty("--x", `${8 + Math.random() * 84}%`);
    balloon.style.setProperty("--delay", `${-Math.random() * 28}s`);
    balloon.style.setProperty("--duration", `${22 + Math.random() * 18}s`);
    balloon.style.setProperty("--hue", balloonHues[index % balloonHues.length]);
    balloonField.append(balloon);
  }

  for (let index = 0; index < 14; index += 1) {
    const lily = document.createElement("span");
    lily.className = "floating-lily";
    lily.style.setProperty("--x", `${4 + Math.random() * 92}%`);
    lily.style.setProperty("--y", `${8 + Math.random() * 88}%`);
    lily.style.setProperty("--delay", `${-Math.random() * 7}s`);
    lily.innerHTML =
      "<span></span><span></span><span></span><span></span><span></span>";
    lilyField.append(lily);
  }
}

function initScrollAnimation() {
  const reveals = [...document.querySelectorAll(".reveal")];
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  reveals.forEach((element) => observer.observe(element));
}

function initParallax() {
  const parallaxItems = [...document.querySelectorAll(".parallax")];
  let ticking = false;

  const update = () => {
    const scrollY = window.scrollY || 0;
    parallaxItems.forEach((item) => {
      const speed = Number(item.dataset.speed || 0.12);
      item.style.setProperty("--parallax", `${scrollY * speed}px`);
    });
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true }
  );
}

function hydratePhotoSlots() {
  document.querySelectorAll(".photo-slot[data-photo]").forEach((slot) => {
    const url = slot.dataset.photo;
    const image = new Image();
    image.onload = () => {
      slot.style.backgroundImage = `url("${url}")`;
      slot.classList.add("has-photo");
    };
    image.src = url;
  });
}

function formatDays() {
  const start = new Date(`${TOGETHER_SINCE}T00:00:00`);
  const today = new Date();
  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const daysTogether = Math.max(0, Math.floor((todayStart - start) / 86400000));
  document.getElementById("daysTogether").textContent = daysTogether.toLocaleString("tr-TR");

  const birthday = new Date(`${BIRTHDAY}T00:00:00`);
  const birthdayStart = new Date(
    birthday.getFullYear(),
    birthday.getMonth(),
    birthday.getDate()
  );
  const daysLeft = Math.ceil((birthdayStart - todayStart) / 86400000);
  const birthdayText =
    daysLeft > 1
      ? `${daysLeft} gün kaldı`
      : daysLeft === 1
        ? "Yarın"
        : daysLeft === 0
          ? "Bugün"
          : "Kutlu olsun";
  document.getElementById("birthdayCountdown").textContent = birthdayText;
}

function setupCustomAudio() {
  if (!CUSTOM_MUSIC_FILE) return false;
  customAudio = new Audio(CUSTOM_MUSIC_FILE);
  customAudio.loop = true;
  customAudio.volume = 0.28;
  return true;
}

function setupSynthMusic() {
  if (audioContext) return;
  audioContext = new (window.AudioContext || window.webkitAudioContext)();
  masterGain = audioContext.createGain();
  masterGain.gain.value = 0.0001;
  masterGain.connect(audioContext.destination);
}

function playTone(frequency, start, duration, gainValue, type = "sine") {
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.linearRampToValueAtTime(gainValue, start + 0.08);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gain).connect(masterGain);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.12);
}

function playPattern() {
  if (!audioContext || !musicOn) return;
  const now = audioContext.currentTime + 0.05;
  const melody = [392, 440, 523.25, 493.88, 440, 392, 349.23, 392];
  const bass = [196, 220, 261.63, 246.94];

  melody.forEach((frequency, index) => {
    playTone(frequency, now + index * 0.55, 0.48, 0.036, "sine");
  });

  bass.forEach((frequency, index) => {
    const start = now + index * 1.1;
    playTone(frequency, start, 1.05, 0.018, "triangle");
    playTone(frequency * 1.5, start, 1.05, 0.012, "sine");
  });
}

function startMusic() {
  if (musicOn) return;
  musicOn = true;
  musicToggle.setAttribute("aria-pressed", "true");

  if (customAudio || setupCustomAudio()) {
    customAudio.play().catch(() => {
      musicOn = false;
      musicToggle.setAttribute("aria-pressed", "false");
    });
    return;
  }

  setupSynthMusic();
  audioContext.resume();
  masterGain.gain.cancelScheduledValues(audioContext.currentTime);
  masterGain.gain.linearRampToValueAtTime(0.16, audioContext.currentTime + 0.45);
  playPattern();
  musicTimer = window.setInterval(playPattern, 4400);
}

function stopMusic() {
  musicOn = false;
  musicToggle.setAttribute("aria-pressed", "false");

  if (customAudio) {
    customAudio.pause();
    return;
  }

  if (musicTimer) {
    window.clearInterval(musicTimer);
    musicTimer = undefined;
  }
  if (audioContext && masterGain) {
    masterGain.gain.cancelScheduledValues(audioContext.currentTime);
    masterGain.gain.linearRampToValueAtTime(0.0001, audioContext.currentTime + 0.25);
  }
}

musicToggle.addEventListener("click", () => {
  if (musicOn) {
    stopMusic();
  } else {
    startMusic();
  }
});

openLetter.addEventListener("click", () => {
  envelope.classList.add("is-open");
});

createAmbientShapes();
initScrollAnimation();
initParallax();
hydratePhotoSlots();
formatDays();
updatePinDisplay();
