import { toast } from 'react-toastify';
export default function Toast({msg,type}){
    if(type=='error'){
        return toast.error(msg,
            {
                position:"top-right",
                autoclose:5000,
                hideProgressBar:false,
                closeOnClick:true,
                draggable:true,
                progress:undefined,
                theme:"light",
        });
    }
    if(type == 'success'){
        return toast.success(msg,{
            position:"top-right",
            autoclose:5000,
            hideProgressBar:false,
            closeOnClick:true,
            draggable:true,
            progress:undefined,
            theme:"light",
        })
    }
}