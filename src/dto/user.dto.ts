export class CreateUserDto {
    id: number;

    full_name: string;

    user_type: string;

    email: string;

    password: string;

    contact_no: string;

    profile_url: string;

    description: string;

    headline: string;
}

export class LoginUserDto {
    email: string;

    password: string;
}