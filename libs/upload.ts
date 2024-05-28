import { baseUrl } from "@/constants/baseUrl";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUpload } from "@/context/uploadDocument/uploadInfo";
import { useAuth } from "@/context/Auth/authinfo";

interface Data {
    document: File;
    assistant: string;
    category: string;
    purpose: string;
    title: string;
    [key: string]: any;
}

const fileMutation = () => {
    const queryClient = useQueryClient();
    const { state: inputData } = useUpload() as any;
    const { userId } = useAuth().state;
    
    const formData = new FormData();
    formData.append('file', inputData?.document);
    formData.append('assistant', inputData?.assistant);
    formData.append('category', inputData?.category);
    formData.append('purpose', inputData?.purpose);
    formData.append('title', inputData?.name);

    const mutation = useMutation({
        mutationFn: async () => {
            try {
                const res = await axios.post(`${baseUrl}/api/upload/${userId}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                return res.data;
            } catch (error) {
                console.error('Error uploading file:', error);
                throw error;
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['bots'] });
            console.log('File upload successful');
        },
        onError: (error) => {
            console.error('Error in mutation:', error);
        },
        retry: 3,
    });

    return {
        mutation,
    };
};

export default fileMutation;
