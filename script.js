let bookingHistory = [];  // Array to store booking history

// Menambahkan event listener untuk tombol "Start Booking"
document.getElementById("startBookingButton").addEventListener("click", function() {
    // Sembunyikan menu utama dan tampilkan form pemesanan
    document.getElementById("mainMenu").classList.add("hidden");
    document.getElementById("bookingFormContainer").classList.remove("hidden");
});

// Menambahkan event listener untuk tombol "View Bookings"
document.getElementById("viewBookingsButton").addEventListener("click", function() {
    // Sembunyikan menu utama dan tampilkan daftar booking
    document.getElementById("mainMenu").classList.add("hidden");
    document.getElementById("bookingsPage").classList.remove("hidden");

    // Tampilkan semua booking yang ada
    const bookingList = document.getElementById("bookingList");
    bookingList.innerHTML = '';  // Kosongkan daftar sebelum diisi
    bookingHistory.forEach(booking => {
        const li = document.createElement("li");
        li.textContent = `${booking.name} | ${booking.date} | ${booking.time} | Guests: ${booking.guests}`;
        bookingList.appendChild(li);
    });
});

// Menambahkan event listener untuk tombol "Logout"
document.getElementById("logoutButton").addEventListener("click", function() {
    alert("You have logged out.");
    // Redirect ke halaman utama atau reset form jika perlu
    location.reload();  // Reload halaman untuk logout
});

document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah halaman dimuat ulang

    // Ambil nilai dari form
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;

    // Simpan pemesanan ke dalam history
    bookingHistory.push({ name, date, time, guests });

    // Tampilkan detail pemesanan di konfirmasi
    document.getElementById("resultName").textContent = name;
    document.getElementById("resultDate").textContent = date;
    document.getElementById("resultTime").textContent = time;
    document.getElementById("resultGuests").textContent = guests;

    // Sembunyikan form dan tampilkan bagian konfirmasi
    document.getElementById("bookingFormContainer").classList.add("hidden");
    document.getElementById("confirmation").classList.remove("hidden");
});

function resetForm() {
    // Sembunyikan konfirmasi dan tampilkan form pemesanan
    document.getElementById("confirmation").classList.add("hidden");
    document.getElementById("mainMenu").classList.remove("hidden");

    // Reset form input
    document.getElementById("bookingForm").reset();
}

function goBackToMenu() {
    // Kembali ke halaman utama
    document.getElementById("bookingsPage").classList.add("hidden");
    document.getElementById("mainMenu").classList.remove("hidden");
}
