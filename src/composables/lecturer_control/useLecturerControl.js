import {useLecturerRandom} from "@/stores/index";

export default function useLecturerControl() {
  const { all } = useLecturerRandom();

  const setup = async () => {
    return await all();
  }

  const countdown = () => {
    const countDownDate = new Date("June 5, 2024 00:00:00").getTime();
    const distance = countDownDate - Date.now();
    return {
      months: Math.floor(distance / (1000 * 60 * 60 * 24 * 30)),
      days: Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000)
    };
  };

  const clear = () => {
  }

  const registerEvent = async () => {
    setup();
  }

  return {
    countdown,
    setup,
    all,
    registerEvent,
    clear,
  };
}
