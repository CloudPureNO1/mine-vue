<template>
  <div class="border-box-contaier">
    <div class="dv-border-box-8">
      <svg width="680" height="240" class="dv-svg-container">
        <defs>
          <path
            id="border-box-8-path-bc8193f4-a75c-42c1-85af-d55f14e8dda7"
            d="M2.5, 2.5 L677.5, 2.5 L677.5, 237.5 L2.5, 237.5 L2.5, 2.5"
            fill="transparent"
          ></path>
          <radialGradient
            id="border-box-8-gradient-bc8193f4-a75c-42c1-85af-d55f14e8dda7"
            cx="50%"
            cy="50%"
            r="50%"
          >
            <stop offset="0%" stop-color="#fff" stop-opacity="1"></stop>
            <stop offset="100%" stop-color="#fff" stop-opacity="0"></stop>
          </radialGradient>
          <mask id="border-box-8-mask-bc8193f4-a75c-42c1-85af-d55f14e8dda7">
            <circle
              cx="0"
              cy="0"
              r="150"
              fill="url(#border-box-8-gradient-bc8193f4-a75c-42c1-85af-d55f14e8dda7)"
            >
              <animateMotion
                dur="3s"
                path="M2.5, 2.5 L677.5, 2.5 L677.5, 237.5 L2.5, 237.5 L2.5, 2.5"
                rotate="auto"
                repeatCount="indefinite"
              ></animateMotion>
            </circle>
          </mask>
        </defs>
        <polygon
          fill="transparent"
          points="5, 5 675, 5 675 235 5, 235"
        ></polygon>
        <use
          stroke-width="1"
          xlink:href="#border-box-8-path-bc8193f4-a75c-42c1-85af-d55f14e8dda7"
          stroke="#235fa7"
        ></use>
        <use
          stroke-width="3"
          xlink:href="#border-box-8-path-bc8193f4-a75c-42c1-85af-d55f14e8dda7"
          mask="url(#border-box-8-mask-bc8193f4-a75c-42c1-85af-d55f14e8dda7)"
          stroke="#4fd2dd"
        >
          <animate
            attributeName="stroke-dasharray"
            from="0, 1830"
            to="1830, 0"
            dur="3s"
            repeatCount="indefinite"
          ></animate>
        </use>
      </svg>
      <div class="border-box-content">dv-border-box-8</div>
    </div>
  </div>
</template>
