<script>
  import voices from '../tiktok/data'; 
  const availableVoices = voices
  function textToSpeech(){
    alert("Converting");
  }
</script>



<div class="container col-6 col-lg-4">
  <h1 class="mb-5 text-center fs-2">Text to speech 🤖</h1>
  <form>
    <div class="mb-3">
      <label for="text-input" class="form-label">Texto</label>
      <input id="text-input" class="form-control" type="text" name="text-input"/>
    </div>
    <div class="mb-4">
      <label for="ssid" class="form-label">ID de sesion</label>
      <input id="ssid" class="form-control" type="text" name="ssid"/>
    </div>
    <div class="input-group mb-4">
      <label for="available-voices" class="input-group-text">Voz</label>
      <select name="available-voices" id="available-voices" class="form-select">
        {#each availableVoices as voice }
          <option value={voice.value}>{voice.name}</option> 
        {/each}
      </select>
    </div>
    <button class="btn btn-primary" on:click|preventDefault={textToSpeech}>Convertir 💬</button>
  </form>
</div>

