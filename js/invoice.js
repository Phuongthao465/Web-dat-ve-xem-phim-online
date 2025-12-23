fetch("/Web-dat-ve-xem-phim-online/api/get_invoice.php")
  .then(res => res.json())
  .then(data => {
    const tbody = document.getElementById("invoiceBody");

    if (!data || data.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6">❌ Chưa có hóa đơn</td></tr>`;
      return;
    }

    tbody.innerHTML = "";
    data.forEach(item => {
      tbody.innerHTML += `
        <tr>
          <td>${item.movie_name}</td>
          <td>${item.show_time}</td>
          <td>${item.seats}</td>
          <td style="color:#00ff99">${Number(item.total_price).toLocaleString()} đ</td>
          <td>${item.payment_method}</td>
          <td>${item.created_at}</td>
        </tr>
      `;
    });
  });

function newBooking() {
  // ❗ XÓA SẠCH TRẠNG THÁI CŨ
  localStorage.removeItem("booking");
  localStorage.removeItem("seatData");
  localStorage.removeItem("selectedFoods");
  localStorage.removeItem("paid");
  localStorage.removeItem("movieName");
  localStorage.removeItem("movieImg");
  localStorage.removeItem("movieType");

  // 👉 quay về movies
  window.location.href = "movies.html";
}
