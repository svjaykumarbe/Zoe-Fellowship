import React from 'react';
import './DisciplePage.css';
import familyIcon from './icons/family.png'; // Replace with actual icon paths
import worshipIcon from './icons/worship.png';
import servantIcon from './icons/servant.png';
import stewardIcon from './icons/steward.png';
import witnessIcon from './icons/witness.png';

const DiscipleCard = ({ title, icon }) => {
  return (
    <div className="disciple-card">
      <img src={icon} alt={`${title} Icon`} className="disciple-icon" />
      <h3>{title}</h3>
    </div>
  );
};

const DisciplePage = () => {
  return (
    <div className="disciple-page">
      <section className="disciple-header">
        <h1>The Whole Disciple</h1>
        <p>
          As a whole disciple, you embody several identities at once—family member, worshiper, servant, steward, and witness—and they influence every area of your life. At the Summit, we want to help you live out these identities through core discipleship activities—ongoing, lifelong tools that God uses to shape you into Christlikeness.
        </p>
      </section>

      <section className="disciple-grid">
        <DiscipleCard title="Family Member" icon={familyIcon} />
        <DiscipleCard title="Worshiper" icon={worshipIcon} />
        <DiscipleCard title="Servant" icon={servantIcon} />
        <DiscipleCard title="Steward" icon={stewardIcon} />
        <DiscipleCard title="Witness" icon={witnessIcon} />
      </section>
    </div>
  );
};

export default DisciplePage;