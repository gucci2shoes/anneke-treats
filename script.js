const DEV_MODE = false;
const PASSWORD = "bigmama";
const TOO_SOON_MESSAGE = "Too soon! Come back on the right day 💫";
const STORAGE_KEY = "annekeTreatsUnlockedDates";

const START_DATE_STR = "2025-10-03";
const END_DATE_STR = "2025-10-15";
const MS_PER_DAY = 24 * 60 * 60 * 1000;

const dayEntries = [
  {
    date: "2025-10-03",
    title: "Day 1",
    intro:
      "I’m off to London today ✈️. London’s Underground was the world’s first underground passenger railway, opening in 1863.",
    message:
      "Go check my bottom drawer — there should be a ghostly friend waiting to keep you company (he’s a friendly ghost).",
    image: "images/day1.jpeg",
    theme: "linear-gradient(to bottom, #f9d423, #ff4e50)",
  },
  {
    date: "2025-10-04",
    title: "Day 2",
    intro:
      "Still in London 🇬🇧. Did you know London has over 270 Tube stations today?",
    message:
      "It's not fall without Stars Hollow. Go check the glovebox of the Jeep; you should find something to set the vibes to hang with Rory and Lorelai.",
    image: "images/day2.jpeg",
    theme: "linear-gradient(to bottom, #4facfe, #00f2fe)",
  },
  {
    date: "2025-10-05",
    title: "Day 3",
    intro:
      "Made it to Tbilisi! 🇬🇪 Tbilisi’s name comes from the Old Georgian word ‘tpili’, meaning ‘warm,’ referring to its sulfur hot springs.",
    message: "Portugal, us, and some of my favorite memories 🇵🇹.",
    image: "images/day3.jpeg",
    video: "videos/portugal.mp4",
    theme: "linear-gradient(to bottom, #43e97b, #38f9d7)",
  },
  {
    date: "2025-10-06",
    title: "Day 4",
    intro:
      "Still in Tbilisi. Did you know it’s home to the ‘Bridge of Peace,’ a modern glass-and-steel pedestrian bridge linking Old Tbilisi with Rike Park?",
    message:
      "Don’t bother prepping the coffee tonight, head over to Coffee Cycle for a tastier cup ☕. Check my top-left drawer for a little surprise that’ll cover it (it's in my Sea Ranch socks on the right side).",
    image: "images/day4.jpeg",
    theme: "linear-gradient(to bottom, #ff9a9e, #fad0c4)",
  },
  {
    date: "2025-10-07",
    title: "Day 5",
    intro:
      "Still in Tbilisi. The Giorgi Chitaia Open Air Museum features over 70 historic buildings moved from across Georgia to preserve traditional architecture.",
    message:
      "Here’s a note I wrote you back in 2021, during your law school days, and when I was a better boyfriend for enjoying (some) reality TV:\n\nI want to couple up with this girl because… she’s the most driven person I know. Struggles only make her more determined (and a bit delirious at times). She wants to share what she’s working on with me, from interview prep to ridiculous cases from the 19th century.\n\nWe have similar ideologies but she’s quick to challenge me when I’m too reactionary, and she’s politically aware enough to have an opinion but not so woke that she’s obnoxious about it. She got STRAIGHT As her first semester of law school and continues to push through even when the workload feels comically insurmountable.\n\nAll of this on top of being an absolute smokeshow. She’s fit, toned, and turns me on with just a look. She makes me very stompy.",
    image: "images/day5.jpeg",
    theme: "linear-gradient(to bottom, #a18cd1, #fbc2eb)",
  },
  {
    date: "2025-10-08",
    title: "Day 6",
    intro:
      "Today we’re headed to Mtskheta 🏛️. It’s one of the oldest continuously inhabited cities in the world and home to the Svetitskhoveli Cathedral, built in 1010.",
    message: "I think you deserve a sweet treat :). Go into the closet, get on your tip toes, and pull out the treat under my timbers hat.",
    image: "images/day6.jpeg",
    theme: "linear-gradient(to bottom, #fddb92, #d1fdff)",
  },
  {
    date: "2025-10-09",
    title: "Day 7",
    intro:
      "Today we’re off to Shatili ⛰️. This medieval fortress-village was built between the 7th and 13th centuries, perched deep in the Arghuni Gorge.",
    message:
      "Here's another throwback note I wrote for you:\nAnneke,\n\nI know it’s hard to remember as law school ramps back up into it’s craziness, but you have already achieved so much and continue to get everything you deserve for your hard work: a summer position at Skadden, Law Review, straight As, clinic, a return offer and scholarship because they don’t want to lose you, and rave reviews from everyone you’ve worked with.\n\nIf you’re feeling overwhelmed or like the long hours will never end I hope this mug reminds you of vacation in Hawaii and that there is light at the end of the tunnel and I’m always here for you. I can’t wait to travel the world with you. Pasta with you in Italy? Premier league match in England? Anneke as my European tour guide?\n\nI love you more every day,\nGuz",
    image: "images/day7.jpeg",
    theme: "linear-gradient(to bottom, #f6d365, #fda085)",
  },
  {
    date: "2025-10-10",
    title: "Day 8",
    intro:
      "Still in Shatili. The Khevsureti region is known for its mountaineer culture and defensive tower architecture.",
    message: "Scavenger hunt: 'Check the spice rack 🌶️'",
    image: "images/day8.jpeg",
    theme: "linear-gradient(to bottom, #84fab0, #8fd3f4)",
  },
  {
    date: "2025-10-11",
    title: "Day 9",
    intro:
      "Today we’re headed to Telavi 🍷. It’s in the heart of Georgia’s wine region and is home to a 900-year-old plane tree.",
    message:
      "First paragraph of a longer love letter placeholder.\n\nSecond paragraph keeps the heartfelt tone and adds future plans.",
    image: "images/day9.jpeg",
    theme: "linear-gradient(to bottom, #fccb90, #d57eeb)",
  },
  {
    date: "2025-10-12",
    title: "Day 10",
    intro:
      "Still in Telavi. The Kakheti region around Telavi is often considered Georgia’s wine capital — Georgia is thought to be one of the birthplaces of wine-making over 8,000 years ago.",
    message: "Scavenger hunt: 'Look in your favorite mug ☕'",
    image: "images/day10.jpeg",
    theme: "linear-gradient(to bottom, #30cfd0, #330867)",
  },
  {
    date: "2025-10-13",
    title: "Day 11",
    intro:
      "Today we’re off to Signaghi ❤️. It’s nicknamed the ‘City of Love,’ perched above the Alazani Valley with panoramic views.",
    message: "Sweet anticipation note: 'One more sleep until I’m back!'",
    image: "images/day11.jpeg",
    theme: "linear-gradient(to bottom, #5ee7df, #b490ca)",
  },
  {
    date: "2025-10-15",
    title: "Day 12",
    intro:
      "Back in Tbilisi 🎶. The city hosts an annual Jazz Festival in October, bringing international jazz, blues, and soul artists.",
    message: "Final message: 'I’m probably on my way home right now… get ready for a big hug 🫂'",
    image: "images/day12.jpeg",
    theme: "linear-gradient(to bottom, #ee9ca7, #ffdde1)",
  },
];

