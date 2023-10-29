<script>
	//import '../app.postcss';
	import '$src/app.postcss';
</script>

<nav>
	<a href="/" class="mx-auto"><h1 class="nav__title">Dr. Lovász Sándor Ph.D.</h1></a>
</nav>
<main class="mt-12 p-12 mx-auto">
	<slot />
</main>
<footer class="flex flex-row">
	<p class="mx-auto w-max">
		Made with <svg
			data-sanity-icon="heart-filled"
			width="1em"
			height="1em"
			viewBox="0 0 25 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			><path
				d="M17 16C15.8 17.3235 12.5 20.5 12.5 20.5C12.5 20.5 9.2 17.3235 8 16C5.2 12.9118 4.5 11.7059 4.5 9.5C4.5 7.29412 6.1 5.5 8.5 5.5C10.5 5.5 11.7 6.82353 12.5 8.14706C13.3 6.82353 14.5 5.5 16.5 5.5C18.9 5.5 20.5 7.29412 20.5 9.5C20.5 11.7059 19.8 12.9118 17 16Z"
				fill="currentColor"
				stroke="currentColor"
				stroke-width="1.2"
			/></svg
		>&nbsp;at&nbsp;<a href="https://www.urosystem.com/hu">UroSystem</a>
	</p>
</footer>

<style>
  nav {
    @apply h-12 items-center;
  }
  
  main {
    @apply mt-12 p-12;
  }
  @media only screen and (max-width: 104ch) {
    main {
      padding-inline: 6rem;
    }
  }

  footer > p {
    @apply w-max;
  }
  
  svg {
    display: inline-block;
  }
</style>