<script lang="ts">
  import { TodoListItem } from "$lib/components";
  import { displayTodoForm, todoStore } from "$lib/utils";

  function handleKeydown(e: KeyboardEvent, todo: Todo) {
    // Ouvrir la tâche
    if (["Space", "Enter"].includes(e.key)) {
      displayTodoForm(todo);
    }

    // Supprimer la tâche
    if (["Delete"].includes(e.key)) {
      todoStore.remove(todo.id);
    }
  }
</script>

<div class="m-2 md:m-5" />
{#each [...$todoStore.values()] as todo (todo.id)}
  <TodoListItem
    {todo}
    on:click={() => displayTodoForm(todo)}
    on:keydown={(e) => handleKeydown(e, todo)}
  />
{:else}
  <div class="grid self-center justify-center h-36 p-24">
    <button
      type="button"
      class="btn variant-filled"
      title="Ajouter une tâche"
      on:click={() => displayTodoForm()}
    >
      Ajouter une tâche
    </button>
  </div>
{/each}

<style></style>
