import axios from "axios";

const API_BASE_URL = "http://3.98.8.208:5000"; // 백엔드 주소

// 방문자 기록
export const trackVisit = () => {
    return axios.post(`${API_BASE_URL}/track-visit`);
};

// 방문자 수 가져오기
export const getVisitorCount = async (): Promise<number> => {
    const response = await axios.get(`${API_BASE_URL}/get-visitors`);
    return response.data.count;
};

// 이메일 저장
export const saveEmail = async (email: string) => {
    return axios.post(`${API_BASE_URL}/save-email`, { email });
};
