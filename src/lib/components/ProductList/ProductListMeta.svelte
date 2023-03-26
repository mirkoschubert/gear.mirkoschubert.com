<script lang="ts">
  import type { ProductType } from '$lib/types';

  export let title: string;
  export let data: ProductType[];

  let count: number = data.length;
  var price: number = 0;
  var weight: number = 0;

  $: data.forEach((item) => {
    price = item.price ? price + item.price : price;
    weight = item.weight ? weight + item.weight : weight;
  })
</script>

<div class="products-meta">
  <h1>{title} <span class="count">({count})</span></h1>
  <div class="details">
    <div class="price">{price.toFixed(2)}€</div>
    <div class="weight">{weight}g</div>
  </div>
</div>