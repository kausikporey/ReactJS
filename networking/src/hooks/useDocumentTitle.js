import React, { useEffect } from 'react';


const useDocumentTitle = (counter) => {
        useEffect(() => {
            document.title = `You have clicked ${counter} times`
        },[counter])
      }


export default useDocumentTitle ;