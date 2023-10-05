export class SessionStorage {
  public static set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public static get(key: string): any {
    return JSON.stringify(localStorage.getItem(key));
  }
}
