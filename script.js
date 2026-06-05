/*
  Ayşe için Rapunzel ve zambak temalı romantik site.
  Kişisel ayarlar aşağıdaki CONFIG objesinden değişir.
*/

const CONFIG = {
  name: "Ayşe",
  partnerName: "Kerem",
  password: "1010",
  startDate: "2025-10-10T00:00:00+03:00",
  photoCount: 1,
  photoBasePath: "assets/images/",
  backgroundMusicPath: "assets/music/background.mp3",
  envelopeSoundPath: "assets/music/envelope.mp3",
  spotifyTitle: "Kiss of Life",
  spotifyArtist: "Sade",
  // Spotify kartını kendin koymak istersen dosya adını assets/images/spotify-card.jpg yap.
  // Aşağıdaki alternatifler de otomatik denenir: .png, .jpeg, .JPG, .PNG
  spotifyCardImagePaths: [
    "assets/images/spotify-card.jpg",
    "assets/images/spotify-card.jpeg",
    "assets/images/spotify-card.png",
    "assets/images/spotify-card.JPG",
    "assets/images/spotify-card.PNG",
    "spotify-card.jpg",
    "spotify-card.png"
  ],
  title: "Ayşe'nin Masalı",
  subtitle: "Bu sayfa sadece kalbimin prensesi için hazırlandı.",
};

const LETTER_TEXT = `Bir zamanlar yüksek bir kulede değil, kalbimin en güzel yerinde yaşayan bir prenses vardı...

Gülüşü karanlık gecede yükselen fenerler gibiydi; sessizce ama bütün gökyüzünü değiştirecek kadar güçlü.

Sen hayatıma geldiğinden beri her sıradan gün biraz daha masala benzedi. Bazen bir mesajın, bazen bir bakışın, bazen de sadece varlığın bana iyi geliyor.
Bu sayfadaki her fener, seni düşününce içimde yanan küçük bir ışık. Her zambak, sana duyduğum temiz ve güzel sevginin küçük bir işareti.

İyi ki varsın Sevgilim. İyi ki benim masalıma sen geldin🩵`;

const PHOTO_NOTES = [
  "En özel karemiz",
  "Birlikte gülüşümüz",
  "Kalbimin fotoğrafı",
  "O gün de çok güzeldin",
  "İyi ki sen",
  "Masalımızdan bir kare",
  "Gülüşün yeter",
  "Benim prensesim",
  "Fenerler bile kıskanır",
  "Sonsuz anımız",
];

const PHOTO_LONG_NOTES = [
  {
    title: "Doğum Günün Kutlu Olsun Sevgilim",
    lines: [
      "Seninle birlikte geçirdiğimiz anlar çok değerli.",
      "Hep böyle birlikte yan yana olalım.",
      "En kötü günümüz bugünkü gibi olsun.",
      "Sen benim için çok değerlisin SENİ ÇOK SEVİYORUM🩷.",
              "İyi ki varsın sevgilim."
    ]
  },
  {
    title: "Ayşe, sen benim en güzel sayfamsın",
    lines: [
      "Yanında sıradan bir gün bile özel hissettiriyor.",
      "Bir fotoğrafın içine bile huzur sığdırabiliyorsun.",
      "Bu anıya bakınca kalbim biraz daha sakinleşiyor.",
      "Çünkü sen olduğunda her şey güzelleşiyor."
    ]
  },
  {
    title: "Küçük bir an, kocaman bir anlam",
    lines: [
      "Bazı fotoğraflar sadece görüntü değildir.",
      "İçinde gülüş, heyecan ve iyi ki vardır.",
      "Bu kare de benim için öyle bir yerde duruyor.",
      "Sana baktığım her an gibi çok değerli."
    ]
  },
  {
    title: "Masalımızdan bir sayfa",
    lines: [
      "Rapunzel'in fenerleri gökyüzüne yükselirken,",
      "benim içimdeki en parlak ışık hep sen oluyorsun.",
      "Bu fotoğraf da o ışığın küçük bir hatırası.",
      "Yanımda olduğun için çok şanslıyım."
    ]
  },
  {
    title: "Seninle anı biriktirmek",
    lines: [
      "Her fotoğraf başka bir iyi ki demek.",
      "Her bakış başka bir güzel hatıra demek.",
      "Seninle geçen zamanın izini saklamak istiyorum.",
      "Çünkü bu hikâyenin en güzel yanı sensin."
    ]
  },
  {
    title: "Kalbimin en tatlı telaşı",
    lines: [
      "Bazen bir fotoğrafa bakıp dakikalarca gülümsüyorum.",
      "Çünkü orada sen varsın, biz varız, anımız var.",
      "Bu sayfayı da o yüzden en özel yere koydum.",
      "Sana olan sevgim böyle küçük detaylarda saklı."
    ]
  },
  {
    title: "Birlikte güzeliz",
    lines: [
      "Seninle yan yana olmak bana iyi geliyor.",
      "Fotoğrafın duruşu bile içimi ısıtıyor.",
      "Bazen kelimeler yetmiyor ama anılar anlatıyor.",
      "Bu da bizim sessiz ama çok güzel cümlemiz."
    ]
  },
  {
    title: "Benim prensesim",
    lines: [
      "Bu masalda kuleler, fenerler ve zambaklar var.",
      "Ama hepsinden güzeli senin varlığın.",
      "Bu fotoğrafı o yüzden büyük tuttum.",
      "Çünkü bazı anılar küçücük kalmamalı."
    ]
  },
  {
    title: "Her şey biraz senden",
    lines: [
      "Bu sayfanın rengi de, ışığı da, çiçeği de senden.",
      "Ben sadece içimdeki duyguyu ekrana dökmeye çalıştım.",
      "Umarım baktığında ne kadar özel olduğunu hissedersin.",
      "Çünkü benim için gerçekten çok özelsin."
    ]
  },
  {
    title: "Son fotoğraf değil, yeni başlangıç",
    lines: [
      "Bu albüm burada bitiyor gibi görünebilir.",
      "Ama bizim masalımız daha yeni güzelleşiyor.",
      "Her yeni gün yeni bir fotoğraf, yeni bir anı olacak.",
      "Ve ben hepsini seninle yaşamak istiyorum."
    ]
  }
];

