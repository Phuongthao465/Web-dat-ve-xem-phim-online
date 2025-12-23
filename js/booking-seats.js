const seatContainer = document.getElementById("seatContainer");
const bookedSeats = [6, 7, 15, 23];
const selectedSeats = new Set();

const totalSeats = 40;
const seatsPerRow = 8;
const lastRow = Math.ceil(totalSeats / seatsPerRow);

// Tạo ghế
for (let i = 1; i <= totalSeats; i++) {
  const seat = document.createElement("div");
  seat.classList.add("seat");
  seat.textContent = i;

  const row = Math.ceil(i / seatsPerRow);
  if (row === lastRow) seat.classList.add("double");
  if (bookedSeats.includes(i)) seat.classList.add("booked");

  seat.onclick = () => {
    if (seat.classList.contains("booked")) return;

    seat.classList.toggle("selected");
    if (selectedSeats.has(i)) selectedSeats.delete(i);
    else selectedSeats.add(i);

    updateInfo();
  };

  seatContainer.appendChild(seat);
}

// Cập nhật thông tin
function updateInfo() {
  const seats = [...selectedSeats];

  document.getElementById("selectedInfo").textContent =
    seats.length
      ? `Ghế đã chọn: ${seats.join(", ")}`
      : "Chưa chọn ghế nào";

  let total = 0;
  seats.forEach(s => {
    const row = Math.ceil(s / seatsPerRow);
    total += row === lastRow ? 100000 : 45000;
  });

  document.getElementById("totalPrice").textContent =
    `💰 Tổng tiền: ${total.toLocaleString("vi-VN")} đ`;

  return total;
}

// 🔥 CHỐT BOOKING Ở ĐÂY
function confirmSeats() {
  if (selectedSeats.size === 0) {
    alert("Vui lòng chọn ít nhất một ghế!");
    return;
  }

  const booking = {
    movie: localStorage.getItem("movieName") || "Chưa chọn phim",
    date: localStorage.getItem("selectedDate") || "Chưa chọn ngày",
    time: localStorage.getItem("showtime") || "Chưa chọn suất",
    seats: [...selectedSeats],
    total: updateInfo()
  };

  console.log("BOOKING TRƯỚC KHI LƯU:", booking);

  localStorage.setItem("booking", JSON.stringify(booking));

  // TEST NGAY
  console.log("BOOKING SAU KHI LƯU:", localStorage.getItem("booking"));

  window.location.href = "food.html";
}
