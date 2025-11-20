// تغيير لون الخلفية عند الضغط على الزر
const bgButton = document.getElementById('bgButton');
bgButton.addEventListener('click', () => {
  const colors = ['#f5f5f5', '#fdf6e3', '#dbe9f4', '#fde2e2', '#e0f7fa', '#e8f5e9'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});

// عرض رسالة ترحيب عند الضغط على الزر
const welcomeButton = document.getElementById('welcomeButton');
welcomeButton.addEventListener('click', () => {
  const introText = document.getElementById('introText');
  const welcomeMessage = document.createElement('p');
  welcomeMessage.textContent = "Welcome to my personal profile page! 😊";
  welcomeMessage.style.fontWeight = 'bold';
  welcomeMessage.style.textAlign = 'center';
  welcomeMessage.style.color = '#2c3e50';
  introText.parentNode.insertBefore(welcomeMessage, introText);
  welcomeButton.disabled = true; // منع التكرار
});