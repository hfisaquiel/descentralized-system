const backgroundImage = document.getElementById("site-background");

const captureMouseOverBodyMovement = (event) => {
  const largerThan = window.screen.width;
  const heightThan = window.screen.height;
  const positionX = event.screenX;
  const positionY = event.screenY;

  const ratioXA = (largerThan / 2 - positionX) / largerThan;
  const ratioYA = (heightThan / 2 - positionY) / heightThan;

  const moveVertical = (ratioYA * 10).toFixed(0);
  const moveHorizontal = (ratioXA * 10).toFixed(0);

  backgroundImage.style.top = `${moveVertical - 5}px`;
  backgroundImage.style.left = `${moveHorizontal - 5}px`;
  backgroundImage.style.bottom = `${-moveVertical - 6}px`;
  backgroundImage.style.right = `${-moveHorizontal - 6}px`;
};

window.document.body.onmousemove = (event) => {
  captureMouseOverBodyMovement(event);
};