const LOVE_REASONS = [
  "Çünkü gülüşün en karanlık günü bile aydınlatıyor.",
  "Çünkü sesini duyunca içim sakinleşiyor.",
  "Çünkü yanında kendimi daha iyi biri gibi hissediyorum.",
  "Çünkü en küçük şeyleri bile güzelleştirebiliyorsun.",
  "Çünkü bakışlarında bana iyi gelen bir huzur var.",
  "Çünkü seninle konuşmak günümün en güzel kısmı oluyor.",
  "Çünkü kalbim seni düşününce istemsizce gülümsüyor.",
  "Çünkü varlığın bile bana güç veriyor.",
  "Çünkü bazen tek bir mesajın her şeyi düzeltiyor.",
  "Çünkü sen hayatıma çok güzel bir anlam kattın.",
  "Çünkü içtenliğin çok özel.",
  "Çünkü yanında zaman daha hızlı ve daha güzel geçiyor.",
  "Çünkü seninle kurduğum hayaller bana umut veriyor.",
  "Çünkü bazen hiçbir şey demesen bile iyi geliyorsun.",
  "Çünkü en doğal halin bile çok güzel.",
  "Çünkü kalbimin en yumuşak yerine dokunuyorsun.",
  "Çünkü seni düşünmek bile bana huzur veriyor.",
  "Çünkü yanımda olunca dünya daha az yorucu geliyor.",
  "Çünkü seninle her şey daha gerçek ve daha güzel.",
  "Çünkü küçük detayları önemsemen çok hoşuma gidiyor.",
  "Çünkü gözlerin bana ev gibi geliyor.",
  "Çünkü senin mutluluğun benim mutluluğum oluyor.",
  "Çünkü kalbimde çok özel bir yerin var.",
  "Çünkü seninle susmak bile güzel.",
  "Çünkü her halini sevecek kadar bağlandım sana.",
  "Çünkü benim için sadece sevgili değil, en güzel yol arkadaşısın.",
  "Çünkü bazen çocuk gibi neşeli, bazen çok olgunsun.",
  "Çünkü seninle gelecek fikri bana güzel geliyor.",
  "Çünkü seni sevmek içimden doğalca geliyor.",
  "Çünkü bana değerli hissettiriyorsun.",
  "Çünkü en basit anları bile unutulmaz yapıyorsun.",
  "Çünkü kalbin çok güzel.",
  "Çünkü sen benim en güzel tesadüfümsün.",
  "Çünkü yanında rol yapmadan kendim olabiliyorum.",
  "Çünkü bana güven veren bir yanın var.",
  "Çünkü sevginin içi sıcacık.",
  "Çünkü nazın bile güzel geliyor.",
  "Çünkü seni düşündüğümde yüzümde istemsiz bir tebessüm oluyor.",
  "Çünkü bana iyi ki dedirtiyorsun.",
  "Çünkü hayatımın en güzel cümlelerinden biri adın oldu.",
  "Çünkü seninle her yol daha güzel.",
  "Çünkü küçük bir bakışın bile kalbime yetiyor.",
  "Çünkü sen benim için çok özelsin.",
  "Çünkü kalbimi güzelleştiriyorsun.",
  "Çünkü senin yanında zamanın nasıl geçtiğini anlamıyorum.",
  "Çünkü hayallerime yakışıyorsun.",
  "Çünkü içimdeki en güzel duyguları ortaya çıkarıyorsun.",
  "Çünkü senin adını görmek bile beni mutlu ediyor.",
  "Çünkü sevildiğimi hissettiriyorsun.",
  "Çünkü seninle gülmek bambaşka.",
  "Çünkü masum tarafın çok tatlı.",
  "Çünkü güçlü tarafına hayranım.",
  "Çünkü bazen küçük bir şeyle bile kalbimi kazanıyorsun.",
  "Çünkü sana sarılma düşüncesi bile içimi ısıtıyor.",
  "Çünkü sen benim en sevdiğim kişisin.",
  "Çünkü her anında ayrı bir güzellik var.",
  "Çünkü sana bakınca iyi ki tanımışım diyorum.",
  "Çünkü yanında kendimi yalnız hissetmiyorum.",
  "Çünkü seninle anılar biriktirmek istiyorum.",
  "Çünkü içten güldüğünde dünya duruyor gibi oluyor.",
  "Çünkü bana umut oluyorsun.",
  "Çünkü sevgin sade ama çok değerli.",
  "Çünkü en sıradan günümde bile aklıma geliyorsun.",
  "Çünkü sana güvenmek istiyorum ve bu duygu çok güzel.",
  "Çünkü sen benim kalbimin en güzel alışkanlığı oldun.",
  "Çünkü küçük kıskançlıkların bile tatlı geliyor.",
  "Çünkü her konuşmamızdan sonra seni biraz daha seviyorum.",
  "Çünkü seninle aynı hikâyede olmak güzel.",
  "Çünkü adını içimden geçirince bile mutlu oluyorum.",
  "Çünkü kalbimdeki en parlak fener sensin.",
  "Çünkü seninle büyümek, öğrenmek ve değişmek istiyorum.",
  "Çünkü beni gülümsetmeyi çok iyi biliyorsun.",
  "Çünkü sana olan sevgim her gün biraz daha güzelleşiyor.",
  "Çünkü bu masalda prenses hep sensin.",
  "Çünkü ben seni gerçekten çok seviyorum.",
];

