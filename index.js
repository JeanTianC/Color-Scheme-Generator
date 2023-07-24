document.getElementById("getcolor-btn").addEventListener("click", function () {
  const colorHex = document.getElementById("color-input").value.slice(1);
  const colorMode = document.getElementById("color-mode").value;

  const urlColorMode = `https://www.thecolorapi.com/scheme?hex=${colorHex}&mode=${colorMode}`;

  console.log(urlColorMode);

  fetch(urlColorMode)
    .then((res) => res.json())
    .then((data) => {
      const colorHtml = data.colors
        .map((color) => {
          return ` <div class="display-box">
                    <div class="display-color" style="background-color:${color.hex.value}" ></div>
                    <p class="display-hex">${color.hex.value}</p>
                 </div>`;
        })
        .join("");
      document.getElementById("display-section").innerHTML = colorHtml;
    });
});
