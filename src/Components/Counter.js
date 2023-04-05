import React from "react";
import "./Counter.css";
import { IncreaseVal, DecreaseVal } from "../Redux/Action-creator";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const mystate = useSelector((state) => state.ourState.count);
  console.log(mystate);
  const dispatch = useDispatch();
  return (
    <>
      <div className="Counter">
        <h1>Counter</h1>

        <div className="content">
         
          {mystate > 0 ? (
            <>
              {" "}
              <button
            className="btn-danger"
            onClick={() => dispatch(DecreaseVal())}
          >
            -
          </button>
              <input
                classname="btn"
                type="number"
                value={mystate}
                disabled="true"
              ></input>
                  <button className='btn-success' onClick={()=>dispatch(IncreaseVal())}>+</button>

            </>
          ) : (
            <>
            {" "}
            <button
          className="btn-danger"
        >
          -
        </button>
            <input
              classname="btn"
              type="number"
              value={0}
              disabled="true"
            ></input>
                <button className='btn-success' onClick={()=>dispatch(IncreaseVal())}>+</button>

          </>
          )}

     
        </div>
        <span>Counter made using redux</span>
      </div>
    </>
  );
};

export default Counter;
