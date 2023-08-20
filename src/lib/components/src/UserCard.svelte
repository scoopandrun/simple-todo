<script lang="ts">
  import { signOut as firebaseSignOut } from "firebase/auth";

  import { Avatar, popup, type PopupSettings } from "@skeletonlabs/skeleton";

  import { auth } from "$lib/firebase";
  import { user } from "$lib/auth";
  import { todoStore } from "$lib/utils";

  const popupUserCard: PopupSettings = {
    event: "click",
    target: "userCard",
    placement: "bottom",
  };

  function signOut() {
    firebaseSignOut(auth);
    todoStore.clearLocal();
  }
</script>

{#if $user}
  <button type="button" use:popup={popupUserCard}>
    {#if $user.photoURL}
      <Avatar src={$user.photoURL} width="w-10" />
    {:else}
      <span class="material-symbols-outlined" style:font-size="36px">
        account_circle
      </span>
    {/if}
  </button>

  <div class="card p-4 w-72 shadow-xl" data-popup="userCard">
    <div class="space-y-4">
      {#if $user.photoURL}
        <Avatar src={$user.photoURL} width="w-16" />
      {:else}
        <span class="material-symbols-outlined" style:font-size="60px">
          account_circle
        </span>
      {/if}

      <div>
        <p class="font-bold">{$user.displayName}</p>
        <p class="opacity-50">{$user.email}</p>
      </div>

      <button
        type="button"
        class="btn variant-soft w-full"
        on:click={signOut}
        title="Se déconnecter"
      >
        Se déconnecter
      </button>
    </div>

    <div class="arrow bg-surface-100-800-token" />
  </div>
{/if}

<style></style>
