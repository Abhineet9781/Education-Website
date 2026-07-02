const grid = document.getElementById("courseListGrid")
const emptyState = document.getElementById("emptyState")
const searchInput = document.getElementById("searchInput")
const categoryFilters = document.getElementById("categoryFilters")

let activeCategory = "all"
let searchTerm = ""

function debounce(fn, delay) {
  let timer
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, args), delay)
  }
}

function renderList() {
  const filtered = courses.filter(course => {
    const matchesCategory = activeCategory === "all" || course.category === activeCategory
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  grid.innerHTML = ""
  emptyState.classList.toggle("hidden", filtered.length > 0)

  filtered.forEach(course => {
    const card = document.createElement("a")
    card.className = "block bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition"
    card.href = `course-detail.html?id=${course.id}`
    card.innerHTML = `
      <img src="${course.thumbnail}" alt="${course.title}" class="w-full h-44 object-cover">
      <div class="p-5">
        <span class="inline-block bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">${course.category}</span>
        <h3 class="font-semibold mb-1 text-slate-900">${course.title}</h3>
        <p class="text-sm text-slate-500 mb-2">by ${course.instructor}</p>
        <p class="font-semibold text-slate-900">INR ${course.price.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</p>
      </div>
    `
    grid.appendChild(card)
  })
}

searchInput.addEventListener("input", debounce(e => {
  searchTerm = e.target.value.trim()
  renderList()
}, 300))

categoryFilters.addEventListener("click", e => {
  if (!e.target.classList.contains("cat-btn")) return
  document.querySelectorAll(".cat-btn").forEach(btn => {
    btn.classList.remove("active", "bg-slate-900", "border-slate-900", "text-white")
    btn.classList.add("bg-white", "text-slate-600")
  })
  e.target.classList.add("active", "bg-slate-900", "border-slate-900", "text-white")
  e.target.classList.remove("bg-white", "text-slate-600")
  activeCategory = e.target.dataset.category
  renderList()
})

document.querySelector('.cat-btn[data-category="all"]').classList.add("bg-slate-900", "border-slate-900", "text-white")
renderList()