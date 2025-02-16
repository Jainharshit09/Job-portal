import axios from 'axios';

const base_url = 'http://localhost:8080/profiles/';

interface Profile {
  id: number;
  name: string;
  email: string;
}

const getProfile = async (id: number): Promise<Profile> => {
  try {
    const res = await axios.get(`${base_url}get/${id}`);
    return res.data;
  } catch (err) {
    console.error('Error fetching profile:', err);
    throw err;
  }
};

const updateProfile = async (profile: Profile): Promise<Profile> => {
  try {
    const res = await axios.put(`${base_url}update`, profile);
    return res.data;
  } catch (err) {
    console.error('Error updating profile:', err);
    throw err;
  }
};

const ProfileService = {
  getProfile,
  updateProfile,
};

export default ProfileService;
