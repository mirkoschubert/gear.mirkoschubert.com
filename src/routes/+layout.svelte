<script lang="ts">
  import { Header, Navigation } from '$lib/components'
  import "$lib/stylus/global.styl"
</script>

<main>
  <Header>
    <Navigation />
  </Header>
  <slot />
</main>