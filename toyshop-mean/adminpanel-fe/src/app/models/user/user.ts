export class User {
    email: string;
    id: string;
    name: string;
    role: string;
    username: string;

    constructor(email, id, name, role, username) {
        this.email = email;
        this.id = id;
        this.name = name;
        this.role = role;
        this.username = username;
    }
}
