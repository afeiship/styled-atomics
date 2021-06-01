import styled, { css } from "styled-components";
import StyledBox from "@jswork/styled-box";

Object.assign(View.defaultProps, { engine: { styled, css } });

function App() {
  return (
    <div className="App">
      Hello world
      <StyledBox p={20} wp={2} auto>
        abc
      </StyledBox>
    </div>
  );
}

export default App;
