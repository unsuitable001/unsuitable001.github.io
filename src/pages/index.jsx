import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
import SectionBlog from '../components/section-blog';
import SectionCertifications from '../components/section-certifications';
import SectionExperience from '../components/section-experience';
import SectionLeaderships from '../components/section-leaderships';
import SectionProjects from '../components/section-projects';
import SectionSkills from '../components/section-skills';
import SEO from '../components/seo';


const Index = ({ data }) => {
  const about = get(data, 'site.siteMetadata.about', false);
  const projects = get(data, 'site.siteMetadata.projects', false);
  const posts = data.allMarkdownRemark.edges;
  const experience = get(data, 'site.siteMetadata.experience', false);
  const skills = get(data, 'site.siteMetadata.skills', false);
  const noBlog = !posts || !posts.length;
  const leaderships = get(data, 'site.siteMetadata.leaderships', false);
  const certifications = get(data, 'site.siteMetadata.certifications', false);

  return (
    <Layout>
      <SEO />
      {/* to enable blogs in header without actual blogs */}
      <Header metadata={data.site.siteMetadata} noBlog={false} />
      {about && <SectionAbout about={about} />}
      {experience && experience.length && (
        <SectionExperience experience={experience} />
      )}
      {projects && projects.length && <SectionProjects projects={projects} />}
      {!noBlog && <SectionBlog posts={posts} />}
      {skills && skills.length && <SectionSkills skills={skills} />}
      {leaderships && leaderships.length && (
        <SectionLeaderships leaderships={leaderships} />
      )}
      {certifications && certifications.length && (
        <SectionCertifications certifications={certifications} />
      )}
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        github
        linkedin
        projects {
          name
          description
          link
        }
        experience {
          name
          description
          link
        }
        skills {
          name
          description
        }
        leaderships {
          name
          description
          link
        }
        certifications {
          name
          description
          link
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
