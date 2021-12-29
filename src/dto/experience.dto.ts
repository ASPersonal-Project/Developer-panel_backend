export class CreateExperienceDto{
    user_id?: number;

    title: string;

    employment_type: string;

    company_name: string;

    start_date: Date;

    end_date: Date;
}