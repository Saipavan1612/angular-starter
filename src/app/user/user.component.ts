import { Component, EventEmitter, Input, Output, computed, input, output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

//Using Type keyword
// type User = {
//   id: string,
//   name: string,
//   avatar: string
// }

//Using Interface
interface User {
  id: string,
  name: string,
  avatar: string
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //THIS IS USING Input & Output Decorators
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  @Input({ required: true }) user!: User;

  @Output() select = new EventEmitter<string>();


  //THIS IS USING InputSignals
  // avatar = input.required<string>();
  // name = input.required<string>();
  //select = output<string>();

  // THIS IS USING Signals
  // selectedUser = DUMMY_USERS[randomIndex];
  // selectedUser = signal(DUMMY_USERS[randomIndex]);


  //imagePath = computed(() => 'assets/users/'+this.avatar());

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // // this.selectedUser = DUMMY_USERS[randomIndex];
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    this.select.emit(this.user.id);
    console.log("Clicked!!")
  }
}
