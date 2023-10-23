export async function useUser(): Promise<any> {
  const users = await fetch("localhost:3001/");
  return users;
}
