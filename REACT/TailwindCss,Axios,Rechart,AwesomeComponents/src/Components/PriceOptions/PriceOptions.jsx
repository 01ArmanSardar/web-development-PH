import PriceOption from "../PriceOption/PriceOption";
const PriceOptions = () => {
   const PriceOptionsInGYm= [
        {
          "id": 1,
          "name": "Basic Plan",
          "price": 19.99,
          "option": "monthly",
          "features": [
            "Access to basic tutorials",
            "Community support",
            "5GB cloud storage"
          ]
        },
        {
          "id": 2,
          "name": "Standard Plan",
          "price": 49.99,
          "option": "monthly",
          "features": [
            "Access to all tutorials",
            "Priority support",
            "50GB cloud storage",
            "Access to member-only webinars"
          ]
        },
        {
          "id": 3,
          "name": "Premium Plan",
          "price": 99.99,
          "option": "monthly",
          "features": [
            "All features of Standard Plan",
            "1-on-1 mentoring",
            "Unlimited cloud storage",
            "Early access to new content"
          ]
        },
        {
          "id": 4,
          "name": "Basic Annual Plan",
          "price": 199.99,
          "option": "yearly",
          "features": [
            "All features of Basic Plan",
            "10GB cloud storage",
            "Email support"
          ]
        },
        {
          "id": 5,
          "name": "Premium Annual Plan",
          "price": 999.99,
          "option": "yearly",
          "features": [
            "All features of Premium Plan",
            "Dedicated account manager",
            "Exclusive invites to live events",
            "Priority customer service"
          ]
        }
      ]
      
    return (
        <div className="">
            <h2 className="text-3xl">best price option in Town</h2>
            <div className="grid md:grid-cols-3 gap-3 ">
            {
                PriceOptionsInGYm.map(gymData=><PriceOption  key={gymData.id} gymData={gymData}></PriceOption>)
            } 
            </div>
            
            
           
        </div>
    );
};

export default PriceOptions;