
export interface Semester {
    id: number;
    codename: string; // char(4)
    start: Date;
    end: Date;
}

export interface Field {
    id: number;
    name: string; // varchar(64)
    shortcut: string; // char(4)
}

export interface Class {
    id: number;
    start_year: number;
    end_year: number;
    field_id: number; // Foreign key to Field
}

export interface Subject {
    id: number;
    name: string; // varchar(64)
    shortcut: string; // char(3)
    code_name?: string | null; // varchar(32), optional
}

export interface SubjectClassType {
    id: number;
    name: string; // varchar(32)
}

export interface SubjectClass {
    id: number;
    semester_id: number; // Foreign key to Semester
    subject_id: number; // Foreign key to Subject
    class: number; // References Class
    start_time: string; // char(5), time format as string "HH:MM"
    end_time: string; // char(5), time format as string "HH:MM"
    day: number; // smallint, represents day of the week (e.g., 1-7)
    type: number; // smallint, references SubjectClassType
}

export interface SubjectWeek {
    id: number;
    week_number: number; // smallint
    subject_class_id: number; // Foreign key to SubjectClass
}
