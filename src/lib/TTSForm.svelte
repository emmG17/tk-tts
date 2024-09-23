<script>
  import voices from "../tiktok/data";
  import { tts } from "../tiktok/tts.js";
  import Toastify from "toastify-js";
  import { Textarea, Label, Select, Input, Button } from "flowbite-svelte";
  const availableVoices = voices;
  let selectedVoice = voices[0].value;
  let ssid = localStorage.getItem("ssid") ?? "";
  let text = "";
  let loading = false;

  /**
   *
   * @param {Blob} blob
   * @param {string} filename
   */
  function downloadBlob(blob, filename) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = filename;

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  async function textToSpeech() {
    try {
      loading = true;
      const { data, filename } = await tts(selectedVoice, text, ssid);
      downloadBlob(data, filename);
      localStorage.setItem("ssid", ssid);
      loading = false;
    } catch (err) {
      const toast = Toastify({
        text: `Upsi dupsi!: ${err}`,
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
      }).showToast();
      localStorage.removeItem("ssid");
    }
  }
</script>

<div class="container col-6 col-lg-4">
  <h1 class="mb-5 text-center fs-2">Text to speech 🤖</h1>
  <form on:submit|preventDefault={textToSpeech}>
    <div class="mb-3">
      <label for="text-input" class="form-label">Texto</label>
      <Textarea id="text-input" bind:value={text} name="text-input" required />
    </div>
    <div class="mb-4">
      <label for="ssid" class="form-label">ID de sesion</label>
      <Input id="ssid" bind:value={ssid} type="text" name="ssid" required />
    </div>
    <div class="input-group mb-4">
      <Label>
        Voz
        <Select items={availableVoices} bind:value={selectedVoice} />
      </Label>
    </div>
    <Button>
      Convertir <span class={loading ? "d-none" : ""}>💬</span>
      <div
        class={loading ? "spinner-grow spinner-grow-sm" : "d-none"}
      ></div></Button
    >
  </form>
</div>
