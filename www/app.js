function openModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function preview(input, previewId) {
  const file = input.files[0];

  if (!file) return;

  const previewBox = document.getElementById(previewId);
  const image = document.createElement("img");

  image.src = URL.createObjectURL(file);
  image.style.maxWidth = "100%";
  image.style.maxHeight = "180px";
  image.style.objectFit = "contain";
  image.style.borderRadius = "10px";

  previewBox.innerHTML = "";
  previewBox.appendChild(image);
}

function createWork() {
  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("desc").value.trim();

  if (!title) {
    alert("Digite o título da obra.");
    return;
  }

  const empty = document.getElementById("empty");

  empty.innerHTML = `
    <div>📖</div>
    <h2>${title}</h2>
    <p>${description || "Sua nova obra foi criada!"}</p>
  `;

  closeModal();
}
