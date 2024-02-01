import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { I18n } from 'aws-amplify/utils';
import { translations } from '@aws-amplify/ui-angular';

I18n.putVocabularies(translations);
I18n.setLanguage('es');

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,AmplifyAuthenticatorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Habitask ';
  public formFields = {
    signUp: {
      email: {
        order:1
      },
      name: {
        order: 2
      },
      password: {
        order: 5
      },
      confirm_password: {
        order: 6
      }
    }
  }

}

