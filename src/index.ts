import { Client, factory } from "@lumeweb/libkernel/module";

export const MODULE = "zrjTW4BiiJV7U8toTwqEMyzRbBy5G1nkdVRc34nW8LTmkEf";

export class LavaNetClient extends Client {
  public async query(chain: string, query: any): Promise<any> {
    return this.callModuleReturn("query", { chain, query });
  }
}

export const createClient = factory<LavaNetClient>(LavaNetClient, MODULE);