const state = {
  typedPassword: "",
  unlocked: false,
  letterOpened: false,
  musicAllowed: false,
};

const dom = {
  app: document.getElementById("app"),
  gateScene: document.getElementById("gateScene"),
  mainExperience: document.getElementById("mainExperience"),
  towerDoor: document.getElementById("towerDoor"),
  passwordDots: document.getElementById("passwordDots"),
  passwordMessage: document.getElementById("passwordMessage"),
  keypadCard: document.querySelector(".keypad-card"),
  lanternField: document.getElementById("lanternField"),
  sparkleField: document.getElementById("sparkleField"),
  lanternTemplate: document.getElementById("lanternTemplate"),
  polaroidTemplate: document.getElementById("polaroidTemplate"),
  reasonTemplate: document.getElementById("reasonTemplate"),
  polaroidGrid: document.getElementById("polaroidGrid"),
  reasonsGrid: document.getElementById("reasonsGrid"),
  envelope: document.getElementById("envelope"),
  openLetterBtn: document.getElementById("openLetterBtn"),
  typedLetter: document.getElementById("typedLetter"),
  backgroundMusic: document.getElementById("backgroundMusic"),
  envelopeSound: document.getElementById("envelopeSound"),
  musicToggle: document.getElementById("musicToggle"),
  daysTogether: document.getElementById("daysTogether"),
  hoursTogether: document.getElementById("hoursTogether"),
  minutesTogether: document.getElementById("minutesTogether"),
  secondsTogether: document.getElementById("secondsTogether"),
  foreverMessage: document.getElementById("foreverMessage"),
  spotifySongTitle: document.getElementById("spotifySongTitle"),
  spotifySongArtist: document.getElementById("spotifySongArtist"),
  spotifyMiniButton: document.getElementById("spotifyMiniButton"),
  spotifyReferenceImage: document.getElementById("spotifyReferenceImage"),
  spotifyCard: document.querySelector(".spotify-lyrics-card"),
};