const collageSources = Array.from(
  { length: 10 },
  (_, index) => `collage/collage${index + 1}.jpeg`
);

const TOTAL_DAYS = dayEntries.length;

const loginPanel = document.querySelector(".login-panel");
const dayPanel = document.querySelector(".day-panel");
const passwordForm = document.getElementById("password-form");
const passwordInput = document.getElementById("password-input");
const passwordError = document.getElementById("password-error");

const dayCardInner = document.getElementById("day-card-inner");
const dayDate = document.getElementById("day-date");
const dayTitle = document.getElementById("day-title");
const dayImage = document.getElementById("day-image");
const dayVideo = document.getElementById("day-video");
const imagePlaceholder = document.getElementById("image-placeholder");
const dayIntro = document.getElementById("day-intro");
const dayText = document.getElementById("day-text");
const statusMessage = document.getElementById("status-message");
const dayProgress = document.getElementById("day-progress");
const prevButton = document.getElementById("prev-day");
const nextButton = document.getElementById("next-day");
const devBadge = document.getElementById("dev-badge");
const dayList = document.getElementById("day-list");
const homeStatus = document.getElementById("home-status");
const homePanel = document.getElementById("home-panel");
const homeGrid = document.getElementById("home-grid");
const dayLayout = document.getElementById("day-layout");
const backHomeButton = document.getElementById("back-home");

