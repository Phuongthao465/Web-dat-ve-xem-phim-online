fetch("api/get_invoices.php")
  .then(res => res.json())
  .then(data => {
    const tbody = document.getElementById("invoiceBody");
    tbody.innerHTML = "";

    data.forEach(item => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${item.movie_name}</td>
        <td>${item.show_time}</td>
        <td>${item.seats}</td>
        <td>${item.total_price.toLocaleString()} đ</td>
        <td>${item.payment_method}</td>
        <td>${item.created_at}</td>
      `;
      tbody.appendChild(tr);
    });
  });
