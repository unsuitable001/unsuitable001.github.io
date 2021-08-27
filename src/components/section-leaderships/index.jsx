import React from 'react';
import Section from '../section';
import SummaryItem from '../summary-item';


const SectionLeaderships = ({ leaderships }) => {
  if (!leaderships.length) return null;

  return (
    <Section title="Leaderships">
      {leaderships.map((item) => (
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

export default SectionLeaderships;
