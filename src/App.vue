<script setup>

import { ApplicationInsights } from '@microsoft/applicationinsights-web'
import ENV from '@/config/env';

if (ENV.APPLICATION_INSIGHT_CONNECTION_STRING) {
  const appInsights = new ApplicationInsights({
    config: {
      connectionString: ENV.APPLICATION_INSIGHT_CONNECTION_STRING
    }
  });
  appInsights.loadAppInsights();
  appInsights.trackPageView();
}

</script>

<template>
  <router-view></router-view>
</template>
