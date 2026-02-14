import Section from '../layout/Section';
import TimelineItem from './TimelineItem';
import { timeline } from '../../data/timeline';

const Timeline = () => {
  return (
    <Section
      id="journey"
      title="Journey"
      subtitle="My educational and professional path in data science and software engineering"
      className="bg-bg-secondary"
    >
      <div className="max-w-4xl mx-auto relative pt-8">
        {timeline.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Timeline;
