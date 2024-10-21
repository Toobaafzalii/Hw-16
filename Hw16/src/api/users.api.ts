import { generateClient } from "./client";
import { urls } from "./urls";

export const fetchUsersListById: fetchUsersListTypeById = async (ids) => {
  const client = generateClient();
  const response = await Promise.all(
    ids.map((id) => {
      return client.get<Iuser>(urls.users.byId(id));
    })
  );
  const data: Iuser[] = [];
  for (const item of response) {
    data.push(item.data);
  }
  return data;
};

export const fetchUsersList: fetchUsersListType = async () => {
  const client = generateClient();
  const response = await client.get(urls.users.list);
  return response.data;
};
