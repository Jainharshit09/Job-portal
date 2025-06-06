import axiosInstance from "../Interceptor/axiosInterceptor";


const postJob = async (job: any) => {
  const { edit,closed, ...cleanedJobData } = job;
  console.log('Cleaned Job Data:', cleanedJobData);
  try {
    const res = await axiosInstance.post(`/jobs/post`, cleanedJobData);
    console.log("Job posted successfully:", res.data);
    return res.data;
  } catch (err) {
    console.error('Error posting job:', err);
  }
};

const getAllJobs = async () => {
  try {
    const res = await axiosInstance.get(`/jobs/getAll`);
    return res.data;
  } catch (err) {
    console.error('Error fetching all jobs:', err);
    throw new Error('Failed to fetch all jobs');
  }
};

const getJobs = async (id: any) => {
  try {
    const res = await axiosInstance.get(`/jobs/get/${id}`);
    return res.data;
  } catch (err) {
    console.error(`Error fetching job with ID ${id}:`, err);
    throw new Error(`Failed to fetch job with ID ${id}`);
  }
};

const applyJob = async (id: any, applicant: any) => {
  try {
    const res = await axiosInstance.post(`/jobs/apply/${id}`, applicant);
    return res.data;
  } catch (err) {
    console.error(`Error applying for job with ID ${id}:`, err);
    throw new Error(`Failed to apply for job with ID ${id}`);
  }
};

const getJobPostedBy = async (id: number) => {
  try {
    const res = await axiosInstance.get(`/jobs/postedBy/${id}`);
    return res.data;
  } catch (err) {
    console.error(`Error fetching posted jobs for user with ID ${id}:`, err);
    throw new Error(`Failed to fetch posted jobs for user with ID ${id}`);
  }
};

const changeAppStatus = async (application: any) => {
    try {
        const res = await axiosInstance.put(`/jobs/changeAppStatus`, application);
      
      // Debugging: Log the full response
      console.log('Response:', res);
  
      if (!res || !res.data) {
        throw new Error('Invalid response from server');
      }
  
      return res.data;
    } catch (err) {
      console.error('Error changing application status:', err);
      throw new Error('Failed to change application status');
    }
  };
  

const jobService = {
  postJob,
  getJobs,
  getAllJobs,
  applyJob,
  getJobPostedBy,   
  changeAppStatus
};

export default jobService;
