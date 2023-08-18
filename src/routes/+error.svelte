<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  onMount(() => {
    if ($page.status === 404) {
      goto("/");
    }
  });
</script>

<h1>{$page.status}: {$page.error?.message}</h1>
