import Cart from '../Cart';
import avatar from '/assets/images/image-avatar.png';

export default function NavRight() {
  return (
    <div className="nav__right">
      <Cart />
      <div className="user">
        <button className="button button-user">
          <img src={avatar} alt="John Smith" />
        </button>
      </div>
    </div>
  );
}
