export default {
  VBtn: {
    color: "primary",
    rounded: "lg",
    variant: "flat",
    size: "large",
    class: "px-4",
  },
  VTextField: {
    color: "black",
    rounded: "lg",
    hideDetails: "auto",
  },
  VSelect: {
    color: "black",
    rounded: "lg",
    hideDetails: "auto",
  },
  VChip: {
    color: "primary",
    rounded: "lg",
    tile: true,
  },
  VSwitch: {
    hideDetails: "auto",
  },
  //v-data-table-server
  VDataTableServer: {
    itemsPerPageText: "Número de filas por página:",
    itemsPerPageAll: "Todos",
    noDataText: "No hay datos disponibles",
    loadingText: "Cargando...",
    pageText: "{0}-{1} de {2}",
    //items-per-page-options
    itemsPerPageOptions: [
      { value: 10, title: "10" },
      { value: 20, title: "20" },
      { value: 25, title: "25" },
      { value: 50, title: "50" },
      { value: 100, title: "100" },
      { value: -1, title: "Todo" },
    ],
  },
};
