import SharedSections from "../../../Components/SharedSections";
import FeateredImg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div>
            <section className="FeaturedItem text-white bg-fixed pt-8 my-20">
                <SharedSections subHeading={'check it out'} heading={'From Our MEnu'}></SharedSections>
                <div className="flex justify-center items-center pb-20 pt-12 px-36">
                    <div>
                        <img src={FeateredImg} alt="" />
                    </div>
                    <div className="md:ml-10">
                        <p>march 20 2023</p>
                        <h1>where i can get some</h1>
                        <p className="uppercase">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae praesentium qui quam! Officiis aut dignissimos sunt cumque ipsum sint minus in impedit voluptatem, laudantium voluptatum nemo doloremque voluptas quam dolorem provident doloribus ad. Provident veniam nemo reiciendis tempora. Saepe sunt, excepturi error impedit maiores quaerat! Aspernatur maiores odio quibusdam quo?</p>
                        <button className="btn btn-soft btn-accent">Accent</button>

                    </div>
                </div>




            </section>

        </div>
    );
};

export default Featured;