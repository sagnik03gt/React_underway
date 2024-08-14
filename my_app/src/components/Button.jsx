export default function Button({ children, isSelect, ...props }) {
  return (
    <>
      <button className={isSelect ? "active" : undefined} {...props}>
        {children}
      </button>
    </>
  );
}
