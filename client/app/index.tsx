import { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';

export default function Home() {
  const [user, setUser] = useState(true); // Default to not authenticated
  const [loading, setLoading] = useState(true); // To handle loading state
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        if (user) {
          router.replace('/gallery'); 
        } else {
          router.replace('/signup');
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
      } finally {
        setLoading(false); 
      }
    };

    checkAuth();
  },);

  if (loading) {
    return null;
  }
  return null;
}
