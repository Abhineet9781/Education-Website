const params = new URLSearchParams(window.location.search)
const courseId = Number(params.get("id"))
const course = courses.find(c => c.id === courseId)

const detailWrap = document.getElementById("courseDetail")

if (course) {
  detailWrap.innerHTML = `
    <img src="${course.thumbnail}" alt="${course.title}" class="w-full h-full object-cover min-h-[320px]">
    <div class="p-9">
      <span class="inline-block bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">${course.category}</span>
      <h1 class="text-2xl font-bold mb-2 text-slate-900">${course.title}</h1>
      <p class="text-slate-500 mb-2">Taught by ${course.instructor}</p>
      <p class="text-2xl font-bold text-slate-900 mb-4">INR ${course.price.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</p>
      <p class="text-slate-600 mb-6 leading-relaxed">${course.description}</p>
      <button id="enrollBtn" class="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-7 py-3 rounded-full transition">Enroll Now</button>
    </div>
  `

  document.getElementById("enrollBtn").addEventListener("click", () => {
    alert(`You have successfully enrolled in "${course.title}"`)
  })
} else {
  detailWrap.innerHTML = `<p class="col-span-2 text-center text-slate-500 py-10">Course not found.</p>`
}