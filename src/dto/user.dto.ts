export class CreateUserDto {
    id: number;

    fullName: string;

    userType: string;

    email: string;

    password: string;

    contactNo: string;

    profileUrl: string;

    description: string;

    headline: string;
}

export class LoginUserDto {
    email: string;

    password: string;
}