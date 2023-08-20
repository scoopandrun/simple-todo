<script lang="ts">
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  import {
    modalStore,
    type ModalSettings,
    type ModalComponent,
  } from "@skeletonlabs/skeleton";

  import { displayTodoForm, todoStore } from "$lib/utils";
  import { ConfirmModal } from "$lib/components";

  export let parent: any;

  export let todo: Todo;

  const _todo = {
    ...todoStore.new(),
    ...todo,
  };

  async function saveTodo() {
    todoStore.save(_todo);
    modalStore.close();
    if ($page.url.pathname !== "/") {
      try {
        await goto("/");
      } catch (error: unknown) {
        console.error("Redirection après validation todo", error);
      }
    }
  }

  function deleteTodo() {
    const confirmModalComponent: ModalComponent = {
      ref: ConfirmModal,
      props: {
        title: "Supprimer la tâche",
        onConfirm: () => {
          todoStore.remove(todo.id);
          modalStore.clear();
        },
        onCancel: () => {
          modalStore.close();
          displayTodoForm(_todo);
        },
      },
      slot: "<p>Confirmez-vous la suppression de la tâche ?</p>",
    };

    const confirmModal: ModalSettings = {
      type: "component",
      component: confirmModalComponent,
    };

    modalStore.close();
    modalStore.trigger(confirmModal);
  }
</script>

<div class="card p-4 w-modal shadow-xl space-y-4">
  <form class="border border-surface-500 p-4 space-y-4 rounded-container-token">
    <label class="label">
      <span>Titre</span>
      <input type="text" name="title" class="input" bind:value={_todo.title} />
    </label>

    <label class="label">
      <span
        >Détails <img
          src="/markdown.svg"
          alt="Logo Markdown"
          title="Syntaxe Markdown disponible"
          class="inline-block h-4"
        /></span
      >
      <textarea
        name="details"
        class="textarea"
        rows="4"
        bind:value={_todo.details}
      />
    </label>

    <div class="grid grid-cols-2">
      <div class="place-self-start">
        <label class="label">
          <span>Terminé</span>
          <input
            type="checkbox"
            name="completed"
            class="checkbox"
            bind:checked={_todo.completed}
          />
        </label>
      </div>

      <div class="place-self-end">
        <input
          type="color"
          name="color"
          class="input"
          bind:value={_todo.color}
        />
      </div>
    </div>
  </form>

  <footer class="modal-footer {parent.regionFooter}">
    {#if _todo.id}
      <button class="btn variant-filled-error" on:click={deleteTodo}
        >Supprimer</button
      >
    {/if}
    <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}
      >Annuler</button
    >
    <button class="btn {parent.buttonPositive}" on:click={saveTodo}
      >Valider</button
    >
  </footer>
</div>

<style></style>
