import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[RouterModule],
  template: `
    <header class="p-4 bg-lime-300">
      <div>
        <span class="text-base font-semibold">
          {{ title }}
        </span>

        <nav class=" float-right">
          <ul class="flex">
            <li class="mr-6">
              <a class="text-blue-500 hover:text-blue-800" href="#"
                >Primitive</a
              >
            </li>
            <li class="mr-6">
              <a class="text-blue-500 hover:text-blue-800" href="#"
                >Reference</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [``],
})
export class AppComponent {
  title = 'signals-exp';
}
