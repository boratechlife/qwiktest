import { component$ } from "@builder.io/qwik";

export const Hexagon = component$(() => {
  return <div class="hexagon">1</div>;
});

export const style = `
.hexagon {
  width: 100px;
  height: 55px;
  background-color: #333;
  position: relative;
  margin: 50px;
}

.hexagon:before,
.hexagon:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
}

.hexagon:before {
  bottom: 100%;
  border-bottom: 30px solid #333;
}

.hexagon:after {
  top: 100%;
  width: 0;
  border-top: 30px solid #333;
}
`;
