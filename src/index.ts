import { Client, factory } from "@lumeweb/libkernel/module";

export const MODULE =
  "zdiVVPc5raTp827qiA1BsbxTew1aQVYg7GRLxfbwRBYH8QPCQzN4C8ANzj";

export class LavaNetClient extends Client {
  public async query(chain: string, query: any): Promise<number> {
    return this.callModuleReturn("query", { chain, query });
  }
}

export const createClient = factory<LavaNetClient>(LavaNetClient, MODULE);
