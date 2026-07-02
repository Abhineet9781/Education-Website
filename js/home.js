function buildCourseCard(course) {
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
  return card
}

const popularWrap = document.getElementById("popularCourses")
courses.slice(0, 6).forEach(course => {
  popularWrap.appendChild(buildCourseCard(course))
})