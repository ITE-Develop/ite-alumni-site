export default function useMetaTag() {
  const setTitle = (title) => {
    document.title = title;
  };
  return {
    setTitle,
  };
}
