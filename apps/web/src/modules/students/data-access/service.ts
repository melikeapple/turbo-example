const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function getStudents(
  query: string = "",
  skip: number = 0,
  limit: number = 5
) {
  return fetch(
    `${API_URL}/users/search?q=${query}&limit=${limit}&skip=${skip}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  ).then((res) => res.json());
}

export function getStudent(id: string) {
  return fetch(`${API_URL}/users/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
}

export function addNewStudent(body: unknown) {
  return fetch(`${API_URL}/users/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).then((res) => res.json());
}

export function updateStudent({ id, body }: { id: string; body: unknown }) {
  return fetch(`${API_URL}/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).then((res) => res.json());
}

export function deleteStudent(id: number) {
  return fetch(`${API_URL}/users/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
}
