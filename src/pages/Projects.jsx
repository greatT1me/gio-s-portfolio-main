import TopBar from "@/components/TopBar";
import Head from "next/head";
import data from "@/data/data";
import Footer from "@/components/Footer";
import styles from "@/styles/projectsP.module.css";
import oldStyles from "@/styles/myProjects.module.css";

import Link from "next/link";

export default function MyProjectsP(props) {
  const handleClick = (targetDiv) => {
    window.location.href = `/#${targetDiv}`; // Navigate to the destination page and scroll to the target div
  };
  const projects = data.MyProjects;
  return (
    <>
      <Head>
        <title>Gio's portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon1.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Poppins&family=Sacramento&family=Inter&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.projects_page_main}>
        <TopBar handleClick={handleClick} topBarNav={data.topBarNav} />
        <div className={styles.main_content}>
          <div className={styles.content_head}>
            <div
              className={styles.content_head_go_back}
              onClick={() => handleClick("Projects")}>
              Go back
            </div>
            <div className={styles.content_head_title}>
              My <span style={{ color: "#1A74E5" }}>projects</span>
            </div>
          </div>
          <div className={styles.projects_list}>
            {projects.map((project, i) => {
              return (
                <div className={oldStyles.my_projects_img_container}>
                  <img
                    src={project.imgURL}
                    alt={project.title}
                    className={oldStyles.my_projects_img}
                  />
                  <div className={oldStyles.my_projects_about}>
                    <div className={oldStyles.my_projects_about_title}>
                      {project.title}
                    </div>
                    <div className={oldStyles.my_projects_about_text}>
                      {project.text}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className={styles.projects_page_get_in_touch}
          onClick={() => handleClick("GetInTouch")}>
          {" "}
          Get In Touch
        </div>
        <Footer navigation={data.footerBarNav} handleClick={handleClick} />
      </main>
    </>
  );
}
