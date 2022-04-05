import NavButton from './NavButton.jsx';

const NavBar = () => {

    return (
        <div className='NavBar'>
            <NavButton name='fruits'/>
            <NavButton name='vegetables'/>
            <NavButton name='drinks'/>
        </div>
    );
};

export default NavBar;