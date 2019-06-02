import React from 'react'
import styled from 'styled-components'

export default function Wave() {
  return (
    <WaveContainer>
      <svg width="100%" height="170" fill="none">
        <path fill="#FD777F">
          <animate
            repeatCount="indefinite"
            fill="freeze"
            attributeName="d"
            dur="7s"
            values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;

            M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;

            M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;

            M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;"
          />
        </path>
      </svg>
    </WaveContainer>
  )
}

const WaveContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  opacity: 0.1;
  transform: translateY(10px);
  pointer-events: none;
`
