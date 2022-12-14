import type { NextPage } from "next";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

type PostData = {
  id?: string;
  date?: string;
  title?: string;
};
type MyInput = {
  allPostsData?: PostData[];
};

const Home: NextPage = ({ allPostsData }: MyInput) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Motivated junior web developer particularly on front-end web
          development. To see my deployed projects, here is my{" "}
          <a href="https://github.com/wspawned">GitHub</a>.
          <br /> JS | TS | React | Next.js | React | CSS | HTML | Redux | Axios{" "}
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData !== undefined
            ? allPostsData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
              ))
            : undefined}
        </ul>
      </section>
    </Layout>
  );
};

export default Home;
