const input = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

input.addEventListener("input", function () {
    const keyword = this.value.trim().toLowerCase();

    cards.forEach(card => {
        const data = card.getAttribute("data-keyword");

        if (!data) return;

        const text = data.toLowerCase();

        if (text.includes(keyword)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
