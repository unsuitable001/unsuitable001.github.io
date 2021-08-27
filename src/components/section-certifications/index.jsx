import React from 'react';
import Section from '../section';
import SummaryItem from '../summary-item';


const SectionCertifications = ({ certifications }) => {
  if (!certifications.length) return null;

  return (
    <Section title="Certifications">
      {certifications.map((item) => (
        <SummaryItem
          key={item.name}
          name={item.name}
          description={item.description}
          link={item.link}
        />
      ))}
    </Section>
  );
};

export default SectionCertifications;
