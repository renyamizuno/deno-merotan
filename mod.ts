addEventListener("fetch", (event) => {
  const response = new Response("merotan", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
