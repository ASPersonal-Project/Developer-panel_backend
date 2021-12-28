export class CreateEducationDto{
    id: number;

    user_id?: number;

    title: string;

    university: string;

    degree: string;

    start_date: Date;

    end_date: Date;
}