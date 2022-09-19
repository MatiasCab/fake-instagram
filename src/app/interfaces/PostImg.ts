import { User } from "./User";

export interface PostImg {
    postedBy: User;
    id: string;
    url: string;
    altText?: string;
    category: string[];
}
