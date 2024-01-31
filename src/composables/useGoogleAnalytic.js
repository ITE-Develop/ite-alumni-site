
import ENV from "@/config/env";

export default function useGoogleAnalytic() {
  const createScript = (id) => {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
    script.async = true;
    document.head.appendChild(script);
  }

  const configureGoogleAnalytics = (id) => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', id);
  }

  const init = async () => {
    if (!ENV.GOOGLE_ANALSTIC_ID) { 
      return; 
    }
    const googleAnalyticsId = ENV.GOOGLE_ANALSTIC_ID;
    try {
      await createScript(googleAnalyticsId);
      configureGoogleAnalytics(googleAnalyticsId);
    } catch (e) {}
  }

  return {
    init
  }
}
