<script lang="ts">
  import {
    AddTodoButton,
    UserCard,
    ToogleFirebaseNetwork,
  } from "$lib/components";
  import { displayTodoForm } from "$lib/utils";
</script>

<!-- <ToogleFirebaseNetwork /> -->

<AddTodoButton on:click={() => displayTodoForm()} />

<UserCard />

<style>
</style>
