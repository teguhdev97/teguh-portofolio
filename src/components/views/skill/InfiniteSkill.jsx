import SkillItem from "./SkillItem";

const SkillsCategory = ({ data, animationTime, reverseAnimation }) => {
    return (
        <div className="scroll" style={{ "--time": animationTime }}>
            {[...Array(2)].map((_, index) => (
                <ol className={`scroll-content ${reverseAnimation ? 'reverse' : 'normal'} ${index == 0 ? 'animate-loop-1 loop-delay-1' : 'animate-loop-2 loop-delay-2'}`} key={index}>
                    {data.map((skill, skillIndex) => (
                        <SkillItem key={skillIndex} skill={skill} />
                    ))}
                </ol>
            ))}
        </div>
    );
};

const InfiniteSkill = ({ skills }) => {
  if (!skills || skills.length === 0) return null;

  const Backend = skills.filter((item) => item.type === 'backend');
  const Frontend = skills.filter((item) => item.type === 'frontend');
  const Utilities = skills.filter((item) => item.type === 'utility');

  return (
    <section className="section__skills">
      {Backend.length > 0 && <SkillsCategory data={Backend} animationTime="60s" reverseAnimation={false} />}
      {Frontend.length > 0 && <SkillsCategory data={Frontend} animationTime="66s" reverseAnimation={true} />}
      {Utilities.length > 0 && <SkillsCategory data={Utilities} animationTime="50s" reverseAnimation={false} />}
    </section>
  );
};

export default InfiniteSkill;

