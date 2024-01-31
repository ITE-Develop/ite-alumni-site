import ENV from "@/config/env";
import MaintenanceService from "@/services/MaintenanceService";
import { useRouter } from "vue-router";

export default function useMaintenance() {
  const { beforeEach, afterEach, onError } = useRouter();
  const key = ENV.APP_PREFIX + '-error';

  const init = () => {
    afterEach(() => {
      localStorage.removeItem(key);
    })

    beforeEach(async (to, from, next) => {
      await MaintenanceService.index();
      next();
    })

    onError(async () => {
      if (await localStorage.getItem(key) === '1') {
        return;
      }
      if (!error.message.includes('Failed to fetch dynamically imported module')) {
        return;
      }
      localStorage.setItem(key, "1")
      window.location.reload(true);
    });
  };

  return {
    init
  };
}
