// You can define interfaces for all React components here.
// Do not forget to export properly.

interface ReplyProps {
    userImagePath : string; 
    username : string;
    replyText : string;
    likeNum : number;
}
export type { ReplyProps };

interface CommentProps{
    userImagePath: string;
    username: string;
    commentText : string;
    likeNum : number;
    replies : ReplyProps;
}
export type { CommentProps };

interface PostProps {
    userImagePath : string; 
    username : string; 
    postText : string; 
    likeNum : number;
}
export type { PostProps };