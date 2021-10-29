import React, { FC } from "react";
import { Article } from "store/types/article.type";
import { Grid, Typography } from "@mui/material";
import styles from "./NewsItem.module.scss";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { format } from "date-fns";
import Link from "next/link";

const api = process.env.NEXT_PUBLIC_DOMAIN_API;

interface NewsItemProps {
  article: Article;
}

const NewsItem: FC<NewsItemProps> = ({ article }) => {
  const {
    title,
    description,
    commentariesCount,
    createdAt,
    cover,
    favouritesCount,
    author,
    slug,
  } = article;

  return (
    <Grid item xs={12} className={styles.article}>
      <div className={styles.article__header}>
        <Typography variant="h6" component="div">
          Criminal
        </Typography>

        <Typography
          variant="body1"
          component="div"
          className={styles.article__header__username}
        >
          {author.username}
        </Typography>
        <Typography
          variant="body2"
          component="div"
          className={styles.article__header__date}
        >
          {createdAt && format(new Date(createdAt), "dd MMM y")}
        </Typography>
        <div className={styles.article__header__subscribe}>
          <PersonAddIcon />
          <span>subscribe</span>
        </div>
      </div>

      <div className={styles.article__body}>
        <Link href={`/articles/${slug}`}>
          <a className={styles.article__body_title}>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
          </a>
        </Link>
        <div className={styles.article__body_description}>{description}</div>
      </div>

      {cover && (
        <Link href={`/articles/${slug}`}>
          <a>
            <div className={styles.article__cover}>
              <img src={`${api}/${cover}`} alt="post-cover" />
            </div>
          </a>
        </Link>
      )}

      <div className={styles.article__footer}>
        <div className={styles.article__footer_comments}>
          <ModeCommentOutlinedIcon />
          {commentariesCount || 10}
        </div>
        <div className={styles.article__footer_likes}>
          <ArrowBackIosIcon
            style={{ transform: "rotate(-90deg)", marginTop: "-10px" }}
          />
          <div
            style={{
              color: favouritesCount >= 0 ? "#2ea83a" : "red",
              fontWeight: 600,
            }}
          >
            {favouritesCount}
          </div>
          <ArrowBackIosIcon
            style={{ transform: "rotate(90deg)", marginTop: "10px" }}
          />
        </div>
      </div>
    </Grid>
  );
};

export default NewsItem;