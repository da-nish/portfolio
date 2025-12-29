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
    title: "Credit Card App",
    desc: "",
    path: "./asset/video/credit_card_app.mp4",
    type: "video",
    points: [
      "Designed a sleek, interactive UI to enable smooth credit card selection.",
      "Implemented animations for an enhanced user experience while choosing cards.",
    ]
  },
  {
    title: "Wallpaper App",
    desc: "",
    path: "./asset/video/wallpaper_app.mp4",
    type: "video",
    points: [
      "Infinite scroll for continuous wallpaper browsing.",
      "Thumbnails for fast load, with a tap-to-download feature for full-size wallpapers.",
      "Global progress indicator for downloads on each card.",
      "Caching to store downloaded wallpapers for offline access."
    ]
  },
  {
    title: "Local Share",
    desc: "",
    path: "./asset/video/local_share_app.mp4",
    type: "video",
    points: [
      "Enables file sharing across devices on the same network.",
      "Supports cross-platform file sharing between macOS, iOS, and Android devices.",
      "Streamlined UI for easy file selection and transfer."
    ]
  },
  {
    title: "Alt Capital",
    desc: "",
    path: "./asset/image/sc_college_alt_app.png",
    type: "image",
    points: [
      "Supports login with Apple and Google for easy account access.",
      "Integrated deep linking for smooth navigation to specific portfolio sections.",
      "Enabled push notifications for updates on portfolio performance.",
      "Built-in KYC (Know Your Customer) verification process within the app for security.",
    ]
  },
  {
    title: "Zero Balance App",
    desc: "",
    path: "./asset/image/sc_zero_balance_app.png",
    type: "image",
    points: [
      "A credit card app that rewards users with points for each transaction.",
      "User-friendly UI designed for seamless navigation and ease of use.",
      "Optimized for quick card usage and easy access to account details.",
    ]
  },
  {
    title: "AllStars Trader",
    desc: "",
    path: "./asset/image/sc_allstars_app.png",
    type: "image",
    points: [
      "Sports trading app inspired by platforms like Dream11.",
      "Utilized WebSockets for real-time data updates and seamless user interaction.",
      "Integrated multiple payment methods for easy transactions.",
      "Implemented deep linking for quick access to specific app sections.",
      "Added remote config for dynamic app updates and feature management.",
    ]
  },
];

function openModal(index) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalTitle").innerText = projects[index].title;
  document.getElementById("modalDesc").innerText = projects[index].desc;
  showMedia(projects[index].type, projects[index].path)
  createBulletPoints(projects[index].points)
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
function createBulletPoints(bulletPoints) {
  const ul = document.getElementById('bulletList');  // Get the <ul> element
  ul.innerHTML = ''; // Clear existing content (if any)

  // Loop through the array to create each <li>
  bulletPoints.forEach(point => {
    const li = document.createElement('li');  // Create <li> for each item
    li.textContent = point;  // Set text content of <li>
    ul.appendChild(li);  // Append <li> to <ul>
  });
}

function copyEmail() {
  const email = document.getElementById("email").innerText;
  navigator.clipboard.writeText(email);
  alert("Email copied!");
}

function openResume() {
  window.open('./asset/pdf/danish_ios_dec25.pdf', '_blank');
}

function onClickEmail() {
  window.open('https://mail.google.com/mail/?view=cm&to=danishdev64@gmail.com&body=Hi', '_blank');
}