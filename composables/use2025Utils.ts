import { ref } from "vue";
import { useI18n } from "vue-i18n";

export function use2025Utils() {
  const countDownDate = new Date("Nov 22, 2025 08:00:00");
  const days = ref(0);
  const hours = ref(0);
  const minutes = ref(0);
  const seconds = ref(0);
  const windowWidth = ref(0);

  const { locale, t } = useI18n();

  // Function to switch between languages
  let pathname;
  if (process.client) {
    pathname = location.pathname.split("/");
  } else {
    const route = useRoute();
    pathname = route.path.split("/");
  }
  if (pathname?.includes("fr")) locale.value = "fr";

  function openLink(link: string) {
    window.open(link, "_blank");
  }

  if (process.client) {
    windowWidth.value = window.innerWidth;
    window.addEventListener(
      "resize",
      () => (windowWidth.value = window.innerWidth)
    );

    setInterval(function () {
      const now = new Date().getTime();

      if (countDownDate.getTime() > now) {
        const distance = countDownDate.getTime() - now;
        days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
        hours.value = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
      }else {
        days.value = 0;
        hours.value = 0;
        minutes.value = 0;
        seconds.value = 0;

      }
    }, 1000);
  }

  return {
    days,
    hours,
    minutes,
    seconds,
    windowWidth,
    locale,
    t,
    openLink,
  };
}
