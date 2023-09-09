<script lang="ts">
  import { DisplayTodoForm } from "$lib/components";

  let classProps = "";
  export { classProps as class };
</script>

<DisplayTodoForm>
  <svelte:fragment let:displayTodoForm>
    <button
      type="button"
      class="btn variant-filled-primary {classProps}"
      title="Ajouter une tâche [N]"
      on:click={() => displayTodoForm()}
    >
      <slot>Ajouter</slot></button
    >
  </svelte:fragment>
</DisplayTodoForm>
