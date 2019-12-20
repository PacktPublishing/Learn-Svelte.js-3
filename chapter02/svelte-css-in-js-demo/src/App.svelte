<script>
  import emotion from "emotion/dist/emotion.umd.min.js";
  const { css } = emotion;

  const ORANGE = "#ffa500";
  const RED = "red";
  const WHITE = "white";

  const heading = css`
    background-color: ${ORANGE};
    color: ${WHITE};
  `;

  const Button = css`
    border: none;
    color: white;
    padding: 14px 28px;
    cursor: pointer;
    background-color: ${ORANGE};
    &:hover {
      background-color: ${RED};
    }
  `;
  
</script>

<div>
  <h1 class={heading}>My style is from CSS-in-JS</h1>
  <button class={Button}>Hover over me</button>
</div>
