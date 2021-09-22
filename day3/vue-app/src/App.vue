<template>
  <div id="container">
    <div id="sidebar">
      <span @mousedown="dragRow">row1</span>
      <span @mousedown="dragRow">col</span>
      <span @mousedown="dragRow">button</span>
    </div>
    <div id="editpanel">
      <div class="row">
        <div class="col">
          <button></button>
        </div>
        <div class="col"></div>
      </div>
    </div>
    <div id="dragable" :style="{left:y,top:x}" v-if="drag.isDragging ">dragable</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drag: {
      x0: 0,
      y0: 0,
      dx: 0,
      dy: 0,
      x: 0,
      y: 0,
      isDragging: false,
    },
  }),
  components: {},
  methods: {
    dragRow() {
      console.log("start");
    },
  },
};
</script>

<style>
#container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: absolute;
}
#sidebar {
  width: 160px;
  background-color: whitesmoke;
}
#sidebar > * {
  width: 60px;
  height: 60px;
  margin: 10px;
  background-color: green;
  display: inline-block;
  box-sizing: border-box;
  border: 1px solid black;
  user-select: none;
}
#editpanel {
  flex: 1;
}
.row {
  width: 100%;
  min-height: 50px;
  background-color: yellow;
  display: flex;
  padding: 20px;
  box-sizing: border-box;
}
.col {
  height: 100px;
  background-color: lightgreen;
  width: 100px;
  margin: 10px;
}
#dragable {
  position: absolute;
  width: 60px;
  height: 60px;
}
</style>
