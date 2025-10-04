import React from "react";
import { connect } from "react-redux";
import { increment,decrement } from "./component/action";
function App({ value, increment, decrement }) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Count: {value}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

// map state & dispatch to props
const mapStateToProps = (state) => ({
  value: state.value,
});

const mapDispatchToProps = { increment, decrement };

export default connect(mapStateToProps, mapDispatchToProps)(App);
