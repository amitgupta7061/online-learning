"use client";
import { UserDetailContext } from '@/context/UserDetailContext';
import { useUser } from '@clerk/nextjs';
import axios from 'axios'
import { useEffect, useState } from 'react';

const Provider = ({children}: {children: React.ReactNode}) => {

  const {user} = useUser();
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    if (user) {
      const createNewUser = async () => {
        try {
          const result = await axios.post('/api/user', {
            name: user.fullName,
            email: user.primaryEmailAddress?.emailAddress,
          });
          setUserDetails(result.data);
        } catch (err) {
          console.error("Failed to create user:", err);
        }
      };
  
      createNewUser();
    }
  }, [user]);
  
  return (
    <UserDetailContext.Provider value={{userDetails, setUserDetails}}>
      <div>
        {children}
      </div>
    </UserDetailContext.Provider>
  )
}

export default Provider
