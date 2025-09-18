import { Metric } from "web-vitals";

interface ReportWebVitalsProps {
  metric: Metric;
}
const reportWebVitals = (onPerfEntry?: (metric: Metric) => void) => {
  if (!onPerfEntry) return;
  {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
