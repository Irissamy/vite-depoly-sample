<template>
    <div class="card text-bg-light mb-3">
      <div class="card-header d-flex align-items-center">
        <i>
          <slot name="icon"></slot>
        </i>
        <h3 class="ps-2 mb-0">
          <slot name="heading"></slot>
        </h3>
      </div>
      <div class="card-body">
        <p class="card-text">
          <slot></slot>
        </p>
      </div>
    </div>
    <div class="d-flex">
      <!-- <i>
        <slot name="icon"></slot>
      </i>
      <div class="details">
        <h3>
          <slot name="heading"></slot>
        </h3>
        <slot></slot>
      </div> -->
    </div>
</template>
