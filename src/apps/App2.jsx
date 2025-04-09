import { use } from 'react'
import { useSelf } from './../tool/useSelf.js'

const getMessage = Promise.resolve('hello')
const getAnortherMessage = Promise.resolve('world')

// 将 message2 定义在组件外部
const message2 = [
    Promise.resolve('hello1'),
    Promise.resolve('hello2'),
    Promise.resolve('hello3')
]


/**
 * 
 * @原因分析
        React Hooks 的规则

        React 的 Hooks（如 use）必须在组件的顶层调用，不能在条件语句、循环或嵌套函数中调用。
        在你的代码中，message2 是一个数组，调用 message2.map 时会在循环中调用 use，这违反了 React 的 Hooks 规则。
        use 的工作机制

        use 是一个实验性 API，依赖 React 的 Suspense 机制。
        当 message2 被定义在组件内部时，每次组件重新渲染都会重新创建 message2 数组和其中的 Promise 对象。
        由于 use 会抛出 Promise，React 的 Suspense 机制可能无法正确处理这些动态创建的 Promise，从而导致错误。
        解决方法
        将 message2 定义在组件外部，确保它是一个稳定的引用，避免在每次渲染时重新创建。
 */
function App() {
    const condition = false;
    // 条件渲染
    const message = condition? use(getMessage) : use(getAnortherMessage);

    const dataList = message2.map((promise, index) => {
        const data = useSelf(promise);
        return (
            <div key={index}>
              <p>
                消息 {index + 1}: {data}
              </p>
            </div>
        );
    })
    
    return (
        <div> 
            { message } 
            <h3>message2内容如下</h3>
            <div>{ dataList }</div>
        </div>
    )
}

export default App;