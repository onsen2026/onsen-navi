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

const prefLinks = {
  "北海道":"hokkaido.html",
  "青森":"aomori.html",
  "岩手":"iwate.html",
  "宮城":"miyagi.html",
  "秋田":"akita.html",
  "山形":"yamagata.html",
  "福島":"fukushima.html",

  "東京":"tokyo.html",
  "神奈川":"kanagawa.html",
  "埼玉":"saitama.html",
  "千葉":"chiba.html",

  "京都":"kyoto.html",
  "大阪":"osaka.html",
  "兵庫":"hyogo.html",

  "広島":"hiroshima.html",
  "山口":"yamaguchi.html",

  "福岡":"fukuoka.html",
  "佐賀":"saga.html",
  "長崎":"nagasaki.html",
  "熊本":"kumamoto.html",
  "大分":"oita.html",
  "宮崎":"miyazaki.html",
  "鹿児島":"kagoshima.html",
  "沖縄":"okinawa.html"
};

prefButtons.forEach(button => {

  button.addEventListener("click", () => {

    const pref = button.textContent;

    if(prefLinks[pref]){
      location.href = prefLinks[pref];
    }
    else{
      alert("ページ準備中です");
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
