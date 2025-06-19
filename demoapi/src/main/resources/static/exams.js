const token = btoa("admin:admin");

// ✅ Load and display all exams in the table
function loadExams() {
    fetch("/exams", {
        headers: {
            'Authorization': 'Basic ' + token
        }
    })
    .then(res => res.json())
    .then(data => renderExamTable(data))
    .catch(error => {
        const tbody = document.querySelector("#examTable tbody");
        tbody.innerHTML = `<tr><td colspan="14" style="color:red;">${error.message}</td></tr>`;
    });
}

// ✅ Renders the table rows based on exams array
function renderExamTable(exams) {
    const tbody = document.querySelector("#examTable tbody");
    tbody.innerHTML = ""; // Clear old data

    if (!exams.length) {
        tbody.innerHTML = `<tr><td colspan="14">No exams found.</td></tr>`;
        return;
    }

    exams.forEach(exam => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${exam.examId}</td>
            <td>${exam.acadYear}</td>
            <td>${exam.examType}</td>
            <td>${exam.semester}</td>
            <td>${exam.courseCode}</td>
            <td>${exam.dayOfExam}</td>
            <td>${exam.noOfRooms}</td>
            <td>${exam.noOfInvigilators}</td>
            <td>${exam.noOfStudents}</td>
            <td>${exam.noOfRelievers}</td>
            <td>${exam.noOfSquads}</td>
            <td>${exam.deptId}</td>
            <td>${exam.creationDate}</td>
            <td>${exam.createdBy}</td>
        `;
        tbody.appendChild(row);
    });
}

// ✅ Submit form to create a new exam (POST)
document.getElementById("createExamForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const form = e.target;

    const newExam = {
        examId: parseInt(form.examId.value),
        acadYear: parseInt(form.acadYear.value),
        examType: form.examType.value,
        semester: parseInt(form.semester.value),
        courseCode: form.courseCode.value,
        dayOfExam: form.dayOfExam.value,
        noOfRooms: parseInt(form.noOfRooms.value),
        noOfInvigilators: parseInt(form.noOfInvigilators.value),
        noOfStudents: parseInt(form.noOfStudents.value),
        noOfRelievers: parseInt(form.noOfRelievers.value),
        noOfSquads: parseInt(form.noOfSquads.value),
        deptId: parseInt(form.deptId.value),
        creationDate: form.creationDate.value,
        createdBy: form.createdBy.value
    };

    fetch("/exams", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + token
        },
        body: JSON.stringify(newExam)
    })
    .then(res => {
        if (!res.ok) throw new Error("Failed to create exam");
        return res.json();
    })
    .then(() => {
        loadExams();         // refresh table
        form.reset();        // clear form
    })
    .catch(err => alert("❌ Error: " + err.message));
});

// ✅ Fetch exam by ID and fill update form
document.getElementById("fetchExamForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const examId = document.getElementById("searchExamId").value;

    fetch(`/exams/${examId}`, {
        headers: {
            'Authorization': 'Basic ' + token
        }
    })
    .then(res => {
        if (!res.ok) throw new Error("Exam not found");
        return res.json();
    })
    .then(exam => {
        const form = document.getElementById("updateExamForm");
        form.examId.value = exam.examId;
        form.acadYear.value = exam.acadYear;
        form.examType.value = exam.examType;
        form.semester.value = exam.semester;
        form.courseCode.value = exam.courseCode;
        form.dayOfExam.value = exam.dayOfExam;
        form.noOfRooms.value = exam.noOfRooms;
        form.noOfInvigilators.value = exam.noOfInvigilators;
        form.noOfStudents.value = exam.noOfStudents;
        form.noOfRelievers.value = exam.noOfRelievers;
        form.noOfSquads.value = exam.noOfSquads;
        form.deptId.value = exam.deptId;
        form.creationDate.value = exam.creationDate;
        form.createdBy.value = exam.createdBy;
    })
    .catch(err => alert("❌ " + err.message));
});

// ✅ Submit PUT request to update exam
document.getElementById("updateExamForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const form = e.target;
    const examId = form.examId.value;

    const updatedExam = {
        examId: parseInt(form.examId.value),
        acadYear: parseInt(form.acadYear.value),
        examType: form.examType.value,
        semester: parseInt(form.semester.value),
        courseCode: form.courseCode.value,
        dayOfExam: form.dayOfExam.value,
        noOfRooms: parseInt(form.noOfRooms.value),
        noOfInvigilators: parseInt(form.noOfInvigilators.value),
        noOfStudents: parseInt(form.noOfStudents.value),
        noOfRelievers: parseInt(form.noOfRelievers.value),
        noOfSquads: parseInt(form.noOfSquads.value),
        deptId: parseInt(form.deptId.value),
        creationDate: form.creationDate.value,
        createdBy: form.createdBy.value
    };

    fetch(`/exams/${examId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + token
        },
        body: JSON.stringify(updatedExam)
    })
    .then(res => {
        if (!res.ok) throw new Error("Failed to update exam");
        return res.json();
    })
    .then(() => {
        loadExams(); // refresh table
        form.reset();
        alert("✅ Exam updated successfully");
    })
    .catch(err => alert("❌ " + err.message));
});

document.getElementById("deleteExamForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const examId = document.getElementById("deleteExamId").value;

    if (!confirm(`Are you sure you want to delete Exam ID ${examId}?`)) return;

    fetch(`/exams/${examId}`, {
        method: "DELETE",
        headers: {
            'Authorization': 'Basic ' + token
        }
    })
    .then(res => {
        if (res.status === 204) {
            alert(`✅ Exam ID ${examId} deleted successfully`);
            loadExams(); // refresh table
        } else if (res.status === 404) {
            alert("❌ Exam not found");
        } else {
            throw new Error("Failed to delete exam");
        }
    })
    .catch(err => alert("❌ " + err.message));
});
