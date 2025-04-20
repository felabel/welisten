import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../config";
import {
  AddCommentRequest,
  AddReplyRequest,
  categoryResponse,
  FeedBack,
  FeedBackResponse,
} from "./api.types";

const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders: (headers, api) => {
    const { auth } = api.getState() as { auth: { token: string | undefined } };
    if (auth?.token) {
      headers.set("Authorization", `Bearer ${auth.token}`);
    }
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

export const protectedApi = createApi({
  reducerPath: "protectedApi",
  baseQuery,
  endpoints: (builder) => ({
    createFeedback: builder.mutation({
      query: (feedbackData) => ({
        url: "/feedback",
        method: "POST",
        body: feedbackData,
      }),
    }),
    // get feedback
    getFeedback: builder.query<FeedBackResponse, void>({
      query: () => ({
        url: "/feedback",
        method: "GET",
      }),
    }),

    getFeedbackById: builder.query<FeedBackResponse, string>({
      query: (id) => ({
        url: `/feedback/${id}`,
        method: "GET",
      }),
    }),
    updateFeedback: builder.mutation<FeedBackResponse, FeedBack>({
      query: (feedbackData) => ({
        url: `/feedback/${feedbackData.id}`,
        method: "PUT",
        body: feedbackData,
      }),
    }),

    // add comment on figma
    addComment: builder.mutation<void, AddCommentRequest>({
      query: (commentData) => ({
        url: "/feedback/comment",
        method: "POST",
        body: commentData,
      }),
    }),

    //upvoteFeedback
    upvoteFeedback: builder.mutation<void, { id: string }>({
      query: (data) => ({
        url: "/feedback/upvote",
        method: "POST",
        body: data,
      }),
    }),

    // reply comment
    addReply: builder.mutation<void, AddReplyRequest>({
      query: (replyData) => ({
        url: "/feedback/reply",
        method: "POST",
        body: replyData,
      }),
    }),

    // get status count
    getStatusCount: builder.query<Record<string, number>, void>({
      query: () => ({
        url: "/feedback/status-count",
        method: "GET",
      }),
    }),

    // get categoris
    getCategories: builder.query<categoryResponse, void>({
      query: () => ({
        url: "/categories", // Replace with your actual API route for categories
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateFeedbackMutation,
  useGetCategoriesQuery,
  useGetFeedbackQuery,
  useGetFeedbackByIdQuery,
  useUpdateFeedbackMutation,
  useAddCommentMutation,
  useAddReplyMutation,
  useGetStatusCountQuery,
  useUpvoteFeedbackMutation,
} = protectedApi;
