<script lang="ts">
  // Your selected Skeleton theme:
  import "@skeletonlabs/skeleton/themes/theme-skeleton.css";

  // This contains the bulk of Skeletons required styles:
  import "@skeletonlabs/skeleton/styles/skeleton.css";

  // Finally, your application's global stylesheet (sometimes labeled 'app.css')
  import "../app.postcss";

  import {
    AppShell,
    AppBar,
    Modal,
    Toast,
    storePopup,
  } from "@skeletonlabs/skeleton";
  import {
    computePosition,
    autoUpdate,
    offset,
    shift,
    flip,
    arrow,
  } from "@floating-ui/dom";

  import { AppBarActions } from "$lib/components";
  import { AuthCheck, user } from "$lib/auth";

  // Popup (utilisé pour la carte utilisateur)
  storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<svelte:head>
  <title>Simple Todo</title>
</svelte:head>

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
        <AuthCheck hideOnly>
          <AppBarActions />
        </AuthCheck>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>

  <AuthCheck>
    <slot />
  </AuthCheck>
</AppShell>
