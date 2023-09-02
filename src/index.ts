import { Client, factory } from "@lumeweb/libkernel/module";

export const MODULE =
  "z3o47cgeKKm7NEGfE9iyKb4YJoe5Km3HUtM41Lu7VPm1jLeqg4todP29dwrF";

export class LavaNetClient extends Client {
  public async query(chain: string, query: any): Promise<number> {
    return this.callModuleReturn("query", { chain, query });
  }
}

export const createClient = factory<LavaNetClient>(LavaNetClient, MODULE);
