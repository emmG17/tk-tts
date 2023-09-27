import axios from "axios"
const baseUrl = "https://api22-normal-c-useast1a.tiktokv.com/media/api/text/speech/invoke/"

/**
  * Converts text to voice using the TikTok API
  * @param {string} voice 
  * @param {string} text 
  * @param {string} ssid 
  * @returns {Promise}
  * */

async function tts(voice, text, ssid) {
  const params = new URLSearchParams([["text_speaker", voice],["req_text", text],["speaker_map_type", "0"],["aid", "1223"]])
  const url = `${baseUrl}?${params}`
  const ttsService = await axios.post(url, {}, {
    headers: {
      "User-Agent": "com.zhiliaoapp.musically/2022600030 (Linux; U; Android 7.1.2; es_ES; SM-G988N; Build/NRD90M;tt-ok/3.12.13.1)",
      //"Cookie": `sessionid=${ssid}`,
    },
    withCredentials: true
  })
  return ttsService.data
}

export { tts };

