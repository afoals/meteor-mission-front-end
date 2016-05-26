// this is triggered every time we receive a new quadrant from the server
const onReceiveMessage = (event) => {
  const quadrant = event.data;
  console.log(`quadrant: '${quadrant}'`);
};

// receive server sent events
const source = new EventSource('//localhost:3000/connect');
source.addEventListener('message', onReceiveMessage);
