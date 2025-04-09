import React, { Suspense } from 'react'

const LazyComponent = React.lazy(() => import('./components/LazyComponent.jsx'));

/**
 * Suspense 用于处理异步操作，优化用户界面加载体验。它通过挂起组件渲染，直到数据或资源准备就绪，从而提升用户体验，尤其是在加载动态数据或代码拆分时。
 */
const Message = () => {

    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <LazyComponent />
        </Suspense>
    );
}

function App() {
    console.log("App3 组件被渲染");

    return (
        <Message />
    )
}

export default App;