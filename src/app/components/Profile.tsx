/* eslint-disable @next/next/no-img-element */

function Profile() {
  return (
    <>
      <div className="text-xs">Developed by: {user.name}</div>
      <img
        className="rounded-full"
        src={user.imageUrl}
        alt={"Foto" + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}

const user = {
  name: "Bimo Cahyo Kusumo",
  imageUrl: "https://avatars.githubusercontent.com/u/92245052?v=4",
  imageSize: 90,
};

export default Profile;
