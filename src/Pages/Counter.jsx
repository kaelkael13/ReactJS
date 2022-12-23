import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Counter() {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>
                {count}
            </h2>
            <button onClick={() => dispatch({ type: 'plus' })}>+</button>
        </div >
    )
}

export default Counter