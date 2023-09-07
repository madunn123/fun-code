export default async function saveCredentials(username, password) {
  try {
    const credentials = JSON.stringify(username, password);
    localStorage.setItem('user-register', credentials);
  } catch (error) {
    throw Error(error);
  }
}
