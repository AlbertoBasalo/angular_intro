import { Injectable } from "@angular/core";
import { data } from "../data.repository";
import { Agency } from "../models/agency.interface";

@Injectable({
  providedIn: "root",
})
export class DataService {
  getAgencies(): Agency[] {
    return data.agencies;
  }

  getAgencyById(agencyId: string) {
    return data.agencies.find((a) => a.id === agencyId);
  }

  getTrips() {
    return data.trips;
  }

  getTripsById(tripId: string) {
    return data.trips.find((t) => t.id === tripId);
  }
}
