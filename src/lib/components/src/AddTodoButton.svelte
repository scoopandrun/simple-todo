<script lang="ts">
  import { displayTodoForm } from "$lib/utils";

  let classProps = "";
  export { classProps as class };
</script>

<button
  type="button"
  class="btn variant-filled-primary {classProps}"
  title="Ajouter une tâche [N]"
  on:click={() => displayTodoForm()}
>
  <slot>Ajouter</slot></button
>
