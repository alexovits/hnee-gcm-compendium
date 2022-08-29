import React from "react";
import styles from '../styles/Home.module.css'

const ArticleHeader = () => (
  <div className={styles.articleHeader}>
    <a href="/">
      <img src="/hnee.png" href="/" alt="hnee-logo" width="auto" id={styles.hneeArticleHeader}/>
    </a>
  </div>
);

export default ArticleHeader;
