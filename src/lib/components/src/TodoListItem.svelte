<script lang="ts">
  import { marked } from "marked";

  import { luminance } from "$lib/utils";

  export let todo: Todo;
</script>

<div
  class="p-2 rounded text-left shadow-lg"
  style:background-color={todo.color ?? "#ffffff"}
  style:color={luminance.getTextColor(todo.color ?? "#ffffff")}
  class:completed={todo.completed}
  on:click
  on:keydown
  role="button"
  tabindex="0"
>
  <p class="font-bold text-lg">{todo.title ?? "<Sans titre>"}</p>

  {#if todo.details}
    <p>{@html marked.parse(todo.details)}</p>
  {/if}
</div>

<style>
  .completed {
    opacity: 0.3;
  }
</style>
