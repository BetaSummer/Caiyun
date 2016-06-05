export default function logger({ getState }) {
  return (next) => (action) => {
    const result = next(action);
    return result;
  }
}
