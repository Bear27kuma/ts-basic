export default function promiseSample() {
  const url = 'https://api.github.com/users/Bear27kuma';

  type Profile = {
    login: string;
    id: number;
  };

  type FetchProfile = () => Promise<Profile | null>;

  const fetchProfile: FetchProfile = () => {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    return new Promise((resolve, reject) => {
      return fetch(url)
        .then((res) => {
          // レスポンスのbodyをJSONで読み取った結果を返す
          res
            .json()
            .then((json: Profile) => {
              console.log('Asynchronous Promise Sample 1:', json);
              // eslint-disable-next-line @typescript-eslint/no-unsafe-return
              resolve(json);
            })
            .catch((error) => {
              console.error(error);
              reject(null);
            });
        })
        .catch((error) => {
          console.error(error);
          reject(null);
        });
    });
  };

  fetchProfile()
    .then((profile: Profile | null) => {
      if (profile) {
        console.log('Asynchronous Promise Sample 2:', profile);
      }
    })
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    .catch(() => {});
}
