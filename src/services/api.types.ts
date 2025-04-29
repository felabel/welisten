export type RegisterType = {
  username: string;
  email: string;
  password: string;
};
export type LoginType = {
  email: string;
  password: string;
};

export type AuthResponse = {
  message: string;
  token?: string;
  user?: any | null;
};

export type categoryResponse = {
  categories: string[];
};

export type FeedBack = {
  id: number;
  user: string;
  title: string;
  category: string;
  detail: string;
  upvotes?: number;
  comments?: Comment[];
};
export interface Comment {
  id: string;
  userId: string;
  text: string;
  createdAt: string;
  replies: Reply[];
}

export interface Reply {
  id: string;
  userId: string;
  text: string;
  createdAt: string;
}

export type FeedBackResponse = {
  message: string;
  feedbacks: FeedBack[];
  feedback?: FeedBack;
};

export interface AddCommentRequest {
  id: string;
  userId: string;
  text: string;
  email: string;
  username: string;
}
export interface AddCommentResponse {
  message: string;
  feedback: {
    id: string;
    user: string;
    title: string;
    category: string;
    detail: string;
    // Add other fields if they exist
  };
}

export interface AddReplyRequest {
  feedbackId: string;
  commentId: number | null;
  userId: string;
  text: string;
  username: string;
  email: string;
}
