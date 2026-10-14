const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");

  menuButton.textContent = isOpen ? "×" : "☰";
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "メニューを閉じる" : "メニューを開く"
  );
});

// スマホでリンクを押したらメニューを閉じる
navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.textContent = "☰";
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "メニューを開く");
  });
});

// 予約フォームのデモ
const bookingForm = document.querySelector("#booking-form");

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(bookingForm);
  const name = formData.get("name");
  const menu = formData.get("menu");
  const date = formData.get("date");

  document.querySelector("#form-message").textContent =
    `${name} 様、${date}の「${menu}」の予約リクエストを受け付けた想定です。実際の予約は送信されていません。`;
});
