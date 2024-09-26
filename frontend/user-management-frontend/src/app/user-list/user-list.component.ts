import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    users: User[] = [];

    constructor(private userService: UserService, public router: Router) { }

    ngOnInit(): void {
        this.loadUsers();
    }

    getUsers() {
        this.userService.getUsers().subscribe(data => {
            this.users = data; 
        });
    }

    loadUsers(): void {
        this.userService.getUsers().subscribe(data => {
            this.users = data;
        });
    }

    editUser(id: string) {
        this.router.navigate(['/edit', id]);
    }

    createUser(): void {
        this.router.navigate(['/user-form']);
    }
}
