// FindIt – Lost & Found application logic
// ===== Default SVG illustrations per category (fallback only) =====
const backpackSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 13V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z"/>
    <path d="M10 2h4l3 3v1a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5l3-3z"/>
  </svg>
`;

const mouseSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 3l18 1.8"/>
    <path d="M10.9 20.9c-2.6-2.6-2.8-7-0.8-9.2l2-2c2-2 5.3-0.2 9.2 0.8 2.6 2.6 2.8 7 0.8 9.2l-2 2c-2 2-5.3 0.2-9.2-0.8z"/>
    <circle cx="12" cy="10" r="2"/>
  </svg>
`;

const idCardSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="7" y="3" width="10" height="14" rx="2" ry="2"/>
    <circle cx="9.5" cy="6" r="1"/>
    <line x1="7" y1="10" x2="17" y2="10"/>
    <line x1="7" y1="12" x2="14" y2="12"/>
  </svg>
`;

const bookSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
`;

const keysSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 2l-2 6"/>
    <path d="M5 15h5l5 5 5-5h5"/>
    <circle cx="15" cy="12" r="1"/>
  </svg>
`;

const clothingSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M16 4h2a4 4 0 0 1 4 4v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a4 4 0 0 1 4-4h2"/>
    <path d="M8 17h8"/>
  </svg>
`;

const otherSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"/>
  </svg>
`;

const CATEGORY_SVG = {
  Electronics: mouseSVG,
  Books: bookSVG,
  Keys: keysSVG,
  "ID Cards": idCardSVG,
  Clothing: clothingSVG,
  Other: otherSVG,
};

// Theme toggle SVG strings
const SUN_SVG = `<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>`;
const MOON_SVG = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;

// Sample data with LOCAL photos from assets/images/
const SAMPLE_ITEMS = [
  {
    id: 1,
    title: "Black Backpack",
    status: "lost",
    category: "Other",
    location: "Library, 2nd floor",
    date: "2026-10-25",
    description: "Navy backpack with a red keychain inside the main compartment.",
    image: "assets/images/backpack.jpg",
  },
  {
    id: 2,
    title: "Wireless Mouse",
    status: "found",
    category: "Electronics",
    location: "Cafeteria, table 7",
    date: "2026-10-28",
    description: "White Logitech wireless mouse found near the vending machine.",
    image: "assets/images/mouse.jpg",
  },
  {
    id: 3,
    title: "Student ID Card",
    status: "lost",
    category: "ID Cards",
    location: "Main hallway",
    date: "2026-10-30",
    description: "Generic fictional student ID card with no real personal information.",
    image: "assets/images/id-card.jpg",
  },
  {
    id: 4,
    title: "Calculus Textbook",
    status: "found",
    category: "Books",
    location: "Classroom B12",
    date: "2026-11-02",
    description: "Calculus Volume 1, hardcover, left on desk near the window.",
    image: "assets/images/book.jpg",
  },
  {
    id: 5,
    title: "Car Keys",
    status: "lost",
    category: "Keys",
    location: "Parking lot A",
    date: "2026-11-05",
    description: "Set of car keys with a black fob and small keychain.",
    image: "assets/images/keys.jpg",
  },
];

// Default date set to today for new items
const today = new Date().toISOString().split("T")[0];

// State
let items = [];
let statusFilter = "all";
let categoryFilter = "";
let searchQuery = "";
let selectedImageData = null;

// DOM elements (initialized in init)
let itemsGrid = null;
let emptyMessage = null;
let addModal = null;
let detailModal = null;
let addForm = null;
let searchInput = null;
let toast = null;
let themeToggle = null;
let themeIcon = null;
let imageInput = null;
let imagePreview = null;
let previewImage = null;
let removeImageBtn = null;
let categoryFilterSelect = null;
let filterLostBtn = null;
let filterFoundBtn = null;
let filterAllBtn = null;
let itemDateInput = null;
let closeAddModalBtn = null;
let cancelAddBtn = null;
let closeDetailModalBtn = null;

// ===== UTILITY =====
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

function formatDate(dateString) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

// ===== THEME =====
function setThemeIcon(isDark) {
  if (!themeIcon) return;
  themeIcon.innerHTML = isDark
    ? `<svg class="icon-lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${SUN_SVG}</svg>`
    : `<svg class="icon-lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${MOON_SVG}</svg>`;
}

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute("data-theme") === "dark";
  const newTheme = isDark ? "light" : "dark";
  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("findit-theme", newTheme);
  setThemeIcon(newTheme === "dark");
}

