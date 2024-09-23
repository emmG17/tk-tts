<script>
  import voices from "../tiktok/data";
  import { tts } from "../tiktok/tts.js";
  import logo from "../assets/logo-color.svg";
  import Toastify from "toastify-js";
  import { Textarea, Label, Select, Input, Button, Spinner } from "flowbite-svelte";
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

<div class="flex flex-col items-center">
  <div class="flex flex-col items-center">
    <img class="w-36" src={logo}/>
    <h1 class="mb-12 text-center brand-title silkscreen-regular text-primary-700 dark:text-slate-200">Text to speech</h1>
  </div>
  <form class="w-2/3" on:submit|preventDefault={textToSpeech}>
    <div class="mb-3">
      <Label class="text-lg">
        Texto
        <Textarea id="text-input" bind:value={text} name="text-input" required />
      </Label>
    </div>
    <div class="mb-4">
      <Label class="text-lg">
        ID de sesión <
        <Input id="ssid" bind:value={ssid} type="password" name="ssid" required />
      </Label>
    </div>
    <div class="input-group mb-8">
      <Label class="text-lg">
        Voz
        <Select items={availableVoices} bind:value={selectedVoice} />
      </Label>
    </div>
    <Button type="submit" class="w-36 h-12">
      {#if loading}
        <Spinner size="6" color="white"/>
      {:else}
        <span class="text-lg">Convertir</span>
      {/if}
      </Button
    >
  </form>
</div>
