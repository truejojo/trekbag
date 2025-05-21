import Logo from './Logo';
import Counter from './Counter';

const Header = ({ getAllItemsCount, getPackedItemsCount }) => {
  return (
    <header>
      <Logo />
      <Counter
        getAllItemsCount={getAllItemsCount}
        getPackedItemsCount={getPackedItemsCount}
      />
    </header>
  );
};

export default Header;
