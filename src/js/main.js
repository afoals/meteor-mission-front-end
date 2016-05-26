// this is triggered every time we receive a new quadrant from the server

const appContainer = document.getElementsByClassName('app-container')[0];

// remove active classes
const removeActive = (container) => {
  container.classList.forEach(className => {
    className.endsWith('active') && container.classList.remove(className);
  });
}

const markAsDone = () => {
  const classes = appContainer.classList;
  for (let i = 0; i < classes.length; i++) {
    const currClass = classes[i];
    if (currClass.endsWith('active')) {
      // add
      var crossed = currClass.split("-")[0]+"-crossed";
      classes.add(crossed);
    }
  }
};

const onReceiveMessage = (event) => {
  const quadrantID = event.data;
  console.log(`quadrant: '${quadrantID}'`);

  removeActive(appContainer);

  const crossed = `${quadrantID}-crossed`;
  const container = 'app-container';

  // add the active class
  appContainer.classList.add(`${quadrantID}-active`);

};

// receive server sent events
const source = new EventSource('//meteor-app-hack.herokuapp.com/connect');
source.addEventListener('message', onReceiveMessage);
