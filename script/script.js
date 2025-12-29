function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

function openProject(name) {
  alert(`${name} details can be shown here`);
}


  const projects = [
  {
    title: "Credit card App",
    desc: "Real-time audio broadcast app built using Flutter and Firebase.",
    path: "./asset/video/credit_card_app.mp4",
    type: "video"
  },
  {
    title: "Wallpaper App",
    desc: "iOS video streaming app with DRM, AVPlayer, and offline playback.",
    path: "./asset/video/wallpaper_app.mp4",
    type: "video"
  },
  {
    title: "Local Share",
    desc: "iOS video streaming app with DRM, AVPlayer, and offline playback.",
    path: "./asset/video/local_share_app.mp4",
    type: "video"
  },
  {
    title: "Alt Invest",
    desc: "iOS video streaming app with DRM, AVPlayer, and offline playback.",
    path: "./asset/image/sc_college_alt_app.png",
    type: "image"
  },
  {
    title: "Zero Balance App",
    desc: "iOS video streaming app with DRM, AVPlayer, and offline playback.",
    path: "./asset/image/sc_zero_balance_app.png",
    type: "image"
  },
  {
    title: "AllStars Trader",
    desc: "iOS video streaming app with DRM, AVPlayer, and offline playback.",
    path: "./asset/image/sc_allstars_app.png",
    type: "image"
  },
];

function openModal(index) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalTitle").innerText = projects[index].title;
  document.getElementById("modalDesc").innerText = projects[index].desc;
  showMedia(projects[index].type, projects[index].path)
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function clickOutside(event) {
  if (event.target.id === "modal") {
    closeModal();
  }
}


function showMedia(type, path) {
  const img = document.getElementById("modalImage");
  const video = document.getElementById("modalVideo");
  const videoSource = document.getElementById("modalVideoSource");

  // Hide both first
  img.style.display = "none";
  video.style.display = "none";
  video.pause();

  if (type === "image") {
    img.src = path;
    img.style.display = "block";
  }

  if (type === "video") {
    videoSource.src = path;
    video.load();
    video.style.display = "block";
  }
}

function copyEmail() {
  const email = document.getElementById("email").innerText;
  navigator.clipboard.writeText(email);
  alert("Email copied!");
}

function openResume() {
  window.open('./asset/pdf/danish_ios_dec25.pdf', '_blank');
}

function onClickEmail(){
  window.open('https://mail.google.com/mail/?view=cm&to=danishdev64@gmail.com&body=Hi', '_blank');
}