function loadTheme() {
  const savedTheme = localStorage.getItem("findit-theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    setThemeIcon(savedTheme === "dark");
  } else {
    setThemeIcon(false); // default light mode, shows moon
  }
}

// Map old Unsplash URLs to new local paths for migration
const IMAGE_URL_MIGRATION = {
  "https://images.unsplash.com/photo-1553063347-47f1290a38f2?w=800&q=80": "assets/images/backpack.jpg",
  "https://images.unsplash.com/photo-1527864550417-7fd91fc05a09?w=800&q=80": "assets/images/mouse.jpg",
  "https://images.unsplash.com/photo-1582719478364-ecf8e4d4b8e5?w=800&q=80": "assets/images/id-card.jpg",
  "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&q=80": "assets/images/book.jpg",
  "https://images.unsplash.com/photo-1576096316872-3b4a771ce8d7?w=800&q=80": "assets/images/keys.jpg",
};


function migrateImageUrls(items) {
  let changed = false;

  items.forEach((item) => {
    const sample = SAMPLE_ITEMS.find(
      (s) => s.id === item.id && s.title === item.title
    );

    if (!sample) return;

    if (item.image !== sample.image) {
      item.image = sample.image;
      changed = true;
    }
  });

  return changed;
}


// ===== ITEMS =====
function loadItems() {
  const stored = localStorage.getItem("findit-items");
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      // Migrate old Unsplash URLs to local paths
      if (migrateImageUrls(parsed)) {
        saveItems(parsed);
      }
      return parsed;
    } catch (e) {
      console.error("Failed to parse stored items", e);
    }
  }
  saveItems(SAMPLE_ITEMS);
  return [...SAMPLE_ITEMS];
}

function saveItems(list) {
  try {
    localStorage.setItem("findit-items", JSON.stringify(list));
  } catch (e) {
    if (e.name === "QuotaExceededError" || e.name === "NS_ERROR_DOM_QUOTA_REACHED") {
      showToast("Storage full. Delete some items before adding more.");
      throw e;
    }
    throw e;
  }
}

function getDefaultImageHtml(item) {
  const title = (item.title || "").toLowerCase();
  if (title.includes("backpack")) return backpackSVG;
  if (title.includes("mouse")) return mouseSVG;
  if (title.includes("id") || title.includes("card")) return idCardSVG;
  if (title.includes("textbook") || title.includes("book")) return bookSVG;
  if (title.includes("key")) return keysSVG;
  if (title.includes("shirt") || title.includes("jacket") || title.includes("cloth")) return clothingSVG;
  return CATEGORY_SVG[item.category] || otherSVG;
}

function buildImageHtml(item) {
  if (item.image) {
    return `<img src="${item.image}" alt="${escapeHtml(item.title)}" class="card-img" onerror="handleImageError(this)" />`;
  }
  return `<div class="default-image">${getDefaultImageHtml(item)}</div>`;
}

function handleImageError(imgEl) {
  imgEl.outerHTML = `<div class="default-image">${otherSVG}</div>`;
}

