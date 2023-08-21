import { writable } from "svelte/store";

type Activity = {
  readonly name: "todoForm" | "userCard";
  properties: {
    active: boolean;
    readonly allowNewTodoWithKeyboard: boolean;
  };
};

const initial = new Map<Activity["name"], Activity["properties"]>([
  [
    "todoForm",
    {
      active: false,
      allowNewTodoWithKeyboard: false,
    },
  ],
  [
    "userCard",
    {
      active: false,
      allowNewTodoWithKeyboard: true,
    },
  ],
]);

let current = initial;

const { subscribe, update, set } = writable<typeof initial>(initial);

function _setActiveorInactive(
  activity: Activity["name"],
  activeOrInactive: Activity["properties"]["active"]
) {
  update((activities) => {
    if (activities.has(activity)) {
      const { allowNewTodoWithKeyboard } = activities.get(
        activity
      ) as Activity["properties"];
      activities.set(activity, {
        active: activeOrInactive,
        allowNewTodoWithKeyboard,
      });
    }

    return (current = activities);
  });

  // console.log({ current });
}

function setActive(activity: Activity["name"]) {
  _setActiveorInactive(activity, true);
}

function setInactive(activity: Activity["name"]) {
  _setActiveorInactive(activity, false);
}

function canCreateNewTodoWithKeyboard() {
  let canCreateNewTodo = true;

  [...current.values()].forEach(({ active, allowNewTodoWithKeyboard }) => {
    if (active && allowNewTodoWithKeyboard === false) {
      canCreateNewTodo = false;
    }
  });

  return canCreateNewTodo;
}

export const ongoingActivities = {
  subscribe,
  setActive,
  setInactive,
  canCreateNewTodoWithKeyboard,
};
