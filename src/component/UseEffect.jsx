import { useEffect } from "react";

const UseEffect = () => {
   useEffect(() => {
       const fetchUsers = async () => {
           try {
               const response = await fetch('https://dummyjson.com/users');
               const users = await response.json();
               console.log(JSON.stringify(users));
           } catch (error) {
               console.error("Error fetching users:", error);
           }
       };
       fetchUsers();
   }, []);

   return (
       <div>
           {}
       </div>
   );
};

export default UseEffect;