function renderItems() {
  if (!itemsGrid || !emptyMessage) return;
  
  itemsGrid.innerHTML = "";

  const filtered = items.filter((item) => {
    const matchStatus = statusFilter === "all" || item.status === statusFilter;
    const matchCategory = categoryFilter === "" || item.category === categoryFilter;
    const q = searchQuery.toLowerCase();
    const matchSearch =
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.location.toLowerCase().includes(q);
    return matchStatus && matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    emptyMessage.style.display = "flex";
    return;
  }

  emptyMessage.style.display = "none";

  filtered.forEach((item) => {
    const card = document.createElement("article");
    card.className = "item-card";

    const statusLabel = item.status === "lost" ? "Lost" : "Found";
    const isResolved = !!item.resolved;

    card.innerHTML = `
      <div class="card-image">${buildImageHtml(item)}</div>
      <div class="card-body">
        <div class="card-tags">
          <span class="tag ${item.status}">${statusLabel}</span>
          ${isResolved ? '<span class="tag resolved">Resolved</span>' : ""}
          <span class="tag category">${escapeHtml(item.category)}</span>
        </div>
        <h3 class="card-title">${escapeHtml(item.title)}</h3>
        <div class="card-location"><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0"/><circle cx="12" cy="10" r="3"/></svg>${escapeHtml(item.location)}</div>
        <div class="card-date"><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>${formatDate(item.date)}</div>
        <div class="card-actions">
          <button class="btn-action btn-view" onclick="openDetail(${item.id})" aria-label="View details">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>View
          </button>
          <button class="btn-action btn-resolve ${isResolved ? "resolved" : ""}" onclick="toggleResolved(${item.id})" aria-label="Mark as resolved">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>${isResolved ? "Reopen" : "Resolved"}
          </button>
          <button class="btn-action btn-delete" onclick="deleteItem(${item.id})" aria-label="Delete item">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>Delete
          </button>
        </div>
      </div>
    `;

    itemsGrid.appendChild(card);
  });
}

// ===== NAVIGATION =====
function updateFilterButtons() {
  const btns = [filterLostBtn, filterFoundBtn, filterAllBtn].filter(Boolean);
  btns.forEach((btn) => btn.classList.remove("active"));
  const key = statusFilter.charAt(0).toUpperCase() + statusFilter.slice(1);
  const btn = document.getElementById(`filter${key}`);
  if (btn) btn.classList.add("active");
}

function updateNavActive(section) {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
    const linkSection = link.getAttribute("data-section");
    if (linkSection === section) {
      link.classList.add("active");
    }
  });
}

function navigateTo(status) {
  statusFilter = status;
  categoryFilter = "";
  searchQuery = "";
  if (searchInput) searchInput.value = "";
  if (categoryFilterSelect) categoryFilterSelect.value = "";
  updateFilterButtons();
  updateNavActive(status);
  renderItems();
  const section = document.getElementById("itemsSection");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function navigateHome() {
  statusFilter = "all";
  categoryFilter = "";
  searchQuery = "";
  if (searchInput) searchInput.value = "";
  if (categoryFilterSelect) categoryFilterSelect.value = "";
  updateFilterButtons();
  updateNavActive("all");
  renderItems();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===== SEARCH =====
function searchItems() {
  if (!searchInput) return;
  searchQuery = searchInput.value;
  renderItems();
}

// ===== IMAGE UPLOAD =====
function resizeImage(file, maxWidth = 800, maxHeight = 800, quality = 0.7) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      const canvas = document.createElement("canvas");
      let width = img.width;
      let height = img.height;
      if (width > maxWidth) {
        height = (height * maxWidth) / width;
        width = maxWidth;
      }
      if (height > maxHeight) {
        width = (width * maxHeight) / height;
        height = maxHeight;
      }
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);
      canvas.toBlob((blob) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
      }, "image/jpeg", quality);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Failed to load image"));
    };
    img.src = url;
  });
}

function setupImageUpload() {
  if (!imageInput || !imagePreview || !previewImage || !removeImageBtn) return;

  imageInput.addEventListener("change", async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      showToast("Please upload a JPG, PNG, or WebP image.");
      imageInput.value = "";
      return;
    }

    const maxSize = 2 * 1024 * 1024;
    if (file.size > maxSize) {
      showToast("Image too large. Please choose a file under 2MB.");
      imageInput.value = "";
      return;
    }

    try {
      selectedImageData = await resizeImage(file);
      previewImage.src = selectedImageData;
      imagePreview.style.display = "block";
      showToast("Image selected. Preview shown above.");
    } catch (err) {
      console.error("Image processing failed", err);
      showToast("Failed to process image. Please try another file.");
      imageInput.value = "";
    }
  });

  removeImageBtn.addEventListener("click", () => {
    selectedImageData = null;
    imageInput.value = "";
    imagePreview.style.display = "none";
    previewImage.src = "";
  });
}

function resetImageUpload() {
  selectedImageData = null;
  if (imageInput) imageInput.value = "";
  if (imagePreview) imagePreview.style.display = "none";
  if (previewImage) previewImage.src = "";
}

// ===== MODALS & ACTIONS =====
function showAddForm() {
  resetImageUpload();
  if (addModal) addModal.classList.add("open");
  if (itemDateInput) itemDateInput.value = today;
  const titleInput = document.getElementById("itemTitle");
  if (titleInput) titleInput.focus();
}

