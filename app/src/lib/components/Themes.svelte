<script>
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'
  // NOTE: the element that is using one of the theme attributes must be in the DOM on mount
  onMount(() => {
    themeChange(false)
    // 👆 false parameter is required for svelte
  })

  let font = false, gradient = true, square = false
  
</script>

<svelte:head>
  {#if font}
    <link rel="preconnect"
      href="https://fonts.gstatic.com"
      crossorigin />
    <link rel="preload"
      as="style"
      href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" />
    <link rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
      media="print" onload="this.media='all'" />

    <style>
      :root {
        font-family: 'Josefin Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding-top: 0.25rem;
      }
      article p, article ul, article ol, article dl, article table, footer + aside p {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      }
    </style>
  {/if}

  {#if gradient}
    <style>
      :root[data-theme='kriszta'] {
        background-image: linear-gradient(to top, #c4b4a6 0%, #ece7e3 100%);
      }
      :root[data-theme='drlovasz'] {
        background-image: linear-gradient(to top, #c4b4a6 0%, #ece7e3 100%);
      }
      :root[data-theme='business'] {
        /*background-image: linear-gradient(to right, #434343 0%, black 100%);*/
        background-image: linear-gradient(75deg, oklch(var(--b3)), #23282e);
      }
      :root[data-theme='blueish'] {
        /*background-image: linear-gradient(to right, #fff1eb 0%, #ace0f9 100%);*/
        background-image: linear-gradient(75deg, #fff1eb, #ace0f9);
      }
      /*article p, article ul, article ol, article dl, article table, footer + aside p {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      }*/
    </style>
  {/if}
  {#if square}
    <style>
      :root *, .card {
        --rounded-box: 0;
      }
      .rounded {
        border-radius: 0;
      }
      /*article p, article ul, article ol, article dl, article table, footer + aside p {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      }*/
    </style>
  {/if}
  <style>
    .josefin {
      font-family: 'Josefin Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    .system {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
  </style>
</svelte:head>
<div class="drawer drawer-end">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <!-- Page content here -->
    <label for="my-drawer" class="btn btn-primary btn-circle drawer-button w-16 h-16 m-3">
      <svg class="h-12 w-12" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100">
        <path fill="#abaad5" d="M85,50.149l-1.725,1.725h-8.694c0.052-0.569,0.069-1.139,0.069-1.725 c0-13.334-10.816-24.15-24.15-24.15c-0.587,0-1.156,0.017-1.725,0.069v-8.694l1.725-1.725c9.522,0,18.147,3.864,24.392,10.108 C81.619,32.485,85,41.317,85,50.149z"></path><path fill="#ee5490" d="M85,50.149c0,9.522-3.864,18.147-10.108,24.392c-6.728,6.727-15.56,10.108-24.392,10.108 l-1.725-1.725V74.23c0.569,0.052,1.138,0.069,1.725,0.069c12.748,0,23.201-9.901,24.081-22.425 c0.052-0.569,0.069-1.139,0.069-1.725H85z"></path><path fill="#31c4f3" d="M50.5,74.299v10.35c-9.522,0-18.147-3.864-24.392-10.108C19.364,67.813,16,58.981,16,50.149 l1.725-1.725h8.694c-0.052,0.569-0.069,1.138-0.069,1.725c0,12.748,9.901,23.201,22.425,24.081 C49.344,74.282,49.913,74.299,50.5,74.299z"></path><path fill="#f9e65c" d="M50.5,15.649v10.35c-0.587,0-1.156,0.017-1.725,0.069C36.821,26.913,27.264,36.47,26.419,48.424 c-0.052,0.569-0.069,1.138-0.069,1.725H16c0-9.522,3.864-18.147,10.108-24.392C32.836,19.013,41.668,15.649,50.5,15.649z"></path><path fill="#1f212b" d="M50.5,85.649c-19.575,0-35.5-15.925-35.5-35.5s15.925-35.5,35.5-35.5S86,30.574,86,50.149 S70.075,85.649,50.5,85.649z M50.5,16.649c-18.472,0-33.5,15.028-33.5,33.5s15.028,33.5,33.5,33.5S84,68.621,84,50.149 S68.972,16.649,50.5,16.649z"></path><path fill="#1f212b" d="M68.5,26.649c-0.105,0-0.211-0.033-0.301-0.101c-0.321-0.242-0.65-0.474-0.983-0.703 c-0.227-0.157-0.284-0.468-0.128-0.695c0.158-0.229,0.469-0.284,0.696-0.128c0.343,0.237,0.684,0.477,1.017,0.728 c0.221,0.166,0.265,0.479,0.099,0.7C68.802,26.58,68.651,26.649,68.5,26.649z"></path><path fill="#1f212b" d="M65.5,24.672c-0.085,0-0.172-0.021-0.25-0.067c-0.718-0.415-1.361-0.758-1.967-1.05 c-0.249-0.12-0.354-0.419-0.233-0.667c0.12-0.25,0.419-0.353,0.667-0.234c0.629,0.303,1.294,0.658,2.033,1.086 c0.239,0.138,0.321,0.444,0.183,0.683C65.84,24.583,65.672,24.672,65.5,24.672z"></path><path fill="#1f212b" d="M50.5,25.649c-13.531,0-24.5,10.969-24.5,24.5s10.969,24.5,24.5,24.5S75,63.68,75,50.149 S64.031,25.649,50.5,25.649z M50.5,72.649c-12.426,0-22.5-10.074-22.5-22.5s10.074-22.5,22.5-22.5S73,37.722,73,50.149 S62.926,72.649,50.5,72.649z"></path><line x1="16" x2="27" y1="50.649" y2="50.649" fill="none" stroke="#1f212b" stroke-miterlimit="10" stroke-width="2"></line><line x1="74" x2="85" y1="50.649" y2="50.649" fill="none" stroke="#1f212b" stroke-miterlimit="10" stroke-width="2"></line><line x1="50.5" x2="50.5" y1="16.149" y2="27.149" fill="none" stroke="#1f212b" stroke-miterlimit="10" stroke-width="2"></line><line x1="50.5" x2="50.5" y1="74.149" y2="85.149" fill="none" stroke="#1f212b" stroke-miterlimit="10" stroke-width="2"></line><path fill="none" stroke="#1f212b" stroke-linecap="round" stroke-miterlimit="10" d="M53.5,20.297 c2.43,0.241,4.775,0.773,7,1.559"></path><path fill="none" stroke="#1f212b" stroke-linecap="round" stroke-miterlimit="10" d="M41.5,78.775 c-2.298-0.722-4.477-1.713-6.5-2.936"></path><path fill="none" stroke="#1f212b" stroke-linecap="round" stroke-miterlimit="10" d="M47.5,80.001 c-0.673-0.067-1.34-0.156-2-0.267"></path><path fill="none" stroke="#1f212b" stroke-linecap="round" stroke-miterlimit="10" d="M68.502,74.149 c-4.263,3.203-9.406,5.296-15.002,5.852"></path><path fill="none" stroke="#1f212b" stroke-linecap="round" stroke-miterlimit="10" d="M72.5,70.545 c-0.514,0.555-1.05,1.09-1.604,1.604"></path><path fill="none" stroke="#1f212b" stroke-linecap="round" stroke-miterlimit="10" d="M76.5,65.125 c-0.606,1.05-1.274,2.059-1.998,3.024"></path><path fill="none" stroke="#1f212b" stroke-linecap="round" stroke-miterlimit="10" d="M71,28.246 c5.392,5.048,8.918,12.065,9.434,19.903"></path>
      </svg>
    </label>
  </div> 
  <div class="drawer-side pt-16">
    <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
    <!-- Sidebar content here -->
    <ul class="menu join-vertical p-4 w-60 min-h-full bg-base-200 text-base-content">
    
      <li class="my-2 border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent !outline-base-content" data-set-theme="drlovasz" data-act-class="!outline-base-content"><div data-theme="drlovasz" class="bg-base-100 text-base-content w-full cursor-pointer font-sans"><div class="grid grid-cols-5 grid-rows-3"><div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div> <div class="bg-secondary col-start-1 row-start-3"></div> <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2"><div class="font-bold">drlovasz</div> <div class="flex flex-wrap gap-1"><div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6"><div class="text-primary-content text-sm font-bold">A</div></div> <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6"><div class="text-secondary-content text-sm font-bold">A</div></div> <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6"><div class="text-accent-content text-sm font-bold">A</div></div> <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6"><div class="text-neutral-content text-sm font-bold">A</div></div></div></div></div></div> </li>

      <li class="my-2 border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent !outline-base-content" data-set-theme="kriszta" data-act-class="!outline-base-content"><div data-theme="kriszta" class="bg-base-100 text-base-content w-full cursor-pointer font-sans"><div class="grid grid-cols-5 grid-rows-3"><div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div> <div class="bg-secondary col-start-1 row-start-3"></div> <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2"><div class="font-bold">kriszta</div> <div class="flex flex-wrap gap-1"><div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6"><div class="text-primary-content text-sm font-bold">A</div></div> <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6"><div class="text-secondary-content text-sm font-bold">A</div></div> <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6"><div class="text-accent-content text-sm font-bold">A</div></div> <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6"><div class="text-neutral-content text-sm font-bold">A</div></div></div></div></div></div> </li>

      <li class="my-2 border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent !outline-base-content" data-set-theme="business" data-act-class="!outline-base-content"><div data-theme="business" class="bg-base-100 text-base-content w-full cursor-pointer font-sans"><div class="grid grid-cols-5 grid-rows-3"><div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div> <div class="bg-secondary col-start-1 row-start-3"></div> <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2"><div class="font-bold">drlovasz dark</div> <div class="flex flex-wrap gap-1"><div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6"><div class="text-primary-content text-sm font-bold">A</div></div> <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6"><div class="text-secondary-content text-sm font-bold">A</div></div> <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6"><div class="text-accent-content text-sm font-bold">A</div></div> <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6"><div class="text-neutral-content text-sm font-bold">A</div></div></div></div></div></div> </li>
      
      <li class="my-2 border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent !outline-base-content" data-set-theme="blueish" data-act-class="!outline-base-content"><div data-theme="blueish" class="bg-base-100 text-base-content w-full cursor-pointer font-sans"><div class="grid grid-cols-5 grid-rows-3"><div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div> <div class="bg-secondary col-start-1 row-start-3"></div> <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2"><div class="font-bold">blueish (wip)</div> <div class="flex flex-wrap gap-1"><div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6"><div class="text-primary-content text-sm font-bold">A</div></div> <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6"><div class="text-secondary-content text-sm font-bold">A</div></div> <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6"><div class="text-accent-content text-sm font-bold">A</div></div> <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6"><div class="text-neutral-content text-sm font-bold">A</div></div></div></div></div></div> </li>

      <!--<li class="btn" data-set-theme="light">Light</li>
      <li class="btn" data-set-theme="emerald">Emerald</li>
      <li class="btn" data-set-theme="pastel">Pastel</li>
      <li class="btn" data-set-theme="cmyk">CMYK</li>
      <li class="btn" data-set-theme="winter">Winter</li>
      <li class="btn" data-set-theme="aqua">Aqua</li>
      <li class="btn" data-set-theme="dark">Dark</li>
      <li class="btn" data-set-theme="business">Dark</li>
      <li class="btn" data-set-theme="night">Night</li>-->

      <li class="form-control my-2">
        <p>Font style</p>
        <label class="label cursor-pointer">
          <span class="label-text system">System<br>font</span> 
          <input type="checkbox" class="toggle" bind:checked={font}/>
          <span class="label-text josefin">Josefin<br>Sans</span> 
        </label>
      </li>

      <li class="form-control my-2">
        <p>Background</p>
        <label class="label cursor-pointer">
          <span class="label-text system">Normal</span> 
          <input type="checkbox" class="toggle" bind:checked={gradient}/>
          <span class="label-text josefin">Gradient</span> 
        </label>
      </li>

      <li class="form-control my-2">
        <p>Boxes</p>
        <label class="label cursor-pointer">
          <span class="label-text system">Rounded</span> 
          <input type="checkbox" class="toggle" bind:checked={square}/>
          <span class="label-text josefin">Square</span> 
        </label>
      </li>
    </ul>
  </div>
</div>

<style>
  .drawer {
    position: fixed;
    bottom: 1.5rem;
    /*width: 100%;*/
    margin-left: auto;
  }
  .drawer-content {
    margin-left: auto;
    z-index: 999;
  }
  /*.drawer-side {
    transform: scale(0.75);
  }*/

</style>