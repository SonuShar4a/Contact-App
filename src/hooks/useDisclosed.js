import { useState } from "react";
const useDisclose=()=>{
    const [isOpen,setOpen]=useState(false);
    const onOpen=()=>{
        setOpen(true);
      }
      const onClosed=()=>{
        setOpen(false);
      }

    return{onClosed,onOpen,isOpen}
};

export default useDisclose;