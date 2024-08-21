import { cyberData } from "@/data/cyberData";
import { analyticesData } from "@/data/analyticesData";
import { softwareData } from "@/data/softwareData";

const allData = [...softwareData, ...analyticesData, ...cyberData];

export function getServiceData(id: string) {
  return allData.find(
    (service) =>
      service.title.replaceAll(" ", "-").replaceAll("/", "-").toLowerCase() ===
      id,
  );
}
