import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div
      class="h-[90ch] w-full flex flex-col items-center justify-center space-y-3"
    >
      <div>
        <h1>Ref Counter : {{ counter().counter }}</h1>
        <h1>Ref Doubled : {{ doubledCount() }}</h1>
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
export class CounterRefComponent {
  counter = signal({
    counter: 0,
  });
  doubledCount = computed(() => this.counter().counter * 2);
  constructor() {
    effect(() => console.log(this.counter()));
  }

  increment() {
    // this.counter.set({ counter: this.counter().counter + 1 });

    // Mutate
    // this.counter.mutate((v) => {
    //   // it holds current value, if nothing done inside mutate callback but effect triggered
    //   //   v.counter++;

    //   v.counter++;
    // });

    // UPDATE
    this.counter.update((v) => {
      return { counter: ++v.counter };
    });
  }
}
