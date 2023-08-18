<script lang="ts">
  import { user } from "$lib/auth";
</script>

<h2 class="h2 m-5 ml-0">User page</h2>

<div class="card p-4 variant-filled">
  <p>Nom : {$user?.displayName ?? ""}</p>
  <p>E-mail : {$user?.email}</p>
</div>
