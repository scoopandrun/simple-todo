<script lang="ts">
  import { AppBar, LightSwitch } from "@skeletonlabs/skeleton";

  import {
    AddTodoButton,
    UserCard,
    ToogleFirebaseNetwork,
  } from "$lib/components";
  import { AuthCheck } from "$lib/auth";
</script>

<AppBar
  gridColumns="grid-cols-3"
  slotLead="place-self-start"
  slotTrail="place-content-end"
>
  <svelte:fragment slot="lead">
    <a href="/" title="Accueil">
      <h1 class="h1 flex gap-2 md:gap-4">
        <img
          src="icons/favicon.svg"
          alt="Logo"
          class="logo inline-block w-6 md:w-12"
        />
        Simple Todo
      </h1>
    </a>
  </svelte:fragment>

  <LightSwitch />

  <svelte:fragment slot="trail">
    <AuthCheck hideOnly>
      <!-- <ToogleFirebaseNetwork /> -->
      <AddTodoButton />
      <UserCard />
    </AuthCheck>
  </svelte:fragment>
</AppBar>
