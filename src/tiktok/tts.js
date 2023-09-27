import axios from "axios";
const baseUrl = `${import.meta.env.VITE_API_URL}/api`;
/**
  * Converts text to voice using the TikTok API
  * @param {string} voice 
  * @param {string} text 
  * @param {string} ssid 
  * @returns {Promise}
  * */

async function tts(voice, text, ssid) {
  const res = await axios.post(baseUrl, {voice, text, sessionId: ssid}, { responseType: "blob"}); 
  const filename = `${voice}_${Date.now().toString()}.mp3`;
  return { data: res.data, filename }
}

export { tts };

