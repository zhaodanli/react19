/**
 * 原理会渲染两次
 * 1. 接收 promise 
 * 2. 入参 类型判断 promise
 * 3. 根据 promise 状态进行处理
 * 3.1 第一次是 undefined 走默认行为
 * 3.2 第二次 有两种状态 fulfaild、 reject
 */
export function useSelf(promise) {
    console.log('useSelf render')
    if(!promise instanceof Promise) { 
        return promise;
    }

    switch(promise.status) {
        case 'pending':
            throw promise
        case 'fulfilled':
            return promise.value
        case 'rejected':
            throw promise.reason
        default:
            // 为什么是throw
            throw promise.then((value) => {
                promise.status = 'fulfilled'
                promise.value = value
            }).catch((reason) => {
                promise.status = 'rejected'
                promise.reason = reason
            })       
    }
}
    // if(promise instanceof Promise) {
    //     const [state, setState] = useState('pending')
    //     const [value, setValue] = useState(undefined)

    //     promise.then((result) => {
    //         setState('fulfilled')
    //         setValue(result)
    //     }, (error) => {
    //         setState('rejected')
    //         setValue(error)
    //     })

    //     if (state === 'pending') {
    //         throw promise
    //     } else if (state === 'fulfilled') {
    //         return value
    //     } else if (state === 'rejected') {
    //         throw value
    //     }
    // }