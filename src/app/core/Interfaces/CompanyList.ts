import { ICompanyList } from "./ICompanyList";

export class CompanyList implements ICompanyList {
  constructor(public name?: string,
    public description?: string,
    public rating?: string,
    public type?: string,
    public establised?: string,
    public headquaters?: string,
    public numberOfEMployees?: string,
    public revenue?: string) { }
}
