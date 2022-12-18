import React, { useState } from "react";

const SingleArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    getData(`https://sparta-fitness-database.vercel.app/articles/${cat}/${id}`).then(
      (res) => setArticle(res)
      //console.log(res)
    );
  }, [id]);
  return <div>SingleArticle</div>;
};

export default SingleArticle;
