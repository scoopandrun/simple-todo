<script lang="ts">
  import { SlideToggle } from "@skeletonlabs/skeleton";
  import { disableNetwork, enableNetwork } from "firebase/firestore";
  import { db } from "$lib/firebase";

  let checked = true;

  async function toggleNetwork() {
    if (checked) {
      enableNetwork(db);
    }

    if (!checked) {
      disableNetwork(db);
    }
  }
</script>

<SlideToggle name="slider-label" bind:checked on:change={toggleNetwork}
  >Firestore network</SlideToggle
>
