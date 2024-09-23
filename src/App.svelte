<script>
  import "./app.css";
  import { DarkMode } from "flowbite-svelte";
  import TTSForm from "./lib/TTSForm.svelte";
</script>

<main class="flex">
  <div class="fixed right-16 top-16">
    <DarkMode
      class="bg-primary-700 hover:bg-primary-300 dark:bg-slate-950 text-white"
    />
  </div>
  <div>
    <TTSForm />
  </div>
</main>
