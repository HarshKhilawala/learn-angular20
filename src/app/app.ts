import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Admin } from '../components/admin/admin';
import { User } from '../components/user/user';
import { Databinding } from '../components/databinding/databinding';
import { SignalExample } from '../components/signal-example/signal-example';
import { ControlFlow } from '../components/control-flow/control-flow';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Admin, User, Databinding, SignalExample, ControlFlow],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tutorial1');
}
