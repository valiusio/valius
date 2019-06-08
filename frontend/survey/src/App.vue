<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
    body {
        margin: 0;
    }

    .container {
        width: 100%;
        max-width: 400px;
        margin: auto;
        height: auto;

        &--lg {
            max-width: 900px;
        }
        &--exlg {
            max-width: 1100px;
        }
    }
</style>
