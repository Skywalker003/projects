import PropTypes from "prop-types";

export const GitHubIcon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.39c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.41-4.04-1.41-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.72.08-.72 1.2.08 1.84 1.24 1.84 1.24 1.08 1.84 2.82 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.31 1.23A11.52 11.52 0 0112 5.8c1.02 0 2.04.14 3 .42 2.3-1.55 3.31-1.23 3.31-1.23.66 1.64.24 2.86.12 3.16.77.84 1.24 1.92 1.24 3.23 0 4.62-2.8 5.65-5.48 5.95.43.37.82 1.11.82 2.24v3.31c0 .32.22.7.83.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
};

GitHubIcon.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string,
};
