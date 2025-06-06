
import axiosInstance from '../Interceptor/axiosInterceptor';



interface Profile {
  id: number;
  name: string; 
  email: string;
}

const getProfile = async (id: any): Promise<Profile> => {
  try {
    const res = await axiosInstance.get(`/profiles/get/${id}`);
    return res.data;
  } catch (err) {
    console.error('Error fetching profile:', err);
    throw err;
  }
};

const getAllProfiles = async () => {
  try {
    const res = await axiosInstance.get(`/profiles/getAll`);
    return res.data;
  } catch (err) {
    console.error('Error fetching all profiles:', err);
    throw err;
  }
}

const updateProfile = async (profile: Profile): Promise<Profile> => {
  try {
    const res = await axiosInstance.put(`/profiles/update`, profile);
    return res.data;
  } catch (err) {
    console.error('Error updating profile:', err);
    throw err;
  }
};

const ProfileService = {
  getProfile,
  updateProfile,
  getAllProfiles,
};

export default ProfileService;
