document.addEventListener("DOMContentLoaded", () => {
  const movieCards = document.querySelectorAll(".movie-card");

  movieCards.forEach(card => {
    card.addEventListener("click", () => {

      // LẤY DỮ LIỆU PHIM
      const name = card.getAttribute("data-movie");
      const img = card.querySelector("img")?.getAttribute("src") || "";
      const type = card.querySelector(".movie-info")?.textContent || "";

      // LƯU PHIM ĐƯỢC CHỌN
      localStorage.setItem("movieName", name);
      localStorage.setItem("movieImg", img);
      localStorage.setItem("movieType", type);

      // ❌ TUYỆT ĐỐI KHÔNG CHECK booking ở đây
      // ❌ TUYỆT ĐỐI KHÔNG throw error
      // ❌ TUYỆT ĐỐI KHÔNG fetch backend

      // CHUYỂN SANG DETAIL
      window.location.href = "detail.html";
    });
  });
});
