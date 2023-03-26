<script lang="ts">
  import type { ProductType } from '$lib/types';
  import { ProductList, ProductListMeta, Section } from '$lib/components';

  export let data: {
    essentials: ProductType[]
  };
</script>

<main>
  <Section>
    <ProductListMeta title="Essentials" data={data.essentials} />
    <ProductList data={data.essentials} />
  </Section>
</main>