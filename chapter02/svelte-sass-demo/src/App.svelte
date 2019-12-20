<style type="text/scss">
  $color_white: white;
  $color_black: black;
  $bgcolor_success: #4caf50;
  $bgcolor_success_hover: #46a049;
  $bgcolor_info: #2196f3;
  $bgcolor_info_hover: #0b7dda;
  $bgcolor_warning: #ff9800;
  $bgcolor_warning_hover: #e68a00;
  $bgcolor_danger: #f44336;
  $bgcolor_danger_hover: #da190b;
  $bgcolor_default: #e7e7e7;
  $bgcolor_default_hover: #ddd;

  @mixin button($bgcolor, $bgcolor_hover) {
    background-color: $bgcolor;
    &:hover {
      background-color: $bgcolor_hover;
    }
  }
  %btn-shared {
    border: none;
    color: $color_white;
    padding: 14px 28px;
    cursor: pointer;
  }
  .success-btn {
    @include button($bgcolor_success, $bgcolor_success_hover);
    @extend %btn-shared;
  }
  .info-btn {
    @include button($bgcolor_info, $bgcolor_info_hover);
    @extend %btn-shared;
  }
  .warning-btn {
    @include button($bgcolor_warning, $bgcolor_warning_hover);
    @extend %btn-shared;
  }
  .danger-btn {
    @include button($bgcolor_danger, $bgcolor_danger_hover);
    @extend %btn-shared;
  }
  .default-btn {
    @include button($bgcolor_default, $bgcolor_default_hover);
    @extend %btn-shared;
    color: $color_black;
  }
</style>

<h1>Buttons using Svelte SCSS</h1>
<button class="success-btn">Sucess button</button>
<button class="info-btn">Info button</button>
<button class="warning-btn">Warning button</button>
<button class="danger-btn">Danger button</button>
<button class="default-btn">Default button</button>
