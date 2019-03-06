import { SubmissionFile } from "./SubmissionFile";

export interface Submission {
    submission_id: string;
    user_id: number;
    date: string;
    status: string;
    files: SubmissionFile[];
    file_refs: SubmissionFile[];
}