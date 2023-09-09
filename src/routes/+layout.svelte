<script lang="ts">
  import "../app.postcss";

  import {
    AppShell,
    Modal,
    Toast,
    storePopup,
    initializeStores,
  } from "@skeletonlabs/skeleton";
  import {
    computePosition,
    autoUpdate,
    offset,
    shift,
    flip,
    arrow,
  } from "@floating-ui/dom";

  import { Header } from "$lib/components";
  import { AuthCheck } from "$lib/auth";

  initializeStores();

  // Popup (utilisé pour la carte utilisateur)
  storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<Modal />
<Toast />

<AppShell>
  <svelte:fragment slot="header">
    <Header />
  </svelte:fragment>

  <AuthCheck>
    <slot />
  </AuthCheck>
</AppShell>
