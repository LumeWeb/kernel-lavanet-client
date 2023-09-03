import { Client, factory } from "@lumeweb/libkernel/module";

export const MODULE =
  "zdiNcTEL6Ksa9GQzHR6vfrSsQJcebjTKAHjuoeAg41wQJv9LJ2rswfo32o";

export class LavaNetClient extends Client {
  public async query(chain: string, query: any): Promise<number> {
    return this.callModuleReturn("query", { chain, query });
  }
}

export const createClient = factory<LavaNetClient>(LavaNetClient, MODULE);
