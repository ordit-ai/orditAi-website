export const setToken = (token: string) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  if (typeof window === "undefined") return undefined;

  if (!localStorage.getItem("token")) return undefined;

  const token = localStorage.getItem("token");

  if (token) {
    return localStorage.getItem("token");
  }
};

export const removeToken = (arg: string) => {
  localStorage.removeItem(arg);
};

export const setSession = (value: string) => {
  localStorage.setItem("sessionId", value);
};

export const setRole = (value: string) => {
  localStorage.setItem("wsRole", value);
};

export const getWsRole = () => {
  if (typeof window === "undefined") return "Admin";

  if (!localStorage.getItem("wsRole")) return "Admin";

  const token = localStorage.getItem("wsRole");

  if (token) {
    return localStorage.getItem("wsRole");
  }
};

export const setUserPermission = (value: string) => {
  localStorage.setItem("userPermission", value);
};

export const get = () => {
  if (typeof window === "undefined") return "Admin";

  if (!localStorage.getItem("userPermission")) return "Admin";

  const token = localStorage.getItem("userPermission");

  if (token) {
    return localStorage.getItem("userPermission");
  }
};

export const getSession = () => {
  if (typeof window === "undefined") return undefined;

  if (!localStorage.getItem("sessionId")) return undefined;

  const token = localStorage.getItem("sessionId");

  if (token) {
    return localStorage.getItem("sessionId");
  }
};

export const setEmail = (email: string): void => {
  localStorage.setItem("email", email);
};

export const getEmail = (): string | null => {
  return localStorage.getItem("email");
};

// export const setUserType = (userType: string): void => {
//   localStorage.setItem("userType", userType);
// };

// export const getUserType = (): string | null => {
//   return localStorage.getItem("userType");
// };