const storage = createStorageHelper(STORAGE_KEY);
const unlockedDates = new Set(DEV_MODE ? [] : storage.read());

const START_DATE = createLocalDateFromISO(START_DATE_STR);
const END_DATE = createLocalDateFromISO(END_DATE_STR);
const dateToIndex = new Map();
dayEntries.forEach((entry, index) => {
  dateToIndex.set(entry.date, index);
});

let today = startOfDay(new Date());
let unlockedMaxIndex = DEV_MODE ? dayEntries.length - 1 : calculateUnlockedMaxIndex();
if (!DEV_MODE) {
  synchronizeUnlockedDates();
}

let currentIndex = determineInitialIndex();
let isAuthenticated = false;
let currentView = "login";

if (devBadge) {
  if (DEV_MODE) {
    devBadge.classList.remove("hidden");
  } else {
    devBadge.classList.add("hidden");
  }
}

let collageImagesCache = null;

function preloadCollageImages() {
  if (!collageSources.length) {
    return Promise.resolve([]);
  }

  if (!collageImagesCache) {
    collageImagesCache = Promise.all(
      collageSources.map(
        (src) =>
          new Promise((resolve) => {
            const image = new Image();
            image.onload = () => resolve(image);
            image.onerror = () => resolve(null);
            image.src = src;
          })
      )
    ).then((images) => images.filter(Boolean));
  }

  return collageImagesCache;
}

