const ul = document.getElementById("ul");
const container = document.getElementById("container");

const getData = async () => {
  try {
    const dataArr = [];
    const data = await fetch("https://fakestoreapi.com/products");
    const jsonData = await data.json();
    dataArr.push(...jsonData);
    dataArr.map((item) => {
      let li = document.createElement("li");
      let div1 = document.createElement("div");
      let div2 = document.createElement("div");
      let span1 = document.createElement("span");
      let span2 = document.createElement("span");
      span1.innerText = "TITLE : ";
      span1.style.color = "rgb(233, 73, 73)";
      span2.innerText = "DESCRIPTION : ";
      span2.style.color = "rgb(233, 73, 73)";
      div1.innerText = item?.title;
      div2.innerText = item?.description;
      div1.style.marginBottom = "10px";
      li.appendChild(span1);
      li.appendChild(div1);
      li.appendChild(span2); // Append span1 to the li
      li.appendChild(div2); // Append span2 to the li

      ul.appendChild(li);
    });
  } catch (err) {
    let div1 = document.createElement("div");
    container.appendChild(div1);
    div1.innerText = "Error while fetching data please try again later";
    div1.style.color="red";
    div1.style.fontWeight="bold";
    div1.style.marginTop="50px";
    console.log(err);
  }
};
getData();
