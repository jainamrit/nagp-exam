import { IAppliedJobs } from "./IAppliesJobs";

export class AppliedJobs implements IAppliedJobs {
  constructor(public userId?: string,
    public name?: string,
    public description?: string,
    public company?: string,) { }
}
