<!--
  @component
  
  Composant entourant les éléments de l'application
  soumis à authentification.

  Usage :
  ```tsx
  <AuthCheck hideOnly?: boolean = false />
  ```
-->
<script lang="ts">
  import { LoginGoogleButton } from "$lib/components";
  import { user } from "$lib/auth";

  /**
   * Si `false`, affiche l'interface de connexion.
   * Si `true`, cache simplement l'UI.
   *
   * @default `false`
   */
  export let hideOnly = false;
</script>

{#if $user}
  <slot />
{:else if !hideOnly}
  <div class="grid justify-center">
    <div class="self-center mt-32">
      <LoginGoogleButton />
    </div>
  </div>
{/if}
