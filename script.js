const input = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

input.addEventListener("input", function () {
    const keyword = this.value.toLowerCase();

    cards.forEach(card => {
        const text = card.getAttribute("data-keyword").toLowerCase();

        if (text.includes(keyword)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
