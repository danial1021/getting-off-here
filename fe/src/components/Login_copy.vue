<style module>
.years{
  width: 100%;
  margin: 0 5% 0 6%;
}
.tables{
    width: 600px;
    white-space: nowrap;
}
</style>

<template>
<table>
  <td class="tables">
    <v-container style="padding: 0; width: 100px;">
    <v-overflow-btn 
      class="my-2"
      :items="dropdown_font"
      label="Overflow Btn"
      :outlined="outlined"
      :class="$style.years"
    ></v-overflow-btn>
  </v-container>

  </td>
</table>
  
</template>

<script>
  export default {
    data: () => ({
      dropdown_font: ['Arial', 'Calibri', 'Courier', 'Verdana'],
      outlined: true
    }),
  }
</script>