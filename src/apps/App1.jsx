import { Component, use } from 'react'
import { useSelf } from './../tool/useSelf.js'
// 导入 PropTypes 用于类型检查
import PropTypes from "prop-types";


const getMessage = Promise.resolve('hello')
const errorMeassage = Promise.reject('something went wrong')

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    // 钩子：静态方法，用于从错误中派生出状态，修改结果
    // 当子组件抛出错误时，更新状态以显示错误信息
    // 1. getDerivedStateFromError
    // 2. componentDidCatch
    // 3. render
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    // componentDidCatch(error, errorInfo) {
    //     console.log('error', error)
    //     console.log('errorInfo', errorInfo)
    // }

    render() {
        if (this.state.hasError) {
            return <h1>捕获到错误 {this.state.error} </h1>;
        }

        // 否则直接渲染组建
        return this.props.children; 
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
};

const Message = () => {
    const message = use(errorMeassage);
    return (
        <div>
            <h5>Message</h5>
            <p>{message}</p>
        </div>
    );
}

function App() {
    console.log("App 组件APP1被渲染");

    return (
        <ErrorBoundary>
            <Message />
        </ErrorBoundary>
    )
}

export default App;