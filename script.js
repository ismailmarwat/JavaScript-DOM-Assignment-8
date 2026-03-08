// ── Keys used in localStorage ───────────────────────────────
const NAME_KEY = "userName";
const DARK_MODE_KEY = "darkModeEnabled";

// ── DOM Elements ────────────────────────────────────────────
const nameInput      = document.getElementById("nameInput");
const saveBtn        = document.getElementById("saveBtn");
const removeBtn      = document.getElementById("removeBtn");
const savedNamePara  = document.getElementById("savedName");
const toggleDarkBtn  = document.getElementById("toggleDarkBtn");
const clearAllBtn    = document.getElementById("clearAllBtn");

// ── Task 2 + Task 5: Load saved data when page opens ────────
function loadSavedData() {
  // Load name
  const savedName = localStorage.getItem(NAME_KEY);
  if (savedName) {
    savedNamePara.textContent = savedName;
    nameInput.value = savedName; // optional: show in input too
  }

  // Load dark mode
  const isDark = localStorage.getItem(DARK_MODE_KEY);
  if (isDark === "true") {
    document.body.classList.add("dark-mode");
  }
}

// ── Task 1 + Task 3: Save / Update name ─────────────────────
function saveName() {
  const name = nameInput.value.trim();
  
  if (name) {
    localStorage.setItem(NAME_KEY, name);
    savedNamePara.textContent = name;
  } else {
    // optional: prevent saving empty name
    alert("Please enter a name");
  }
}

// ── Task 4: Remove name ─────────────────────────────────────
function removeName() {
  localStorage.removeItem(NAME_KEY);
  savedNamePara.textContent = "No name saved yet.";
  nameInput.value = "";
}

// ── Task 5: Toggle dark mode & persist ──────────────────────
function toggleDarkMode() {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem(DARK_MODE_KEY, isDark);
}

// ── Task 6: Clear everything ────────────────────────────────
function clearAllData() {
  if (confirm("Really clear ALL saved data?")) {
    localStorage.clear();
    savedNamePara.textContent = "No name saved yet.";
    nameInput.value = "";
    document.body.classList.remove("dark-mode");
  }
}

// ── Event Listeners ─────────────────────────────────────────
saveBtn.addEventListener("click", saveName);
removeBtn.addEventListener("click", removeName);
toggleDarkBtn.addEventListener("click", toggleDarkMode);
clearAllBtn.addEventListener("click", clearAllData);

// Bonus: save on Enter key in input field
nameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    saveName();
  }
});

// ── Initialize ──────────────────────────────────────────────
loadSavedData();
