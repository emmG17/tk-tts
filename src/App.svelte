<script>
  import "./app.css";
  import { DarkMode, Banner } from "flowbite-svelte";
  import TTSForm from "./lib/TTSForm.svelte";
  import BottomBanner from "./lib/BottomBanner.svelte";
</script>

<main class="flex">
  <div class="fixed md:right-16 md:top-16 right-4 top-4">
    <DarkMode
      class="bg-primary-700 hover:bg-primary-300 dark:bg-slate-950 text-white"
    />
  </div>
  <div>
    <TTSForm />
  </div>
  <BottomBanner/>
</main>
