import styled, { css } from "styled-components";
import StyledBox from "@jswork/styled-box";

Object.assign(View.defaultProps, { engine: { styled, css } });

function App() {
  return (
    <div className="App">
      Hello world
      <StyledBox auto wp={4} p={10} bdw="4" bds="dashed">abc</StyledBox>
    </div>
  );
}

export default App;
