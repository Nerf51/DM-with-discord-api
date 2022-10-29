const fetch = require("node-fetch");
async function sendMessage(id) {
  const createDm = await fetch("https://discord.com/api/v9/users/@me/channels", {
    method: "POST",
    body: JSON.stringify({
      "recipient_id": id
    }),
    headers: {
      "Content-Type": "application/json",
      "Authorization": ""// place bot (or user) token
    }
  })
  const finishDm = await createDm.json();
  const fetching = await fetch(`https://discord.com/api/v9/channels/${finishDm.id}/messages`, {
    method: "POST",
    body: JSON.stringify({
      "content": "" // Place the message, or you can create an embed too
    }),
    headers: {
      "Content-Type": "application/json",
      "Authorization": "" // place bot (or user) token
    }
  })
  const finishFetching = await fetching.json();
  // console.log(finishFetching) to view request results
}
sendMessage("") //place here the user id
