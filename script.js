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

    if (pref === "福岡") {
      location.href = "fukuoka.html";
    }

    else if (pref === "大分") {
      location.href = "oita.html";
    }

    else if (pref === "広島") {
      location.href = "hiroshima.html";
    }

    else {
      alert(`${pref} の温泉情報は準備中です`);
    }

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
