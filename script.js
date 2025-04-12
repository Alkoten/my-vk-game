let maxEnergy = 100;
let energy = 100;
let dollars = 10;

// Отображение значений
function updateUI() {
  document.getElementById('energy-value').textContent = energy;
  document.getElementById('dollars-value').textContent = dollars;
}

// Восстановление 1 энергии каждые 3 минуты
setInterval(() => {
  if (energy < maxEnergy) {
    energy++;
    updateUI();
  }
}, 180000); // 3 минуты

// Восстановление энергии за доллары
function restoreEnergy() {
  let missing = maxEnergy - energy;
  if (missing === 0) {
    alert("Энергия уже полная!");
    return;
  }
  if (dollars < missing) {
    alert("Недостаточно долларов!");
    return;
  }

  dollars -= missing;
  energy = maxEnergy;
  updateUI();
}
<script>
  // Инициализация VK Bridge
  vkBridge.send('VKWebAppInit');

  // Получение данных пользователя
  vkBridge.send('VKWebAppGetUserInfo').then(data => {
    const userName = `${data.first_name} ${data.last_name}`;
    document.getElementById('nickname').textContent = `Ник: ${userName}`;
    console.log("Пользователь:", data);
  }).catch(err => {
    console.error('Ошибка авторизации:', err);
  });
</script>
