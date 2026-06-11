# Advanced Psychometric IQ Assessment Engine

A responsive, lightweight web application that administers a 35-question cognitive evaluation evaluating fluid intelligence, quantitative sequence reasoning, structural matrices, and formal logic. 

The application utilizes a background timing daemon to track performance metrics within a strict 30-minute processing threshold and dynamically constructs an IQ evaluation output using Gaussian normal distribution profiles.
 https://srivaatsavreddy45.github.io/iq-quiz-app/
---

## Key Features
* **100% Language-Agnostic Fluid Intelligence Logic:** Eliminates language background biases by replacing standard verbal analogies with strict deduction grids, syllogisms, and boolean parsing systems.
* **Gaussian Scoring Profile (Bell Curve):** Evaluates responses relative to an empirical sample median ($\mu = 18$, $\sigma = 5.2$) to calculate true Z-scores instead of simple linear scoring.
* **Dynamic Velocity Matrix:** Analyzes velocity bounds. Meeting high accuracy targets ahead of the benchmark pace yields localized score bonuses, while low-accuracy rapid guessing triggers strict anti-exploit scale penalties.

---

## Folder Architecture
```text
iq-quiz-app/
├── index.html       # Clean view semantic templates & progress indicators
├── style.css        # Minimalist UI styles & viewport responsiveness
├── script.js        # 35-Question dataset, clock loops, and bell-curve engine
└── README.md        # Deployment documentation and local terminal guide

