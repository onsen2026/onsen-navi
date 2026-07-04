const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");
const prefButtons = document.querySelectorAll(".pref-list button");
const heroSelect = document.querySelector(".hero-search select");
const heroSearchButton = document.querySelector(".brown-btn");

const prefLinks = {
  "北海道":"hokkaido.html",
  "青森":"aomori.html",
  "岩手":"iwate.html",
  "宮城":"miyagi.html",
  "秋田":"akita.html",
  "山形":"yamagata.html",
  "福島":"fukushima.html",
  "茨城":"ibaraki.html",
  "栃木":"tochigi.html",
  "群馬":"gunma.html",
  "埼玉":"saitama.html",
  "千葉":"chiba.html",
  "東京":"tokyo.html",
  "神奈川":"kanagawa.html",
  "新潟":"niigata.html",
  "富山":"toyama.html",
  "石川":"ishikawa.html",
  "福井":"fukui.html",
  "山梨":"yamanashi.html",
  "長野":"nagano.html",
  "岐阜":"gifu.html",
  "静岡":"shizuoka.html",
  "愛知":"aichi.html",
  "三重":"mie.html",
  "滋賀":"shiga.html",
  "京都":"kyoto.html",
  "大阪":"osaka.html",
  "兵庫":"hyogo.html",
  "奈良":"nara.html",
  "和歌山":"wakayama.html",
  "鳥取":"tottori.html",
  "島根":"shimane.html",
  "岡山":"okayama.html",
  "広島":"hiroshima.html",
  "山口":"yamaguchi.html",
  "徳島":"tokushima.html",
  "香川":"kagawa.html",
  "愛媛":"ehime.html",
  "高知":"kochi.html",
  "福岡":"fukuoka.html",
  "佐賀":"saga.html",
  "長崎":"nagasaki.html",
  "熊本":"kumamoto.html",
  "大分":"oita.html",
  "宮崎":"miyazaki.html",
  "鹿児島":"kagoshima.html",
  "沖縄":"okinawa.html"
};

searchButton.addEventListener("click", () => {
  const keyword = searchInput.value.trim();

  if (keyword === "") {
    alert("検索キーワードを入力してください");
    return;
  }

  location.href = `search.html?keyword=${encodeURIComponent(keyword)}`;
});

prefButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const pref = button.textContent.trim();
    location.href = prefLinks[pref];
  });
});

heroSearchButton.addEventListener("click", () => {
  const area = heroSelect.value;

  if (area === "都道府県を選択") {
    alert("都道府県を選択してください");
    return;
  }

  location.href = prefLinks[area];
});
