<script lang="ts">
  import { signOut as firebaseSignOut } from "firebase/auth";

  import { Avatar } from "@skeletonlabs/skeleton";

  import { auth } from "$lib/firebase";
  import { user } from "$lib/auth";
  import { AddTodoButton, ToogleFirebaseNetwork } from "$lib/components";
  import { displayTodoForm, todoStore } from "$lib/utils";

  function signOut() {
    firebaseSignOut(auth);
    todoStore.clearLocal();
  }

  $: userIconTitle = $user?.displayName
    ? `${$user.displayName} (${$user?.email})`
    : $user?.email;
</script>

<!-- <ToogleFirebaseNetwork /> -->

{#if $user}
  <AddTodoButton on:click={() => displayTodoForm()} />

  <a href="/user" title={userIconTitle || "Profil"}>
    {#if $user.photoURL}
      <Avatar src={$user.photoURL} width="w-10" rounded="rounded-full" />
    {:else}
      <span class="material-symbols-outlined"> person </span>
    {/if}
  </a>

  <button type="button" on:click={signOut} title="Se déconnecter">
    <span class="material-symbols-outlined"> logout </span>
  </button>
{/if}

<style>
</style>
