import vue from "vue";

vue.filter("reduceString", (value, nbr) => {
  return value.length < nbr ? value : value.slice(0, nbr) + "...";
});