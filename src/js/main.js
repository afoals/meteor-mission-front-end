var source = new EventSource('http://localhost:3000/connect');
source.addEventListener('message', function(e) {
  console.log('event received');
});

source.addEventListener('open', function(e) {
  console.log("Connection was opened", e);
});;

source.addEventListener('error', function(e) {
  console.log("ERROR", e);
  if (e.readyState == EventSource.CLOSED) {
    // Connection was closed.
  }
});
