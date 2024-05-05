import '../style/header.css';
    const Header = ({ title }:{
    title :any;
}) => {
    return (
      <div className="header font-mono text-white pt-8 pb-9 w-full drop-shadow-2xl	">
        <h1>{`"${title}"`}</h1> 
      </div>
    );
  };
  export default Header;