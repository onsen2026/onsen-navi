const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");
const prefButtons = document.querySelectorAll(".pref-list button");
const heroSelect = document.querySelector(".hero-search select");
const heroSearchButton = document.querySelector(".brown-btn");

searchButton.addEventListener("click", () => {
  const keyword = searchInput.value.trim();

  if (!keyword) {
    alert("検索キーワードを入力してください");
    return;
  }

  alert(`${keyword} を検索します`);
});

prefButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const pref = button.textContent;
    alert(`${pref} の温泉ページへ移動します`);
  });
});

heroSearchButton.addEventListener("click", () => {
  const area = heroSelect.value;

  if (area === "都道府県を選択") {
    alert("都道府県を選択してください");
    return;
  }

  alert(`${area} の条件検索をします`);
});
