document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');
  const videoFeed = document.getElementById('video-feed');
  const videoFileInput = document.getElementById('videoFile');
  const videoTitleInput = document.getElementById('videoTitle');
  const videoDescriptionInput = document.getElementById('videoDescription');
  const uploadButton = document.getElementById('uploadButton');
  const videoPreview = document.getElementById('videoPreview');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');
    });
  });

  videoFileInput.addEventListener('change', () => {
    const file = videoFileInput.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      videoPreview.src = url;
      videoPreview.style.display = 'block';
    } else {
      videoPreview.style.display = 'none';
    }
  });

  uploadButton.addEventListener('click', () => {
    const title = videoTitleInput.value;
    const description = videoDescriptionInput.value;
    const file = videoFileInput.files[0];

    if (file && title && description) {
      const videoPreviewElement = document.createElement('div');
      videoPreviewElement.className = 'video-preview';
      videoPreviewElement.innerHTML = `
        <video controls src="${URL.createObjectURL(file)}" style="width: 100%; border-radius: 5px;"></video>
        <h3>${title}</h3>
        <p>${description}</p>
      `;
      videoFeed.appendChild(videoPreviewElement);

      // Clear inputs after upload
      videoFileInput.value = '';
      videoTitleInput.value = '';
      videoDescriptionInput.value = '';
      videoPreview.style.display = 'none';
    } else {
      alert('Please fill out all fields and select a video.');
    }
  });
});
