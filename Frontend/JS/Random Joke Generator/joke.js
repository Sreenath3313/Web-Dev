 // Button event
    document.getElementById("jokeBtn").addEventListener("click", () => {
      
      let url = "https://official-joke-api.appspot.com/random_joke";

      fetch(url)
        .then(res => res.json())
        .then(data => {
          document.getElementById("jokeBox").innerHTML = `
            <p><strong>Setup:</strong> ${data.setup}</p>
            <p><strong>Punchline:</strong> ${data.punchline}</p>
          `;
        })
        .catch(err => {
          document.getElementById("jokeBox").innerHTML = "⚠️ Couldn't fetch a joke, try again!";
        });
    });