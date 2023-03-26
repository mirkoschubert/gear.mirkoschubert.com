<script lang="ts">
  import type { ProductType } from '$lib/types';
  import { ProductList, ProductListMeta, Section } from '$lib/components';

  export let data: {
    sleep: ProductType[]
  };
</script>

<main>
  <Section>
    <ProductListMeta title="Sleep" data={data.sleep} />
    <ProductList data={data.sleep} />
  </Section>
</main>