
`popstate` 事件只会在触发了浏览器前进/后退动作时才会触发（用户点击前进/后退、调用 history.go()/forward()），而不会被 `history.pushState()` 或 `history.replaceState()` 触发

- https://developer.mozilla.org/zh-CN/docs/Web/API/History_API
- https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event