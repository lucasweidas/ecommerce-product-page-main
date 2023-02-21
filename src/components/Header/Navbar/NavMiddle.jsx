import DesktopGuide from './DesktopGuide';
import MobileGuide from './MobileGuide';

export default function NavMiddle({ isLargeScreen, shown, onToggleGuide }) {
  return (
    <div className="nav__middle" id="nav-guide">
      {isLargeScreen ? <DesktopGuide /> : <MobileGuide shown={shown} onToggle={onToggleGuide} />}
    </div>
  );
}
