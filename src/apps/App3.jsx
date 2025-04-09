import { Component, use, useState, useRef, useEffect } from 'react'
import { useSelf } from '../tool/useSelf.js'
// 导入 PropTypes 用于类型检查
import PropTypes from "prop-types";

/**
 * 严格模式
 */
const Message = () => {

    const [count, setCount] = useState(0);
    const renderCount = useRef(0)
    console.log("renderCount", ++renderCount.current);

    const loaded = useRef(false);

    useEffect(() => {
        console.log("useEffect 组件挂载");

        if(!loaded.current) {
            loaded.current = true;
            console.log("useEffect 只会执行一次 组件挂载");
        }

        return () => {
            console.log("useEffect 组件卸载");
        }
    }, []);

    return (
        <div>
            {count}
            <button onClick={() => setCount(count + 1)}>增加</button>
        </div>
    );
}

function App() {
    console.log("App3 组件被渲染");

    return (
        <Message />
    )
}

export default App;