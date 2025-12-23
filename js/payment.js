document.addEventListener("DOMContentLoaded", () => {

  const booking = JSON.parse(localStorage.getItem("booking"));
  const foods = JSON.parse(localStorage.getItem("selectedFoods")) || [];
  const cinemaName = localStorage.getItem("cinemaName") || "Chưa chọn rạp";
  const cinemaAddress = localStorage.getItem("cinemaAddress") || "";

  if (!booking) {
    alert("❌ Không có dữ liệu đặt vé!");
    window.location.href = "movies.html";
    return;
  }

  // ===== ĐỒ ĂN =====
  let foodHTML = "";
  let foodTotal = 0;

  if (foods.length > 0) {
    foodHTML += `<h3>🍿 Đồ ăn & Thức uống</h3>`;
    foods.forEach(item => {
      const total = item.price * item.qty;
      foodTotal += total;
      foodHTML += `
        <p>${item.name} × ${item.qty}
        — <b>${total.toLocaleString("vi-VN")} đ</b></p>
      `;
    });
  } else {
    foodHTML = `<p>🍿 Không chọn đồ ăn</p>`;
  }

  const finalTotal = booking.total + foodTotal;

  // ===== HIỂN THỊ =====
  document.getElementById("ticketInfo").innerHTML = `
    <p><b>🎬 Phim:</b> ${booking.movie}</p>
    <p><b>📅 Suất chiếu:</b> ${booking.date} - ${booking.time}</p>
    <p><b>💺 Ghế:</b> ${booking.seats.join(", ")}</p>
    <p><b>🏢 Rạp:</b> ${cinemaName} ${cinemaAddress}</p>
    ${foodHTML}
    <p style="font-size:18px;color:#ffcc00">
      <b>💰 Tổng thanh toán: ${finalTotal.toLocaleString("vi-VN")} đ</b>
    </p>
  `;

  // ===== THANH TOÁN =====
  document.getElementById("payBtn").onclick = () => {
    fetch("/Web-dat-ve-xem-phim-online/api/save_invoice.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: 1,
        movie_name: booking.movie,
        show_time: `${booking.date} - ${booking.time}`,
        seats: booking.seats.join(", "),
        total_price: finalTotal,
        payment_method: "Tiền mặt"
      })
    })
    .then(res => res.json())
    .then(() => {
      window.location.href = "invoice.html";
    })
    .catch(() => {
      alert("❌ Lỗi thanh toán");
    });
  };
});
