const video = document.getElementById("video-webcam");
const btnKamera = document.getElementById("btn-kamera");

btnKamera.addEventListener("click", () => {
  // Meminta izin akses kamera
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        video.srcObject = stream;
      })
      .catch((error) => {
        console.error("Gagal mengakses kamera: ", error);
        alert("Izin kamera ditolak atau kamera tidak ditemukan.");
      });
  } else {
    alert("Browser Anda tidak mendukung akses kamera.");
  }
});
