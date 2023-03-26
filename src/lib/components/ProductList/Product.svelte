<script lang="ts">
  import type { ProductType } from '$lib/types';

  export let data: ProductType;
</script>

<div class="product">
  {#if data.image !== ''}
    <img class="product-image" src={data.image} alt={data.name} loading="lazy" />
  {/if}
  <a class="overlay" href={data.url} title={data.name} rel="noreferrer noopener" target="_blank" aria-disabled={data.url === ''}>
      <h3 class="product-title">{data.name}</h3>
      <p class="product-description">{data.description}</p>
      <div class="details">
        {#if data.weight}
          <div class="weight">{data.weight}g</div>
        {/if}
        {#if data.price}
          <div class="price">{data.price.toFixed(2)}€</div>
        {/if}
        {#if data.size && data.size.width !== 0 && data.size.height !== 0 }
          <div class="size">{data.size.width}x{data.size.height}{#if data.size.depth && data.size.depth !== 0}x{data.size.depth}{/if}cm</div>
        {/if}
      </div>
  </a>
</div>