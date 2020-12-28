import { Users } from "./users";

export class Post {
    post_id: number;
    users: Users;
    image_url: string;
    caption: string;
    like_num: number;
    constructor(){}
}
