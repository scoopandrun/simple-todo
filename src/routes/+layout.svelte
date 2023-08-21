<script lang="ts">
  // Your selected Skeleton theme:
  // import "@skeletonlabs/skeleton/themes/theme-skeleton.css";
  import "@skeletonlabs/skeleton/themes/theme-modern.css";

  // This contains the bulk of Skeletons required styles:
  import "@skeletonlabs/skeleton/styles/skeleton.css";

  // Finally, your application's global stylesheet (sometimes labeled 'app.css')
  import "../app.postcss";

  import { AppShell, Modal, Toast, storePopup } from "@skeletonlabs/skeleton";
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
