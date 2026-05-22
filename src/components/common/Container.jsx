export const Container = ({ children, className }) => (
  <div className={`max-w-[1440px] mx-auto px-6 md:px-12 ${className}`}>
    {children}
  </div>
);