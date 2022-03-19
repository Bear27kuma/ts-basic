export default function callbackSample() {
  const url = 'https://api.github.com/users/Bear27kuma';

  // コールバックで呼び出す非同期処理
  const fetchProfile = () => {
    return fetch(url)
      .then((res) => {
        // レスポンスのbodyをJSONで読み取った結果を返す
        res
          .json()
          .then((json) => {
            console.log('Asynchronous Callback Sample 1:', json);
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return json;
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const profile = fetchProfile();
  console.log('Asynchronous Callback Sample 2:', profile);
}
