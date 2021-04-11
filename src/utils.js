import { MessageApi } from './constants';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

const sendMessage = async (message) => {
  try {
    const response = await fetch(MessageApi, {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        "content-type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({ message })
    });

    if (response) {

      debugger;
      if (response.ok) {
        return response.json()
      }
    }

    // throw new Error('send message error')
  }
  catch (err) {
    console.log(err)
    throw err;
  }
}

export {
  scrollToTop,
  sendMessage
}