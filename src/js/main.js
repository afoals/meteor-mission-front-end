// this is triggered every time we receive a new quadrant from the server
const onReceiveMessage = (event) => {
  const quadrantID = event.data;
  console.log(`quadrant: '${quadrantID}'`);

  const crossed = `${quadrantID}-crossed`;
  const active = `${quadrantID}-active`;
  const container = 'app-container';

};

// receive server sent events
const source = new EventSource('//localhost:3000/connect');
source.addEventListener('message', onReceiveMessage);
