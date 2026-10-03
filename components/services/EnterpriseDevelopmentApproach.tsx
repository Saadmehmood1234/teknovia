import { developmentSteps } from "@/lib/data/services-data";
import { DevelopmentApproach } from "../DevelopmentApproach";
export function EnterpriseDevelopmentApproach() {
  return <DevelopmentApproach steps={developmentSteps} />;
}

