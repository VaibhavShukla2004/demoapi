const responseArea = document.getElementById("responseArea");
const token = btoa("admin:admin");

function handleGet() {
    fetch("/exams", {
        headers: {
            'Authorization': 'Basic ' + token
        }
    })
    .then(res => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
    })
    .then(data => {
        responseArea.textContent = JSON.stringify(data, null, 2);
    })
    .catch(err => {
        responseArea.textContent = "❌ Error: " + err.message;
    });
}
