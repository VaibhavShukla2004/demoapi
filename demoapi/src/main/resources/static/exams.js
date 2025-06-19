const token = btoa("admin:admin");

function renderExamTable(exams) {
    const tbody = document.querySelector("#examTable tbody");
    tbody.innerHTML = ""; // Clear old data

    if (!exams.length) {
        tbody.innerHTML = `<tr><td colspan="13">No exams found.</td></tr>`;
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
