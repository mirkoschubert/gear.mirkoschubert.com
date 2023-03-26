<script lang="ts">
  import type { ProductType } from '$lib/types';
  import Product from './Product.svelte';

  export let data: ProductType[];
</script>

<div class="product-list">
  {#each data as item}
    <Product data={item} />
  {/each}
</div>