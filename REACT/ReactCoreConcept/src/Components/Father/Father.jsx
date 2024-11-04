import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';
import Brother from '../Brother/Brother';

const Father = ({asset}) => {
    return (
        <div>
            <h2>Father</h2>
            <section className='flex'>
                <Myself asset={asset}></Myself>
                <Sister></Sister>
                <Brother></Brother>
            </section>
        </div>
    );
};

export default Father;