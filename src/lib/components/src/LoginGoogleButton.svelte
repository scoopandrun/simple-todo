<script lang="ts">
  import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
  import { auth } from "$lib/firebase";

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  }
</script>

<button type="button" class="btn variant-filled" on:click={signInWithGoogle}>
  <img src="/google-g.svg" alt="Logo Google" class="h-4 mr-3" />
  Se connecter avec Google</button
>

<style></style>