function init() {
  updateStaticTexts();
  bindPasswordKeys();
  bindKeyboardSupport();
  bindEnvelope();
  bindMusic();
  bindSpotifyMiniButton();
  bindForeverButtons();
  updateSpotifyCard();
  createLanterns(36);
  createSparkles(90);
  createPolaroids();
  createReasons();
  updateCounter();
  setInterval(updateCounter, 1000);
  setupRevealObservers();
  setAudioSources();
}

function updateStaticTexts() {
  const titleNodes = document.querySelectorAll(".hero-content h2, .tower-title-card h1");
  titleNodes.forEach((node, index) => {
    node.textContent = index === 0 ? `${CONFIG.name}'nin Kulesi` : CONFIG.title;
  });

  const heroSubtitle = document.querySelector(".hero-content p");
  if (heroSubtitle) heroSubtitle.textContent = CONFIG.subtitle;

  document.title = "İyi ki Doğdun Sevgilim 💜";
}

function setAudioSources() {
  if (dom.backgroundMusic) {
    const source = dom.backgroundMusic.querySelector("source");
    if (source) source.src = CONFIG.backgroundMusicPath;
    dom.backgroundMusic.load();
  }

  if (dom.envelopeSound) {
    const source = dom.envelopeSound.querySelector("source");
    if (source) source.src = CONFIG.envelopeSoundPath;
    dom.envelopeSound.load();
  }
}

function bindPasswordKeys() {
  document.querySelectorAll(".key-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.key;
      const action = button.dataset.action;

      if (key) addPasswordDigit(key);
      if (action === "clear") clearPassword();
      if (action === "enter") checkPassword();
    });
  });
}

function bindKeyboardSupport() {
  window.addEventListener("keydown", (event) => {
    if (state.unlocked) return;

    if (/^[0-9]$/.test(event.key)) {
      addPasswordDigit(event.key);
    }

    if (event.key === "Backspace") {
      state.typedPassword = state.typedPassword.slice(0, -1);
      renderPasswordDots();
    }

    if (event.key === "Enter") {
      checkPassword();
    }

    if (event.key === "Escape") {
      clearPassword();
    }
  });
}

function addPasswordDigit(digit) {
  if (state.typedPassword.length >= CONFIG.password.length) return;
  state.typedPassword += digit;
  renderPasswordDots();
  softTap();

  if (state.typedPassword.length === CONFIG.password.length) {
    window.setTimeout(checkPassword, 180);
  }
}

function clearPassword() {
  state.typedPassword = "";
  renderPasswordDots();
  dom.passwordMessage.textContent = "Şifreyi tekrar yazabilirsin 💜";
}

function renderPasswordDots() {
  const dots = [...dom.passwordDots.children];
  dots.forEach((dot, index) => {
    dot.classList.toggle("filled", index < state.typedPassword.length);
  });
}

function checkPassword() {
  if (state.typedPassword === CONFIG.password) {
    unlockExperience();
  } else {
    wrongPassword();
  }
}

function wrongPassword() {
  state.typedPassword = "";
  renderPasswordDots();
  dom.passwordMessage.textContent = "Bu kapı sadece bizim masalımıza açılır 💜";
  dom.keypadCard.classList.remove("shake");
  void dom.keypadCard.offsetWidth;
  dom.keypadCard.classList.add("shake");
  playTinyErrorSound();
}

function unlockExperience() {
  if (state.unlocked) return;

  state.unlocked = true;
  state.musicAllowed = true;
  dom.passwordMessage.textContent = "Kapı açılıyor... ✨";
  dom.towerDoor.classList.add("open");
  playUnlockSound();

  window.setTimeout(() => {
    dom.gateScene.classList.add("unlocked");
    dom.app.classList.remove("is-locked");
    dom.mainExperience.classList.add("visible");
    document.body.style.overflowY = "auto";
    tryPlayMusic();
    burstLanterns(12);
  }, 1050);

  window.setTimeout(() => {
    dom.gateScene.style.display = "none";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, 1900);
}

function bindEnvelope() {
  const open = (event) => {
    if (event) event.stopPropagation();
    openEnvelope();
  };

  dom.envelope.addEventListener("click", open);
  dom.envelope.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") open(event);
  });
  dom.openLetterBtn.addEventListener("click", open);
}

