import React from "react";

const commentsData = [
  {
    name: "Navneet Rajput",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Navneet Rajput",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Navneet Rajput",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Navneet Rajput",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Navneet Rajput",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Navneet Rajput",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Navneet Rajput",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Navneet Rajput",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Navneet Rajput",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Navneet Rajput",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Navneet Rajput",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Navneet Rajput",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Navneet Rajput",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex gap-3 my-4">
      <img
        className="h-10 w-10 rounded-full"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div>
        <p className="font-semibold text-sm">{name}</p>
        <p className="text-sm text-gray-700">{text}</p>

        <div className="flex gap-4 text-xs text-gray-500 mt-1">
          <span className="cursor-pointer hover:text-black">Like</span>
          <span className="cursor-pointer hover:text-black">Reply</span>
        </div>
      </div>
    </div>
  );
};


const CommentsList = ({ comments }) => {
  // Disclaimer: Don't use indexes as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
