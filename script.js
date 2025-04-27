// Toggle Menu
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => {
    nav.querySelector('ul').classList.toggle('active');
});

// AOS Animation
AOS.init({
    duration: 1000,
});

// Fake Contact Form
function submitForm(event) {
    event.preventDefault();
    document.getElementById('form-message').innerText = "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm.";
    event.target.reset();
}

// Admin Panel - Khóa học
let courses = [
    { title: "Toán Tư Duy 6-12 tuổi", desc: "Phát triển tư duy logic và giải quyết vấn đề." },
    { title: "Tiếng Anh Giao Tiếp", desc: "Tự tin giao tiếp tiếng Anh cùng giáo viên bản ngữ." },
    { title: "Lập Trình cho Trẻ em", desc: "Khơi dậy đam mê công nghệ từ nhỏ." }
];

function renderCourses() {
    const list = document.getElementById('course-list');
    list.innerHTML = '';
    courses.forEach((course, index) => {
        list.innerHTML += `
            <div class="course-item">
                <h3>${course.title}</h3>
                <p>${course.desc}</p>
                <button onclick="deleteCourse(${index})" class="btn" style="margin-top:10px;">Xóa</button>
            </div>
        `;
    });
}

function addCourse() {
    const title = document.getElementById('course-title').value.trim();
    const desc = document.getElementById('course-desc').value.trim();
    if (title && desc) {
        courses.push({ title, desc });
        renderCourses();
        document.getElementById('course-title').value = '';
        document.getElementById('course-desc').value = '';
    } else {
        alert('Vui lòng nhập đầy đủ thông tin!');
    }
}

function deleteCourse(index) {
    if (confirm('Bạn có chắc chắn muốn xóa khóa học này không?')) {
        courses.splice(index, 1);
        renderCourses();
    }
}

renderCourses();
