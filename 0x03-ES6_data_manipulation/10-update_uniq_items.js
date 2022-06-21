export default function updateUniqueItems(map) {
  if ((!map) instanceof Map) throw Error('Cannot process');
  Array.from(map.keys()).forEach((key) => {
    if (map.get(key) === 1) {
      map.set(key, 100);
    }
  });
}
