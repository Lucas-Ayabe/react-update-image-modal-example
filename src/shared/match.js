export default function match(conditions) {
  return (value) => conditions[value] ?? conditions._default;
}
