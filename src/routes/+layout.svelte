<script lang="ts">
  // Your selected Skeleton theme:
  import "@skeletonlabs/skeleton/themes/theme-skeleton.css";

  // This contains the bulk of Skeletons required styles:
  import "@skeletonlabs/skeleton/styles/skeleton.css";

  // Finally, your application's global stylesheet (sometimes labeled 'app.css')
  import "../app.postcss";

  import { AppShell, AppBar, Modal, Toast } from "@skeletonlabs/skeleton";

  import { AppBarActions } from "$lib/components";
  import { AuthCheck } from "$lib/auth";
</script>

<Modal />
<Toast />

<AppShell>
  <svelte:fragment slot="header">
    <AppBar
      gridColumns="grid-cols-2"
      slotDefault="place-self-start"
      slotTrail="place-content-end"
    >
      <a href="/" title="Accueil">
        <h1 class="h1">Simple Todo</h1>
      </a>

      <svelte:fragment slot="trail">
        <AppBarActions />
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>

  <AuthCheck>
    <slot />
  </AuthCheck>
</AppShell>
