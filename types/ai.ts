import type { VehicleContext } from "./vehicle";

export type AdvisorRequest = {
  message: string;
  vehicle?: VehicleContext;
};

export type AdvisorResponse = {
  answer: string;
  suggestions: string[];
};
