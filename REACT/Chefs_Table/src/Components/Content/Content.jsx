
import './Content.css';
const Content = () => {
    return (
        <div>
            <div style={{
                width: '80%',
                height: '600px',
                margin: 'auto',
                // filter:'blur(2px)',
                borderRadius: '10px',
                backgroundSize: 'cover',
                backgroundImage: 'url("images/emediong-umoh-gcHkQ07Af2Q-unsplash.jpg")'
            }}>
                <div className='text-center pt-64'>
                    <h1 className='font-extrabold text-center text-5xl text-opacity-85 text-red-400'>Discover and Exeptional Cooking Class tailored for you</h1>
                    <p className='text-amber-100 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nisi laborum molestias labore doloribus accusamus?</p>
                    <div className='flex justify-content-center gap-10 pt-4'>
                        <button type="button" className="bg-lime-500 rounded-full btn font-semibold"> Explore Now </button>
                        <button type="button" className="btn border border-dark font-semibold">Our FeedBack</button>
                    </div>


                </div>


            </div>

            <div className='text-center m-12'>
                <h1 className='font-bold text-4xl'>Our Recipies</h1>
                <p className='w-2/4 ml-72'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, accusantium? </p>
            </div>
        </div>

    );
};

export default Content;