function generateCollageBackground() {
  preloadCollageImages()
    .then((images) => {
      const fallbackColor = "#fef9ff";

      if (!images.length) {
        document.body.style.backgroundColor = fallbackColor;
        document.body.style.backgroundImage = "";
        return;
      }

      const viewportWidth = Math.max(window.innerWidth || 0, 640);
      const viewportHeight = Math.max(window.innerHeight || 0, 720);
      const ratio = Math.min(window.devicePixelRatio || 1, 2);

      const canvas = document.createElement("canvas");
      canvas.width = Math.ceil(viewportWidth * ratio);
      canvas.height = Math.ceil(viewportHeight * ratio);
      const ctx = canvas.getContext("2d");

      ctx.fillStyle = fallbackColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cols = Math.max(3, Math.round(viewportWidth / 380));
      const rows = Math.max(3, Math.round(viewportHeight / 320));
      const cellW = canvas.width / cols;
      const cellH = canvas.height / rows;

      let imageIndex = 0;

      for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols; col += 1) {
          const image = images[imageIndex % images.length];
          imageIndex += 1;

          const centerX = (col + 0.5) * cellW;
          const centerY = (row + 0.5) * cellH;
          const rotation = ((Math.random() * 6 - 3) * Math.PI) / 180;
          const scale = 0.9 + Math.random() * 0.2;

          const maxWidth = cellW * 0.9 * scale;
          const maxHeight = cellH * 0.9 * scale;
          const aspect = image.width / image.height;
          let drawW = maxWidth;
          let drawH = maxHeight;

          if (maxWidth / maxHeight > aspect) {
            drawW = maxHeight * aspect;
          } else {
            drawH = maxWidth / aspect;
          }

          ctx.save();
          ctx.translate(centerX, centerY);
          ctx.rotate(rotation);
          ctx.drawImage(image, -drawW / 2, -drawH / 2, drawW, drawH);
          ctx.restore();
        }
      }

      const dataUrl = canvas.toDataURL("image/jpeg", 0.88);
      document.body.style.backgroundColor = fallbackColor;
      document.body.style.backgroundImage = `url(${dataUrl})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundAttachment = "fixed";
      document.body.style.backgroundRepeat = "no-repeat";
    })
    .catch(() => {
      document.body.style.backgroundColor = "#fef9ff";
      document.body.style.backgroundImage = "";
    });
}

let collageResizeTimer = null;

window.addEventListener("resize", () => {
  if (collageResizeTimer) {
    window.clearTimeout(collageResizeTimer);
  }
  collageResizeTimer = window.setTimeout(() => {
    generateCollageBackground();
  }, 200);
});

window.addEventListener("hashchange", handleHashChange);

buildSidebar();
buildHomeGrid();
updateSidebarState();
updateHomeGridState();
generateCollageBackground();
handleHashChange();

passwordForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const trimmed = passwordInput.value.trim();

  if (trimmed === PASSWORD) {
    isAuthenticated = true;
    passwordError.textContent = "";
    passwordInput.value = "";
    refreshToday();
    currentIndex = determineInitialIndex();
    loginPanel.classList.add("hidden");
    showHome();
    updateSidebarState();
    updateHomeGridState();
    handleHashChange();
  } else {
    passwordError.textContent = "Incorrect password. Try again.";
  }
});

prevButton.addEventListener("click", () => {
  const targetIndex = currentIndex - 1;

  if (targetIndex < 0) {
    flashMessage("You're already at the beginning.");
    return;
  }

  if (!isDateAccessible(dayEntries[targetIndex].date)) {
    flashMessage(TOO_SOON_MESSAGE);
    return;
  }

  setHashForDay(targetIndex);
});

nextButton.addEventListener("click", () => {
  const targetIndex = currentIndex + 1;

  if (targetIndex >= dayEntries.length) {
    flashMessage("That was the final surprise.");
    return;
  }

  if (!isDateAccessible(dayEntries[targetIndex].date)) {
    flashMessage(TOO_SOON_MESSAGE);
    return;
  }

  setHashForDay(targetIndex);
});

if (dayList) {
  dayList.addEventListener("click", (event) => {
    const target = event.target.closest(".day-nav-item");
    if (!target) {
      return;
    }

    const targetIndex = Number(target.dataset.index);
    if (Number.isNaN(targetIndex)) {
      return;
    }

    if (!isAuthenticated) {
      passwordInput.focus();
      return;
    }

    setHashForDay(targetIndex);
  });
}

if (homeGrid) {
  homeGrid.addEventListener("click", (event) => {
    const target = event.target.closest(".home-day");
    if (!target) {
      return;
    }

    const targetIndex = Number(target.dataset.index);
    if (!isAuthenticated || Number.isNaN(targetIndex)) {
      return;
    }

    setHashForDay(targetIndex);
  });
}

if (backHomeButton) {
  backHomeButton.addEventListener("click", () => {
    if (!isAuthenticated) {
      return;
    }
    setHashForDay(null);
  });
}

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    refreshToday();
    updateNavigationState();
  }
});

function determineInitialIndex() {
  if (DEV_MODE) {
    return 0;
  }
  const highestAccessible = getHighestAccessibleIndex();
  return highestAccessible !== null ? highestAccessible : 0;
}

function getHighestAccessibleIndex() {
  for (let i = dayEntries.length - 1; i >= 0; i -= 1) {
    if (isDateAccessible(dayEntries[i].date)) {
      return i;
    }
  }
  return null;
}

function renderDay(index) {
  if (!isAuthenticated) {
    return;
  }

  currentIndex = index;
  showDayView();
  const entry = dayEntries[index];
  const unlocked = isDateAccessible(entry.date);

  triggerCardFlip();
  applyTheme(entry.theme);

  dayDate.textContent = formatDisplayDate(entry.date);
  dayTitle.textContent = entry.title;
  dayProgress.textContent = `Day ${index + 1} of ${TOTAL_DAYS}`;

  const introHtml = formatEntryText(entry.intro ?? "");
  if (introHtml) {
    dayIntro.innerHTML = introHtml;
    dayIntro.classList.remove("hidden");
  } else {
    dayIntro.innerHTML = "";
    dayIntro.classList.add("hidden");
  }

  resetImageAnimation();

  let messageHtml = "";

  if (unlocked) {
    renderMedia(entry);
    messageHtml = formatEntryText(entry.message ?? "");
    statusMessage.textContent = "";
    markDayUnlocked(entry.date);
  } else {
    hideMedia();
    statusMessage.textContent = TOO_SOON_MESSAGE;
  }

  if (messageHtml) {
    dayText.innerHTML = messageHtml;
    dayText.classList.remove("hidden");
  } else {
    dayText.innerHTML = "";
    dayText.classList.add("hidden");
  }

  updateNavigationState();
}

function renderMedia(entry) {
  const hasVideo = typeof entry.video === "string" && entry.video.trim().length > 0;

  if (hasVideo && dayVideo) {
    dayVideo.classList.remove("hidden");
    dayVideo.style.display = "block";
    dayVideo.controls = true;
    dayVideo.autoplay = false;
    if (dayVideo.src !== entry.video) {
      dayVideo.src = entry.video;
      dayVideo.load();
    }

    dayImage.removeAttribute("src");
    dayImage.alt = "";
    dayImage.style.display = "none";
    imagePlaceholder.classList.add("hidden");
    return;
  }

  if (dayVideo) {
    dayVideo.pause();
    dayVideo.removeAttribute("src");
    dayVideo.classList.add("hidden");
    dayVideo.style.display = "none";
  }

  dayImage.src = entry.image;
  dayImage.alt = `${entry.title} illustration`;
  dayImage.style.display = "block";
  imagePlaceholder.classList.add("hidden");
  resetImageAnimation();
}

function hideMedia() {
  if (dayVideo) {
    dayVideo.pause();
    dayVideo.removeAttribute("src");
    dayVideo.classList.add("hidden");
    dayVideo.style.display = "none";
  }

  dayImage.removeAttribute("src");
  dayImage.alt = "";
  dayImage.style.display = "none";
  imagePlaceholder.classList.add("hidden");
}

function resetImageAnimation() {
  dayImage.style.animation = "none";
  void dayImage.offsetWidth;
  dayImage.style.animation = "";
}

function triggerCardFlip() {
  dayCardInner.classList.remove("flip");
  void dayCardInner.offsetWidth;
  dayCardInner.classList.add("flip");
}

function flashMessage(message) {
  statusMessage.textContent = message;
}

function formatEntryText(text) {
  if (!text) {
    return "";
  }

  return text
    .split(/\n\n+/)
    .map((paragraph) =>
      paragraph
        .trim()
        .replace(/\n/g, "<br>")
    )
    .map((content) => `<p>${content}</p>`)
    .join("");
}

function createLocalDateFromISO(isoString) {
  const [year, month, day] = isoString.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function getTodayLocalDate() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

function calculateUnlockedMaxIndex() {
  const todayLocal = getTodayLocalDate();

  if (todayLocal < START_DATE) {
    return -1;
  }

  const cappedEnd = END_DATE < START_DATE ? START_DATE : END_DATE;
  const effectiveToday = todayLocal > cappedEnd ? cappedEnd : todayLocal;

  const diff = Math.floor((effectiveToday - START_DATE) / MS_PER_DAY);
  return Math.min(dayEntries.length - 1, diff);
}

function synchronizeUnlockedDates() {
  unlockedDates.clear();

  if (unlockedMaxIndex >= 0) {
    for (let i = 0; i <= unlockedMaxIndex; i += 1) {
      unlockedDates.add(dayEntries[i].date);
    }
  }

  storage.write(unlockedDates);
}

function parseHashValue(hash) {
  if (!hash) {
    return null;
  }

  const match = hash.match(/^#day(\d{1,2})$/i);
  if (!match) {
    return null;
  }

  const index = Number(match[1]) - 1;
  if (Number.isNaN(index) || index < 0 || index >= dayEntries.length) {
    return null;
  }

  return index;
}

function setHashForDay(index) {
  if (index === null) {
    if (window.location.hash) {
      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
      handleHashChange();
    } else {
      handleHashChange();
    }
    return;
  }

  const newHash = `#day${index + 1}`;
  if (window.location.hash === newHash) {
    handleHashChange();
  } else {
    window.location.hash = newHash;
  }
}