function closeAddModal() {
  if (addModal) addModal.classList.remove("open");
  if (addForm) addForm.reset();
  if (itemDateInput) itemDateInput.value = today;
  resetImageUpload();
}

function openDetail(id) {
  const item = items.find((i) => i.id === id);
  if (!item || !detailModal) return;

  const statusLabel = item.status === "lost" ? "Lost" : "Found";
  const isResolved = !!item.resolved;

  const detailBody = document.getElementById("detailBody");
  if (!detailBody) return;

  detailBody.innerHTML = `
    <div class="detail-image">${buildImageHtml(item)}</div>
    <div class="detail-field">
      <span class="label">Title</span>
      <span class="value">${escapeHtml(item.title)}</span>
    </div>
    <div class="detail-field">
      <span class="label">Status</span>
      <span class="value">${statusLabel}${isResolved ? " · Resolved" : ""}</span>
    </div>
    <div class="detail-field">
      <span class="label">Category</span>
      <span class="value">${escapeHtml(item.category)}</span>
    </div>
    <div class="detail-field">
      <span class="label">Location</span>
      <span class="value">${escapeHtml(item.location)}</span>
    </div>
    <div class="detail-field">
      <span class="label">Date</span>
      <span class="value">${formatDate(item.date)}</span>
    </div>
    <div class="detail-field">
      <span class="label">Description</span>
      <span class="value">${escapeHtml(item.description) || "No description provided."}</span>
    </div>
    <div class="detail-actions">
      <button class="btn-action btn-resolve ${isResolved ? "resolved" : ""}" onclick="toggleResolved(${item.id}); closeDetailModal();" aria-label="Mark as resolved">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>${isResolved ? "Reopen" : "Mark resolved"}
      </button>
      <button class="btn-action btn-delete" onclick="deleteItem(${item.id}); closeDetailModal();" aria-label="Delete item">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>Delete
      </button>
    </div>
  `;

  detailModal.classList.add("open");
}

function closeDetailModal() {
  if (detailModal) detailModal.classList.remove("open");
}

function toggleResolved(id) {
  const item = items.find((i) => i.id === id);
  if (!item) return;
  item.resolved = !item.resolved;
  saveItems(items);
  renderItems();
  showToast(item.resolved ? "Item marked as resolved" : "Item marked as active");
}

function deleteItem(id) {
  if (!confirm("Are you sure you want to delete this item?")) return;
  items = items.filter((i) => i.id !== id);
  saveItems(items);
  renderItems();
  showToast("Item deleted");
}

function setupFormSubmit() {
  if (!addForm) return;
  addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const titleInput = document.getElementById("itemTitle");
    const statusSelect = document.getElementById("itemStatus");
    const categorySelect = document.getElementById("itemCategory");
    const locationInput = document.getElementById("itemLocation");
    const dateInput = document.getElementById("itemDate");
    const descriptionInput = document.getElementById("itemDescription");

    if (!titleInput || !statusSelect || !categorySelect || !locationInput || !dateInput || !descriptionInput) return;

    const title = titleInput.value.trim();
    const status = statusSelect.value;
    const category = categorySelect.value;
    const location = locationInput.value.trim();
    const date = dateInput.value;
    const description = descriptionInput.value.trim();

    const newItem = {
      id: Date.now(),
      title,
      status,
      category,
      location,
      date,
      description,
      image: selectedImageData || null,
    };

    items.unshift(newItem);
    saveItems(items);
    renderItems();
    showToast("Item added successfully");
    closeAddModal();
  });
}

function setupModalCloseHandlers() {
  // Modal backdrop clicks
  if (addModal) {
    addModal.addEventListener("click", (event) => {
      if (event.target === addModal) closeAddModal();
    });
  }
  if (detailModal) {
    detailModal.addEventListener("click", (event) => {
      if (event.target === detailModal) closeDetailModal();
    });
  }

  // Close buttons and cancel button
  if (closeAddModalBtn) {
    closeAddModalBtn.addEventListener("click", closeAddModal);
  }
  if (cancelAddBtn) {
    cancelAddBtn.addEventListener("click", closeAddModal);
  }
  if (closeDetailModalBtn) {
    closeDetailModalBtn.addEventListener("click", closeDetailModal);
  }
}

