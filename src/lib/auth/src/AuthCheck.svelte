<script lang="ts">
  import { LoginGoogleButton } from "$lib/components";
  import { user } from "$lib/auth";
</script>

{#if $user}
  <slot />
{:else}
  <div class="grid justify-center">
    <div class="self-center mt-32">
      <LoginGoogleButton />
    </div>
  </div>
{/if}