function handleHashChange() {
  const index = parseHashValue(window.location.hash);

  if (!isAuthenticated) {
    return;
  }

  if (index === null) {
    showHome();
    updateSidebarState();
    updateHomeGridState();
    setHomeStatus("");
    statusMessage.textContent = "";
    return;
  }

  const entry = dayEntries[index];
  if (isDateAccessible(entry.date)) {
    renderDay(index);
  } else {
    showHome();
    updateSidebarState();
    updateHomeGridState();
    setHomeStatus(TOO_SOON_MESSAGE);
    flashMessage(TOO_SOON_MESSAGE);
  }
}

function applyTheme(theme) {
  if (theme) {
    document.body.style.background = theme;
  } else {
    document.body.style.background = "";
  }
}

function updateNavigationState() {
  if (!isAuthenticated) {
    toggleLockedState(prevButton, true);
    toggleLockedState(nextButton, true);
    updateSidebarState();
    updateHomeGridState();
    return;
  }

  const prevLocked =
    currentIndex <= 0 || !isDateAccessible(dayEntries[currentIndex - 1]?.date ?? "");
  const nextLocked =
    currentIndex >= dayEntries.length - 1 ||
    !isDateAccessible(dayEntries[currentIndex + 1]?.date ?? "");

  toggleLockedState(prevButton, prevLocked);
  toggleLockedState(nextButton, nextLocked);
  updateSidebarState();
  updateHomeGridState();
}

