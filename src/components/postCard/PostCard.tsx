interface PostCardProps {
  id: number;
  title: string;
  body: string;
  likes: number;
  dislikes: number;
  tags: string[];
  views: number;
}

const Tags = ({ tags }: { tags: string[] }) => (
  <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
    {tags.map((tag) => (
      <div
        id={tag}
        style={{
          boxShadow: "0px 0px 5px gray",
          borderRadius: "10px",
          padding: "3px 10px",
          backgroundColor: "gray",
          color: "#fff",
          textTransform: "capitalize",
          fontSize: "13px",
        }}
      >
        {tag}
      </div>
    ))}
  </div>
);

const LikesDislikes = ({
  likes,
  dislikes,
}: {
  likes: number;
  dislikes: number;
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
      <p>
        <b>Likes:</b> {likes}
      </p>
      <p>
        <b>Dislikes:</b> {dislikes}
      </p>
    </div>
  );
};

export const PostCard = ({
  id,
  title,
  body,
  tags,
  likes,
  dislikes,
}: PostCardProps) => {
  return (
    <div
      style={{
        width: "500px",
        boxShadow: "0px 0px 5px gray",
        marginBottom: "20px",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <h4 style={{ fontSize: "18px", textAlign: "start" }}>{id}. {title}</h4>
      <p style={{ textAlign: "start" }}>{body}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Tags tags={tags} />
        <LikesDislikes likes={likes} dislikes={dislikes} />
      </div>
    </div>
  );
};
