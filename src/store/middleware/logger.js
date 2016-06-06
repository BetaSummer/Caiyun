export default function logger() {
  return (next) => (action) => {
    const result = next(action);
    return result;
  };
}
