import { useState } from "react";
import useSWR from "swr";
import SpeedSection from "./SpeedSection";
import BadgeSection from "./Badge";
import useSwr from "swr";

const API_KEY = process.env.NEXT_PUBLIC_PAGESPEED_KEY;
const PAGESPEED_API =
  "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function PageSpeed({ locale }) {
  const [site, setSite] = useState("https://dwiwijaya.com/");
   const [url, setUrl] = useState(`${PAGESPEED_API}?url=${encodeURIComponent(site)}&strategy=mobile&key=${API_KEY}`);
  const [active, setActive] = useState("/");
  const { data, isLoading, mutate } = useSwr(url, fetcher);

  function refetch(path) {
    setActive(path);
    setUrl(PAGESPEED_API + path);
    mutate();
  }

  return (
    <section className="pagespeed__section">
      <BadgeSection active={active} refetch={refetch} />
      <SpeedSection data={data} isLoading={isLoading} locale={locale} />
    </section>
  );
}
