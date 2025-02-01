import Swal from "sweetalert2";
import UseAuth from "../../Context/AuthContext/UseAurth";
import { Navigate } from "react-router-dom";


const Addjob = () => {
    const { user } = UseAuth()
    const HandelJob = e => {

        e.preventDefault()

        console.log('form submited');
        const formData = new FormData(e.target)
        const initialData = Object.fromEntries(formData.entries())
        console.log(initialData);
        const { minS, maxS, currency, ...newjob } = initialData
        const min=parseInt(minS)
        const max=parseInt(maxS)
        console.log(newjob);
        newjob.SalaryRange = { min, max, currency }
        console.log(newjob);
        newjob.requirements = newjob.requirements.split('\n')
        newjob.responsibilites = newjob.responsibilites.split('\n')

        fetch('http://localhost:3000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newjob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                 if (data.insertedId)
                                {
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "job add succesfully in database",
                                        showConfirmButton: false,
                                        timer: 1500
                                      });
                                      Navigate('/MyaddedJob')
                                }
            })


    }
    return (
        <div>
            <h1>this is add job page </h1>

            <fieldset className="fieldset">
                <form onSubmit={HandelJob} >
                    {/* job title */}
                    <label className="fieldset-label">title</label>
                    <input name="title" type="text" className="input" placeholder="type title here" />
                    {/* job location */}
                    <label className="fieldset-label">location</label>
                    <input name="location" type="text " className="input" placeholder="location" />
                    {/* job type */}
                    <label className="fieldset-label">Job type</label>
                    <select defaultValue={'pick a joob type'} className="select select-bordered w-full max-w-xs">
                        <option disabled >pick a joob type</option>
                        <option>Intern</option>
                        <option>full time </option>
                        <option>hybrid </option>
                    </select>
                    {/* job field */}
                    <label className="fieldset-label">Job Field</label>
                    <select defaultValue={'pick a job field'} className="select select-bordered w-full max-w-xs">
                        <option disabled >pick a job field</option>
                        <option>Engeneering</option>
                        <option>marketign</option>
                        <option>finance</option>
                    </select>
                    {/* Salary range */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                        <div >
                            <label className="fieldset-label">min</label>
                            <input name="minS" type="number" className="input" placeholder="min" />
                        </div>
                        <div>
                            <label className="fieldset-label">max</label>
                            <input name="maxS" type="number" className="input" placeholder="max" />
                        </div>
                        <div>
                            <label className="fieldset-label">Currency</label>
                            <select defaultValue={'pick a currency'} name="currency" className="select select-bordered w-full max-w-xs">
                                <option disabled >pick a currency</option>
                                <option>bdt</option>
                                <option>dollar </option>
                                <option>inr </option>
                            </select>
                        </div>

                    </div>
                    {/* job description */}
                    <label className="fieldset-label">Description</label>
                    <textarea type="text" name="description" placeholder="jobDescription" className="textarea textarea-primary"></textarea>
                    {/* company name  */}
                    <label className="fieldset-label">comapany name </label>
                    <input name="companyName" type="text" className="input" placeholder="company name here" />
                    {/* requirements */}
                    <label className="fieldset-label">requirements </label>
                    <textarea type="text" name="requirements" placeholder="put each reqirement in a new line " className="textarea textarea-primary"></textarea>
                    {/* responsibilites  */}
                    <label className="fieldset-label">responsibilites</label>
                    <textarea type="text" name="responsibilites" placeholder="write each responsivilites  in a new line" className="textarea textarea-primary"></textarea>
                    {/* Hr name */}
                    <label className="fieldset-label">hR name </label>
                    <input name="hRName" type="text" className="input" placeholder="hr name here" />
                    {/* company name  */}
                    <label className="fieldset-label">Hr Email</label>
                    <input defaultValue={user?.email} name="HrEmail" type="email" className="input" placeholder="Hr email here" />
                    {/* company name  */}
                    <label className="fieldset-label">comapany name </label>
                    <input name="company_logo" type="url" className="input" placeholder="company logo here" />
                    {/* submit button */}
                    <input className="btn btn-neutral mt-4" type="submit" value="add job" />
                </form>
            </fieldset>
        </div>
    );
};

export default Addjob;