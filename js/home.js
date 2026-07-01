function buildCourseCard(course) {
  const card = document.createElement("a");
  card.className = "block bg-white border border-slate-200 rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition";
  card.href = `course-detail.html?id=${course.id}`;
  card.innerHTML = `
    <img src="${course.thumbnail}" alt="${course.title}" class="w-full h-44 object-cover">
    <div class="p-5">
      <span class="inline-block bg-slate-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded mb-2">${course.category}</span>
      <h3 class="font-semibold mb-1">${course.title}</h3>
      <p class="text-sm text-slate-500 mb-2">by ${course.instructor}</p>
      <p class="font-bold text-blue-700">$${course.price.toFixed(2)}</p>
    </div>
  `;
  return card;
}

const popularWrap = document.getElementById("popularCourses");
courses.slice(0, 6).forEach(course => {
  popularWrap.appendChild(buildCourseCard(course));
});