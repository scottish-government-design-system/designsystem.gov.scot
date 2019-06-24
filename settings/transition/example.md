---
layout: example-transition
parent: settings.transition
type: example
style: '.transition-box {display: block; height: 100px; width: 100px;}'
index: 0
---

.transition-box {
    background-color: #ccc;
    transition: color $transition-out-time;
}

.transition-box:hover {
    background-color: #0065bd;
    transition-duration: $transition-in-time;
}
