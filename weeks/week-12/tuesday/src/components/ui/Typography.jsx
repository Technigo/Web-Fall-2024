import "./Typography.css";

export const H1 = ({ heading, color }) => (
  <h1 className={`heading1 ${color}`}>{heading}</h1>
);

export const H2 = ({ children }) => <h2 className="heading2">{children}</h2>;
