import profile from'../../assets/images/profile.png';

const Header = () => {
    return (
        <div className='flex justify-between p-4 border-b-2 max-w-6xl mx-auto mb-12'>
            <h3 className="text-3xl font-bold">Knowledge Cafe</h3>
                <img src={profile} alt="" />
        </div>
    );
};

export default Header;