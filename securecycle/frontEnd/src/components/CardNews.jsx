import React, { useState, useEffect } from "react";
import { Button, Card, CardHeader, CardBody, Container } from "reactstrap";

import styles from "./CardNews.module.scss";
import { NavLink } from "react-router-dom";
import PaginationDots from "./PaginationDot";

const PostsData = [
  {
    category: "",
    title: "Test your knowledge on Australia's tricky road rules",
    text: "Australia is the land of some strange and wacky road rules - not all of them well-known - but just how strictly are they enforced?",
    image: "/rule_3.png",
  },
  {
    category: "",
    title: "Test your knowledge on Australia's tricky road rules",
    text: "Australia is the land of some strange and wacky road rules - not all of them well-known - but just how strictly are they enforced?",
    image: "/rule_2.png",
  },

  {
    category: "",
    title: "Test your knowledge on Australia's tricky road rules",
    text: "Australia is the land of some strange and wacky road rules - not all of them well-known - but just how strictly are they enforced?",
    image: "/rule_4.png",
  },
  {
    category: "",
    title: "Test your knowledge on Australia's tricky road rules",
    text: "Australia is the land of some strange and wacky road rules - not all of them well-known - but just how strictly are they enforced?",
    image: "/rule_5.png",
  },
];
const CardNews = () => {
  const [posts, setPosts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setPosts(PostsData);
  }, []);

  const nextPost = () => {
    const nextIndex = (activeIndex + 1) % posts.length;
    setActiveIndex(nextIndex);
  };

  const prevPost = () => {
    const prevIndex = (activeIndex - 1 + posts.length) % posts.length;
    setActiveIndex(prevIndex);
  };
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchEndX < touchStartX) {
      nextPost();
    }

    if (touchEndX > touchStartX) {
      prevPost();
    }
  };
  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ paddingBottom: "2rem" }}
    >
      <div className={styles["carousel-container"]}>
        <Container className={styles["app-cardnews-list"]}>
          {posts.map((post, index) => (
            <NewsCard
              key={index}
              details={post}
              isActive={index === activeIndex}
            />
          ))}
        </Container>

        <PaginationDots activeIndex={activeIndex} totalPosts={posts.length} />

        <div className={styles["arrow"]} onClick={nextPost}>
          &lt;
        </div>
        <div
          className={`${styles["arrow"]} ${styles["right"]}`}
          onClick={prevPost}
        >
          &gt;
        </div>
      </div>
    </div>
  );
};

const NewsCard = ({ details, isActive }) => {
  const { category, image, title, text, ref } = details;

  return (
    <Card
      className={`${styles["newsCard"]} ${isActive ? styles["active"] : ""}`}
    >
      <CardHeader
        className={styles["cardnews-header"]}
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h4>{category}</h4>
      </CardHeader>
      {/* <CardBody>
        <h2>{title}</h2>
        <p className={styles["body-content"]}>{text}</p>
        <NavLink to={ref}>
          <Button color="primary" className={styles["testimonial-btn"]}>
            Learn More
          </Button>
        </NavLink>
      </CardBody> */}
    </Card>
  );
};

export default CardNews;
