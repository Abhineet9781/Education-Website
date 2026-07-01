const params = new URLSearchParams(window.location.search);
const courseId = Number(params.get("id"));
const course = courses.find(c => c.id === courseId);

const detailWrap = document.getElementById("courseDetail");

if (course) {
  detailWrap.innerHTML = `
    <img src="${course.thumbnail}" alt="${course.title}" class="w-full h-full object-cover min-h-[320px]">
    <div class="p-9">
      <span class="inline-block bg-slate-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded mb-3">${course.category}</span>
      <h1 class="text-2xl font-bold mb-2">${course.title}</h1>
      <p class="text-slate-500 mb-2">Taught by ${course.instructor}</p>
      <p class="text-2xl font-bold text-blue-700 mb-4">$${course.price.toFixed(2)}</p>
      <p class="text-slate-500 mb-6">${course.description}</p>
      <button id="enrollBtn" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-md transition">Enroll Now</button>
    </div>
  `;

  document.getElementById("enrollBtn").addEventListener("click", () => {
    alert(`You have successfully enrolled in "${course.title}"`);
  });
} else {
  detailWrap.innerHTML = `<p class="col-span-2 text-center text-slate-500 py-10">Course not found.</p>`;
}