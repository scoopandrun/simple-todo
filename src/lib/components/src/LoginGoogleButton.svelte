<script lang="ts">
  import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
  import type { FirebaseError } from "firebase/app";
  import { auth } from "$lib/firebase";
  import { toastStore, type ToastSettings } from "@skeletonlabs/skeleton";

  async function signInWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (err: unknown) {
      const error = err as Error;

      console.error({ error });

      let errorMessage = error.message;

      if (error.name === "FirebaseError") {
        errorMessage = extractFirebaseErrorInfo(error as FirebaseError);
      }

      const signInErrorToastSettings: ToastSettings = {
        message: errorMessage,
        timeout: 5000,
      };

      toastStore.trigger(signInErrorToastSettings);
    }
  }

  function extractFirebaseErrorInfo(error: FirebaseError) {
    type DeepMessage = {
      error: {
        message: string;
        status: string;
      };
    };

    try {
      const deepMessage = error.message.substring(
        error.message.indexOf("{"),
        error.message.lastIndexOf("}") + 1
      );
      const deepMessageObject = JSON.parse(deepMessage) as DeepMessage;
      const extractedMessage = deepMessageObject.error.message;

      return extractedMessage;
    } catch {
      return "Internal error";
    }
  }
</script>

<button type="button" class="btn variant-filled" on:click={signInWithGoogle}>
  <img src="/google-g.svg" alt="Logo Google" class="h-4 mr-3" />
  Se connecter avec Google</button
>

<style></style>
