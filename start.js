document.querySelector('#start').addEventListener('click', () => {
  window.location.href = 'level-1/level-1.html';
});
document.querySelector('#instruction').addEventListener('click', () => {
  document.querySelector('#instruction-screen').style.opacity = '1';
  document.querySelector('#instruction-screen').style.zIndex = '12';
  document.querySelector('#read-instructions').addEventListener('click', () => {
    document.querySelector('#instruction-screen').style.opacity = '0';
    document.querySelector('#instruction-screen').style.zIndex = '-1';
  });
});
