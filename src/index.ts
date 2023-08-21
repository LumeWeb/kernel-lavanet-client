import { Client, factory } from "@lumeweb/libkernel/module";

export const MODULE =
  "zduJpuvFms8USLw62RcFreQLBspEgQeVe5b2DiA2GK1YM3yqxfnRzDDZk3";

export class LavaNetClient extends Client {
  public async query(chain: string, query: any): Promise<number> {
    return this.callModuleReturn("query", { chain, query });
  }
}

export const createClient = factory<LavaNetClient>(LavaNetClient, MODULE);