function openEnvelope() {
  if (state.letterOpened) return;

  state.letterOpened = true;
  dom.envelope.classList.add("open");
  playEnvelopeSound();
  typeLetter(LETTER_TEXT, dom.typedLetter, 24);
}

function bindMusic() {
  dom.musicToggle.addEventListener("click", () => {
    state.musicAllowed = true;

    if (dom.backgroundMusic.paused) {
      tryPlayMusic();
    } else {
      dom.backgroundMusic.pause();
      dom.musicToggle.classList.remove("is-playing");
      if (dom.spotifyMiniButton) dom.spotifyMiniButton.textContent = "▶";
    }
  });
}


function bindSpotifyMiniButton() {
  if (!dom.spotifyMiniButton) return;

  dom.spotifyMiniButton.addEventListener("click", () => {
    state.musicAllowed = true;

    if (dom.backgroundMusic.paused) {
      tryPlayMusic();
    } else {
      dom.backgroundMusic.pause();
      dom.musicToggle.classList.remove("is-playing");
      if (dom.spotifyMiniButton) dom.spotifyMiniButton.textContent = "▶";
      dom.spotifyMiniButton.textContent = "▶";
    }
  });
}

function updateSpotifyCard() {
  if (dom.spotifySongTitle) dom.spotifySongTitle.textContent = CONFIG.spotifyTitle;
  if (dom.spotifySongArtist) dom.spotifySongArtist.textContent = CONFIG.spotifyArtist;
  setupSpotifyReferenceImage();
}

function setupSpotifyReferenceImage() {
  if (!dom.spotifyReferenceImage || !dom.spotifyCard) return;

  const paths = Array.isArray(CONFIG.spotifyCardImagePaths)
    ? CONFIG.spotifyCardImagePaths
    : ["assets/images/spotify-card.jpg"];

  let index = 0;

  const showGeneratedCard = () => {
    dom.spotifyReferenceImage.style.display = "none";
    dom.spotifyCard.classList.remove("using-reference-image");
    dom.spotifyCard.classList.add("show-generated-spotify");
  };

  const tryPath = () => {
    if (index >= paths.length) {
      showGeneratedCard();
      return;
    }

    const path = paths[index];
    index += 1;

    dom.spotifyReferenceImage.onload = () => {
      dom.spotifyReferenceImage.style.display = "block";
      dom.spotifyCard.classList.add("using-reference-image");
      dom.spotifyCard.classList.remove("show-generated-spotify");
    };

    dom.spotifyReferenceImage.onerror = tryPath;
    dom.spotifyReferenceImage.src = `${path}?v=${Date.now()}`;
  };

  tryPath();
}

function tryPlayMusic() {
  if (!state.musicAllowed || !dom.backgroundMusic) return;

  dom.backgroundMusic.volume = 0.34;
  dom.backgroundMusic.play()
    .then(() => {
      dom.musicToggle.classList.add("is-playing");
      if (dom.spotifyMiniButton) dom.spotifyMiniButton.textContent = "Ⅱ";
    })
    .catch(() => {
      dom.musicToggle.classList.remove("is-playing");
      if (dom.spotifyMiniButton) dom.spotifyMiniButton.textContent = "▶";
    });
}

function playEnvelopeSound() {
  if (dom.envelopeSound) {
    dom.envelopeSound.currentTime = 0;
    dom.envelopeSound.volume = 0.65;
    dom.envelopeSound.play().catch(() => playChimeSound());
  } else {
    playChimeSound();
  }
}

function playUnlockSound() {
  playToneSequence([
    { frequency: 523.25, duration: 0.08, gain: 0.055 },
    { frequency: 659.25, duration: 0.08, gain: 0.05 },
    { frequency: 783.99, duration: 0.16, gain: 0.045 },
  ]);
}

function playChimeSound() {
  playToneSequence([
    { frequency: 880, duration: 0.06, gain: 0.045 },
    { frequency: 1174.66, duration: 0.07, gain: 0.04 },
    { frequency: 1567.98, duration: 0.14, gain: 0.035 },
  ]);
}

