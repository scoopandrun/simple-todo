<script lang="ts">
  import { SlideToggle } from "@skeletonlabs/skeleton";
  import { disableNetwork, enableNetwork } from "firebase/firestore";
  import { firestore } from "$lib/firebase";

  let checked = true;

  async function toggleNetwork() {
    if (checked) {
      enableNetwork(firestore);
    }

    if (!checked) {
      disableNetwork(firestore);
    }
  }
</script>

<SlideToggle name="slider-label" bind:checked on:change={toggleNetwork}
  >Firestore network</SlideToggle
>
