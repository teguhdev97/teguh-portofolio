const Container = ({ children, className = '',sectionClass, ...others }) => {
  return (
    
    <div className={`main group/main  pt-24 h-full ${className}`} {...others}>
      <section className={`group-[.sidebar-expanded]/main:blur-[2px]  mx-10 max-w-[1048px] ${sectionClass}`}>
        {children}
      </section>
    </div>
  );
};

export default Container;
