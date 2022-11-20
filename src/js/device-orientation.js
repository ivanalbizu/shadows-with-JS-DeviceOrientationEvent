const DEVICE = document.querySelector('.device');
const BUTTON = document.querySelector('button');

const START = () => {
  BUTTON.remove();
  if (DeviceOrientationEvent?.requestPermission) {
    DeviceOrientationEvent.requestPermission().then((permission) => {
      if (permission === 'granted')
        window.addEventListener('deviceorientation', handleOrientation);
      else alert('You denied permission to play!');
    });
  } else {
    window.addEventListener('deviceorientation', handleOrientation);
  }
};

BUTTON.addEventListener('click', START);

const handleOrientation = (e) => {
  const { beta, gamma } = e;
  console.log('beta--', beta);
  console.log('gamma--', gamma);
  if (-50 < gamma < 50) DEVICE.style.setProperty('--factor-x', gamma / -30);
  if (-50 < beta < 50) DEVICE.style.setProperty('--factor-y', beta / -30);
};
