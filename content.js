const ul = document.querySelector("#list");
const send = document.querySelector("#send");
const clear = document.querySelector("#clear");
const add = document.querySelector("#add");

add.addEventListener("click", (event) => {
	if(item.value !== "" && item.value.includes(' ') !== true){
		event.preventDefault();
		const li = document.createElement("li");
		li.textContent = item.value;
		item.value = "";
	 
		const chec = document.createElement("input");
		chec.type = "checkbox";
		chec.addEventListener("click", () => {
		  if (chec.checked == true) {
			 li.style.color = "rgb(107, 76, 76)";
		  } else {
			 li.style.color = "black";
		  }
		});
	 
		const dlt = document.createElement("button");
		dlt.textContent = "x";
		dlt.className = "dltLi";
		dlt.addEventListener("click", (event) => {
		  event.target.parentElement.remove();
		});
	 
		li.prepend(chec);
		li.append(dlt);
		ul.appendChild(li);
		ul.append(li);
	}
});
