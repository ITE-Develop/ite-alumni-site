// useMetaTag.js
import { ref } from 'vue';

export default function useMetaTag() {
  const title = ref(document.title);

  const setTitle = (newTitle) => {
    document.title = newTitle;
    title.value = newTitle;
  };

  const setMetaTag = (property, content) => {
    const existingMetaTag = document.querySelector(`meta[property='${property}']`);
    if (existingMetaTag) {
      existingMetaTag.setAttribute('content', content);
    } else {
      const metaTag = document.createElement('meta');
      metaTag.setAttribute('property', property);
      metaTag.setAttribute('content', content);
      document.head.appendChild(metaTag);
    }
  };

  const setMetaTags = (tags) => {
    Object.keys(tags).forEach(property => {
      setMetaTag(property, tags[property]);
    });
  };

  return {
    title,
    setTitle,
    setMetaTags
  };
}