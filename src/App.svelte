<script>
  import "./app.css";
  import { DarkMode } from "flowbite-svelte";
  import TTSForm from "./lib/TTSForm.svelte";
</script>

<main class="d-flex align-items-center">
  <div class="fixed right-16">
    <DarkMode
      class="bg-primary-500 hover:bg-primary-300 dark:bg-slate-950 text-white"
    />
  </div>
  <TTSForm />
</main>

<style>
  main {
    height: 100vh;
  }
</style>
