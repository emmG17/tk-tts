<script>
  import voices from '../tiktok/data'; 
  import { tts } from '../tiktok/tts.js';
  import Toastify from 'toastify-js';
  const availableVoices = voices
  let selectedVoice = voices[0].value
  let ssid = localStorage.getItem('ssid') ?? ''
  let text = ''
 
  /**
   * 
   * @param {Blob} blob
   * @param {string} filename
   */
  function downloadBlob(blob, filename){
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = filename;

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  async function textToSpeech(){
    try {
      const { data, filename } = await tts(selectedVoice, text, ssid);
      downloadBlob(data, filename);
      localStorage.setItem('ssid', ssid)
    } catch(err) {
       Toastify({
        text: `Upsi dupsi!: ${err}`,
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
      }).showToast();
      localStorage.removeItem('ssid');
    }
  }
</script>



<div class="container col-6 col-lg-4">
  <h1 class="mb-5 text-center fs-2">Text to speech 🤖</h1>
  <form on:submit|preventDefault={textToSpeech}>
    <div class="mb-3">
      <label for="text-input" class="form-label">Texto</label>
      <textarea id="text-input" bind:value={text} class="form-control" name="text-input" required/>
    </div>
    <div class="mb-4">
      <label for="ssid" class="form-label">ID de sesion</label>
      <input id="ssid" bind:value={ssid} class="form-control" type="text" name="ssid" required/>
    </div>
    <div class="input-group mb-4">
      <label for="available-voices" class="input-group-text">Voz</label>
      <select name="available-voices" bind:value={selectedVoice} id="available-voices" class="form-select" required>
        {#each availableVoices as voice }
          <option value={voice.value}>{voice.name}</option> 
        {/each}
      </select>
    </div>
    <button type="submit" class="btn btn-primary"> Convertir 💬</button>
  </form>
</div>

