import {
  modalStore,
  type ModalSettings,
  type ModalComponent,
} from "@skeletonlabs/skeleton";

import { TodoForm } from "$lib/components";
import { todoStore } from "./todoStore";

export function displayTodoForm(todo = todoStore.new()) {
  const todoFormModalComponent: ModalComponent = {
    ref: TodoForm,
    props: { todo },
  };

  const todoFormModal: ModalSettings = {
    type: "component",
    component: todoFormModalComponent,
  };
  modalStore.trigger(todoFormModal);
}