function setupEventListeners() {
  // Theme toggle - ONLY addEventListener, no inline onclick
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }

  // Search button click
  const searchBtn = document.getElementById("searchBtn");
  if (searchBtn) {
    searchBtn.addEventListener("click", (event) => {
      event.preventDefault();
      searchItems();
    });
  }

  // Search on Enter key
  if (searchInput) {
    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        searchItems();
      }
    });
  }

  // Filter buttons - use addEventListener instead of inline onclick
  if (filterLostBtn) filterLostBtn.addEventListener("click", () => navigateTo("lost"));
  if (filterFoundBtn) filterFoundBtn.addEventListener("click", () => navigateTo("found"));
  if (filterAllBtn) filterAllBtn.addEventListener("click", () => navigateTo("all"));

  // Category filter select
  if (categoryFilterSelect) {
    categoryFilterSelect.addEventListener("change", (e) => {
      categoryFilter = e.target.value;
      renderItems();
    });
  }

  // Nav links - use addEventListener for consistency
  const homeLink = document.querySelector('.nav-link[data-section="all"]');
  if (homeLink) homeLink.addEventListener("click", (e) => { e.preventDefault(); navigateHome(); });

  const lostLink = document.querySelector('.nav-link[data-section="lost"]');
  if (lostLink) lostLink.addEventListener("click", (e) => { e.preventDefault(); navigateTo("lost"); });

  const foundLink = document.querySelector('.nav-link[data-section="found"]');
  if (foundLink) foundLink.addEventListener("click", (e) => { e.preventDefault(); navigateTo("found"); });

  const allLink = document.querySelector('.nav-link[data-section="all"]:not([onclick])'); // Already handled above

  const addLink = document.querySelector('.nav-link[data-section="add"]');
  if (addLink) addLink.addEventListener("click", (e) => { e.preventDefault(); showAddForm(); });
}

// ===== INIT =====
function init() {
  console.log("FindIt Final Build loaded");

  // Cache DOM elements
  itemsGrid = document.getElementById("itemsGrid");
  emptyMessage = document.getElementById("emptyMessage");
  addModal = document.getElementById("addModal");
  detailModal = document.getElementById("detailModal");
  addForm = document.getElementById("addItemForm");
  searchInput = document.getElementById("searchInput");
  toast = document.getElementById("toast");
  themeToggle = document.getElementById("themeToggle");
  themeIcon = document.getElementById("themeIcon");
  imageInput = document.getElementById("itemImage");
  imagePreview = document.getElementById("imagePreview");
  previewImage = document.getElementById("previewImage");
  removeImageBtn = document.getElementById("removeImage");
  categoryFilterSelect = document.getElementById("categoryFilter");
  filterLostBtn = document.getElementById("filterLost");
  filterFoundBtn = document.getElementById("filterFound");
  filterAllBtn = document.getElementById("filterAll");
  itemDateInput = document.getElementById("itemDate");
  closeAddModalBtn = document.getElementById("closeAddModalBtn");
  cancelAddBtn = document.getElementById("cancelAddBtn");
  closeDetailModalBtn = document.getElementById("closeDetailModalBtn");

  // Load theme first
  loadTheme();

  // Load items
  items = loadItems();

  // Set default date
  if (itemDateInput) itemDateInput.value = today;

  // Setup all functionality
  setupImageUpload();
  setupFormSubmit();
  setupModalCloseHandlers();
  setupEventListeners();

  // Initial render
  renderItems();
  updateFilterButtons();
  updateNavActive("all");
}

// Run init when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

// Expose functions globally for inline onclick handlers (View/Resolve/Delete buttons in rendered cards, modal close buttons)
window.openDetail = openDetail;
window.toggleResolved = toggleResolved;
window.deleteItem = deleteItem;
window.closeAddModal = closeAddModal;
window.closeDetailModal = closeDetailModal;
window.navigateHome = navigateHome;
window.navigateTo = navigateTo;
window.setStatusFilter = (status) => navigateTo(status);
window.setCategoryFilter = (value) => { categoryFilter = value; renderItems(); };
window.showAddForm = showAddForm;
window.toggleTheme = toggleTheme;
window.searchItems = searchItems;