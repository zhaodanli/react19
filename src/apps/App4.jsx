import React, { Suspense } from 'react'
import PropTypes from 'prop-types';

const LazyComponent = React.lazy(() => import('./components/LazyComponent.jsx'));

/**
 * Suspense 用于处理异步操作，优化用户界面加载体验。它通过挂起组件渲染，直到数据或资源准备就绪，从而提升用户体验，尤其是在加载动态数据或代码拆分时。
 */

const ImageLoader = ({ src }) => {
    // 预加载图片资源
    const resurce = preloadImage(src);

    return <img src={resurce.read()} alt="预加载的图片" />;
};
ImageLoader.propTypes = {
    src: PropTypes.string.isRequired,
};

const imageCache = new Map(); // 用于缓存图片资源
function preloadImage(src) {

    if(imageCache.has(src)) {
        return imageCache.get(src); // 如果缓存中存在，直接返回
    }

    // 如果缓存中不存在，创建一个新的资源对象
    let status = "pending";
    let result = null;

    // 创建Promise来处理图片加载
    const promise = new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            status = "resolved";
            result = img.src;
            resolve(result);
        };
        img.onerror = () => {
            status = "rejected";
            result = new Error("图片加载失败")
            reject(result);
        };
    });

    // 创建资源对象
    const resurce = {
        read() {
            switch (status) {
                case "pending":
                    throw promise; // 抛出 promise 以挂起组件
                case "resolved":
                    return result; // 返回加载成功的图片地址
                case "rejected":       
                    throw result; // 抛出错误
                default:
                    throw promise; // 抛出 promise 以挂起组件
            }
        }
    };
    imageCache.set(src, resurce); // 将资源对象存入缓存
    return resurce;
}

const Message = () => {

    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            {/* <LazyComponent /> */}
            <ImageLoader src="https://www.baidu.com/img/flexible/logo/pc/result.png" />
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