function toggleLockedState(button, locked) {
  if (locked) {
    button.classList.add("locked");
    button.setAttribute("aria-disabled", "true");
  } else {
    button.classList.remove("locked");
    button.removeAttribute("aria-disabled");
  }
}

function isDateAccessible(dateString) {
  if (DEV_MODE) {
    return true;
  }
  const index = dateToIndex.get(dateString);
  if (index === undefined) {
    return false;
  }
  return unlockedMaxIndex >= 0 && index <= unlockedMaxIndex;
}

function markDayUnlocked(dateString) {
  if (DEV_MODE) {
    return;
  }

  const recalculated = calculateUnlockedMaxIndex();
  if (recalculated !== unlockedMaxIndex) {
    unlockedMaxIndex = recalculated;
    synchronizeUnlockedDates();
  }
}

function refreshToday() {
  today = startOfDay(new Date());
  if (!DEV_MODE) {
    const recalculated = calculateUnlockedMaxIndex();
    if (recalculated !== unlockedMaxIndex) {
      unlockedMaxIndex = recalculated;
      synchronizeUnlockedDates();
    }
  }
}

function formatDisplayDate(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatSidebarDate(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
  });
}

function startOfDay(date) {
  const copy = new Date(date);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

function buildSidebar() {
  if (!dayList) {
    return;
  }

  dayList.innerHTML = "";

  dayEntries.forEach((entry, index) => {
    const listItem = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "day-nav-item";
    button.dataset.index = String(index);
    button.style.setProperty("--theme-gradient", entry.theme);
    button.innerHTML = `
      <span class="day-nav-label">Day ${index + 1}</span>
      <span class="day-nav-date">${formatSidebarDate(entry.date)}</span>
    `;
    listItem.appendChild(button);
    dayList.appendChild(listItem);
  });
}

function buildHomeGrid() {
  if (!homeGrid) {
    return;
  }

  homeGrid.innerHTML = "";

  dayEntries.forEach((entry, index) => {
    const listItem = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "home-day";
    button.dataset.index = String(index);
    button.style.setProperty("--theme-gradient", entry.theme);
    button.innerHTML = `
      <span class="home-day-number">Day ${index + 1}</span>
      <span class="home-day-date">${formatSidebarDate(entry.date)}</span>
      <span class="home-lock" aria-hidden="true">🔒</span>
    `;
    listItem.appendChild(button);
    homeGrid.appendChild(listItem);
  });
}

function updateSidebarState() {
  if (!dayList) {
    return;
  }

  const buttons = dayList.querySelectorAll(".day-nav-item");
  buttons.forEach((button) => {
    const index = Number(button.dataset.index);
    const entry = dayEntries[index];
    const accessible = isDateAccessible(entry.date);
    const clickable = isAuthenticated && accessible;
    const isActive = isAuthenticated && currentView === "day" && index === currentIndex;

    button.classList.toggle("active", isActive);
    button.classList.toggle("locked", !clickable);
    button.disabled = !clickable;
    if (isActive) {
      button.setAttribute("aria-current", "true");
    } else {
      button.removeAttribute("aria-current");
    }
  });
}

function updateHomeGridState() {
  if (!homeGrid) {
    return;
  }

  const buttons = homeGrid.querySelectorAll(".home-day");
  buttons.forEach((button) => {
    const index = Number(button.dataset.index);
    const entry = dayEntries[index];
    const accessible = isDateAccessible(entry.date);
    const clickable = isAuthenticated && accessible;
    const isActive =
      isAuthenticated && currentView === "day" && index === currentIndex;

    button.classList.toggle("active", isActive);
    button.classList.toggle("locked", !clickable);
    button.disabled = !clickable;
    if (isActive) {
      button.setAttribute("aria-current", "true");
    } else {
      button.removeAttribute("aria-current");
    }
  });
}

function showHome() {
  currentView = "home";
  applyTheme(null);
  if (dayLayout) {
    dayLayout.classList.add("hidden");
  }
  if (homePanel) {
    homePanel.classList.remove("hidden");
    animateView(homePanel);
  }
  if (dayPanel) {
    dayPanel.classList.add("hidden");
  }
  generateCollageBackground();
  setHomeStatus("");
  statusMessage.textContent = "";
}

function showDayView() {
  currentView = "day";
  if (homePanel) {
    homePanel.classList.add("hidden");
  }
  if (dayLayout) {
    dayLayout.classList.remove("hidden");
    animateView(dayLayout);
  }
  if (dayPanel) {
    dayPanel.classList.remove("hidden");
  }
  setHomeStatus("");
}

function animateView(element) {
  if (!element) {
    return;
  }
  element.classList.remove("view-fade");
  void element.offsetWidth;
  element.classList.add("view-fade");
  element.addEventListener(
    "animationend",
    () => {
      element.classList.remove("view-fade");
    },
    { once: true }
  );
}

function setHomeStatus(message) {
  if (!homeStatus) {
    return;
  }
  homeStatus.textContent = message;
}

function createStorageHelper(key) {
  if (DEV_MODE) {
    return {
      read() {
        return [];
      },
      write() {
        /* no persistence in DEV mode */
      },
    };
  }

  try {
    const testKey = "__storage_test__";
    window.localStorage.setItem(testKey, testKey);
    window.localStorage.removeItem(testKey);
  } catch (error) {
    return {
      read() {
        return [];
      },
      write() {
        /* no-op when storage is unavailable */
      },
    };
  }

  return {
    read() {
      try {
        const raw = window.localStorage.getItem(key);
        if (!raw) {
          return [];
        }
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
      } catch (error) {
        return [];
      }
    },
    write(dates) {
      try {
        window.localStorage.setItem(key, JSON.stringify(Array.from(dates)));
      } catch (error) {
        /* ignore serialization issues */
      }
    },
  };
}