function playTinyErrorSound() {
  playToneSequence([
    { frequency: 180, duration: 0.08, gain: 0.035 },
    { frequency: 130, duration: 0.12, gain: 0.03 },
  ]);
}

function softTap() {
  playToneSequence([{ frequency: 440, duration: 0.025, gain: 0.012 }]);
}

function playToneSequence(notes) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  const ctx = new AudioContext();
  let cursor = ctx.currentTime;

  notes.forEach((note) => {
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = note.frequency;
    gain.gain.setValueAtTime(0.0001, cursor);
    gain.gain.exponentialRampToValueAtTime(note.gain, cursor + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, cursor + note.duration);
    oscillator.connect(gain);
    gain.connect(ctx.destination);
    oscillator.start(cursor);
    oscillator.stop(cursor + note.duration + 0.02);
    cursor += note.duration * 0.85;
  });

  window.setTimeout(() => ctx.close(), 900);
}

function typeLetter(text, target, speed = 26) {
  target.textContent = "";
  let index = 0;

  const paper = target.closest(".paper");

  const START_HEIGHT = 360;
  const END_HEIGHT = 650;

  if (paper) {
    paper.style.setProperty("--paper-height", `${START_HEIGHT}px`);
  }

  const timer = window.setInterval(() => {
    if (index >= text.length) {
      window.clearInterval(timer);

      if (paper) {
        paper.style.setProperty("--paper-height", `${END_HEIGHT}px`);
      }

      return;
    }

    target.textContent += text[index];
    index += 1;

    if (paper) {
      const progress = index / text.length;
      const currentHeight = START_HEIGHT + (END_HEIGHT - START_HEIGHT) * progress;
      paper.style.setProperty("--paper-height", `${currentHeight}px`);
    }
  }, speed);
}

function createLanterns(count) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < count; i += 1) {
    const lantern = dom.lanternTemplate.content.firstElementChild.cloneNode(true);
    setLanternVars(lantern, i);
    fragment.appendChild(lantern);
  }

  dom.lanternField.appendChild(fragment);
}

function setLanternVars(lantern, index) {
  const size = random(28, 78);
  const x = random(-5, 105);
  const duration = random(13, 28);
  const delay = random(-26, 2);
  const drift = random(-80, 80);
  const tilt = random(-12, 12);
  const opacity = random(0.35, 0.92);

  lantern.style.setProperty("--size", `${size}px`);
  lantern.style.setProperty("--x", `${x}vw`);
  lantern.style.setProperty("--duration", `${duration}s`);
  lantern.style.setProperty("--delay", `${delay}s`);
  lantern.style.setProperty("--drift", `${drift}px`);
  lantern.style.setProperty("--tilt", `${tilt}deg`);
  lantern.style.setProperty("--opacity", opacity.toFixed(2));
  lantern.dataset.index = String(index);
}

function burstLanterns(count) {
  for (let i = 0; i < count; i += 1) {
    const lantern = dom.lanternTemplate.content.firstElementChild.cloneNode(true);
    lantern.style.setProperty("--size", `${random(40, 86)}px`);
    lantern.style.setProperty("--x", `${random(5, 95)}vw`);
    lantern.style.setProperty("--duration", `${random(8, 13)}s`);
    lantern.style.setProperty("--delay", `${random(-1, 0.3)}s`);
    lantern.style.setProperty("--drift", `${random(-100, 100)}px`);
    lantern.style.setProperty("--tilt", `${random(-16, 16)}deg`);
    lantern.style.setProperty("--opacity", "0.95");
    dom.lanternField.appendChild(lantern);

    window.setTimeout(() => lantern.remove(), 14500);
  }
}

function createSparkles(count) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < count; i += 1) {
    const sparkle = document.createElement("span");
    sparkle.className = "sparkle";
    sparkle.style.setProperty("--x", `${random(0, 100)}vw`);
    sparkle.style.setProperty("--y", `${random(0, 100)}vh`);
    sparkle.style.setProperty("--s", `${random(2, 5)}px`);
    sparkle.style.setProperty("--d", `${random(2, 6)}s`);
    sparkle.style.setProperty("--delay", `${random(-6, 0)}s`);
    fragment.appendChild(sparkle);
  }

  dom.sparkleField.appendChild(fragment);
}

