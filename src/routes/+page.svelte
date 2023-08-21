<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { TodoListItem, AddTodoButton } from "$lib/components";
  import { displayTodoForm, todoStore, ongoingActivities } from "$lib/utils";

  function handleKeydown(e: KeyboardEvent, todo: Todo) {
    console.debug(e.key);

    // Ouvrir la tâche
    if ([" " /* Spacebar */, "Spacebar", "Enter"].includes(e.key)) {
      e.preventDefault();
      displayTodoForm(todo);
    }

    // Supprimer la tâche
    if (["Delete"].includes(e.key)) {
      todoStore.remove(todo.id);
    }
  }

  function createTodoWithKeyboard(e: KeyboardEvent) {
    if (
      ["n", "N"].includes(e.key) &&
      ongoingActivities.canCreateNewTodoWithKeyboard()
    ) {
      e.preventDefault();
      displayTodoForm();
    }
  }

  onMount(() => {
    document.addEventListener("keydown", createTodoWithKeyboard);
  });

  onDestroy(() => {
    document.removeEventListener("keydown", createTodoWithKeyboard);
  });
</script>

<div class="grid gap-2 m-2 md:m-5">
  {#each [...$todoStore.values()] as todo (todo.id)}
    <TodoListItem
      {todo}
      on:click={() => displayTodoForm(todo)}
      on:keydown={(e) => handleKeydown(e, todo)}
    />
  {:else}
    <AddTodoButton class="justify-self-center">Ajouter une tâche</AddTodoButton>
  {/each}
</div>

<style></style>
