const user = {
  name: 'Admin',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageHeight: 50,
  imageWidth: 100,
};

export default function AdminPanel() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageWidth,
          height: user.imageHeight
        }}
      />
    </>
  );
}