function createPolaroids() {
  const fragment = document.createDocumentFragment();

  for (let i = 1; i <= CONFIG.photoCount; i += 1) {
    const memory = document.createElement("article");
    memory.className = "memory-page reveal-polaroid";
    memory.style.setProperty("--delay", `${0.04 + i * 0.035}s`);
    memory.style.setProperty("--tilt", `${i % 2 === 0 ? 2.2 : -2.2}deg`);

    const noteData = PHOTO_LONG_NOTES[i - 1] || {
      title: PHOTO_NOTES[i - 1] || `Anı ${i}`,
      lines: [
        "Bu fotoğraf bizim küçük masalımızdan bir kare.",
        "Yanında geçen her an daha güzel hissettiriyor.",
        "Ayşe, sen bu sayfanın en parlak yerisin.",
        "İyi ki bu anılarımız var."
      ]
    };

    memory.innerHTML = `
      <div class="memory-photo-side">
        <div class="memory-polaroid">
          <span class="polaroid-tape" aria-hidden="true"></span>
          <div class="photo-wrap">
            <img src="${CONFIG.photoBasePath}photo${i}.jpg" alt="${CONFIG.name} için anı fotoğrafı ${i}" />
            <span class="photo-placeholder">photo ${i}</span>
          </div>
          <p>${PHOTO_NOTES[i - 1] || `Anı ${i}`}</p>
        </div>
      </div>
      <div class="memory-note-side">
        <span class="memory-kicker">sayfa ${String(i).padStart(2, "0")}</span>
        <h3>${noteData.title}</h3>
        <div class="memory-lines">
          ${noteData.lines.map((line) => `<p>${line}</p>`).join("")}
        </div>
      </div>
    `;

    const img = memory.querySelector("img");
    img.addEventListener("error", () => {
      img.classList.add("is-missing");
    });

    fragment.appendChild(memory);
  }

  dom.polaroidGrid.appendChild(fragment);
}

function createReasons() {
  const fragment = document.createDocumentFragment();

  LOVE_REASONS.forEach((reason, index) => {
    const card = dom.reasonTemplate.content.firstElementChild.cloneNode(true);
    const number = card.querySelector(".reason-number");
    const text = card.querySelector("p");

    number.textContent = String(index + 1).padStart(2, "0");
    text.textContent = reason;
    card.style.transitionDelay = `${Math.min(index * 0.018, 0.45)}s`;
    fragment.appendChild(card);
  });

  dom.reasonsGrid.appendChild(fragment);
}

function updateCounter() {
  const start = new Date(CONFIG.startDate).getTime();
  const now = Date.now();
  const diff = Math.max(0, now - start);

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  dom.daysTogether.textContent = String(days);
  dom.hoursTogether.textContent = String(hours).padStart(2, "0");
  dom.minutesTogether.textContent = String(minutes).padStart(2, "0");
  dom.secondsTogether.textContent = String(seconds).padStart(2, "0");
}

function setupRevealObservers() {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16, rootMargin: "0px 0px -8% 0px" });

  document.querySelectorAll(".reveal-up").forEach((element) => {
    revealObserver.observe(element);
  });

  const polaroidObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        polaroidObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.22 });

  document.querySelectorAll(".reveal-polaroid").forEach((element) => {
    polaroidObserver.observe(element);
  });
}

function bindForeverButtons() {
  document.querySelectorAll(".forever-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      dom.foreverMessage.textContent = "O zaman masalımız daha yeni başlıyor…";
      document.body.classList.add("final-glow");
      burstLanterns(22);
      createHeartBurst(event.clientX, event.clientY, 36);
      playChimeSound();

      window.setTimeout(() => {
        document.body.classList.remove("final-glow");
      }, 3000);
    });
  });
}

function createHeartBurst(x, y, count) {
  for (let i = 0; i < count; i += 1) {
    const particle = document.createElement("span");
    particle.className = "heart-burst";
    particle.style.setProperty("--x", `${x}px`);
    particle.style.setProperty("--y", `${y}px`);
    particle.style.setProperty("--dx", `${random(-180, 180)}px`);
    particle.style.setProperty("--dy", `${random(-170, 90)}px`);
    particle.style.setProperty("--s", `${random(0.9, 2.1)}rem`);
    document.body.appendChild(particle);
    window.setTimeout(() => particle.remove(), 1300);
  }
}

function random(min, max) {
  return Math.random() * (max - min) + min;
}

init();
