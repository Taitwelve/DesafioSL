import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
    user: User = { nome: '', sobrenome: '', dataNascimento: new Date() };
    isEditMode: boolean = false;

    constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.isEditMode = true;
            this.userService.getUsers().subscribe(users => {
                this.user = users.find(u => u._id === id)!; // Forçar a não ser null
            });
        }
    }

    saveUser(): void {
        if (this.isEditMode) {
            this.userService.updateUser(this.user._id!, this.user).subscribe(() => {
                this.router.navigate(['/users']);
            });
        } else {
            this.userService.createUser(this.user).subscribe(() => {
                this.router.navigate(['/users']);
            });
        }
    }

    cancel(): void {
        this.router.navigate(['/users']);
    }
}

