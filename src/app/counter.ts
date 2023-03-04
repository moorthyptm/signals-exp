import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div
      class="h-[90ch] w-full flex flex-col items-center justify-center space-y-3"
    >
      <div>
        <h1>Counter : {{ counter() }}</h1>
        <h1>Doubled : {{ doubledCount() }}</h1>
      </div>

      <div>
        <button
          class=" bg-black hover:bg-gray-700 text-white px-4 py-2 rounded-lg"
          (click)="increment()"
        >
          Increment
        </button>
      </div>
    </div>
  `,
  styles: [``],
})
export class CounterComponent {
  counter = signal(0);
  doubledCount = computed(() => this.counter() * 2);
  constructor() {
    effect(() => console.log(this.counter()));
  }

  increment() {
    this.counter.set(this.counter() + 1);
  }
}
