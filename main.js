const text = document.querySelector("#text");
const btn = document.querySelector("#btn");
const update = document.querySelector("#update");
const ul = document.querySelector("ul");
let data = JSON.parse(localStorage.getItem("data")) || [];


function showData() {
  ul.innerHTML = "";

  data.forEach((value, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <p>${value}</p>
      <div id="libtns">
        <button class="edit">edit</button>
        <button class="delete">delete</button>
      </div>
    `;
    ul.appendChild(li);

btn.addEventListener("click", () => {
  const value = text.value.trim();
  if (value === "") return;
  data.push(value);
  localStorage.setItem("data", JSON.stringify(data));
  text.value = "";
  showData();
});

    const del = li.querySelector(".delete")
    del.addEventListener("click", () => {
  data.splice(index, 1);
      localStorage.setItem("data", JSON.stringify(data));
      li.remove();
    });

    const editbtn = li.querySelector(".edit");
     editbtn.addEventListener("click", () => {
      text.value = value;
      btn.classList.add("nonactive");
      update.classList.remove("nonactive");

      update.onclick = () => {
        data[index] = text.value;
       localStorage.setItem("data", JSON.stringify(data));
   text.value = "";
       btn.classList.remove("nonactive");
     update.classList.add("nonactive");

        showData();
      };
    });
  });
}







function cleardata() {
  localStorage.removeItem("data");
  data = [];
  ul.innerHTML = "";
}
showData();