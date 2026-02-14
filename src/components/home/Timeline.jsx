import Section from '../layout/Section';
import TimelineItem from './TimelineItem';
import { timeline } from '../../data/timeline';

const Timeline = () => {
  return (
    <Section
      id="journey"
      title="Journey"
      subtitle="My educational and professional path in data science and software engineering"
      className="bg-gray-50"
    >
      <div className="max-w-4xl mx-auto relative pt-8">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform -translate-x-1/2" />

        {timeline.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Timeline;
