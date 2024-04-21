import { useState } from "react"
import { useStoreMaster } from '../store';
import { shallow } from 'zustand/shallow';

export default function EnvCustomise() {


    const storeMaster = useStoreMaster(
        (state) => ({
            setenvmapshow : state.setenvmapshow,
            setflaketextureshow : state.setflaketextureshow,
    
        }),
        shallow,
      );
    

    const [envmap , setEnvMap ] = useState(true);
    const [flake , setFlake ] = useState(false);



    return(
        <div className="w-[200px] h-[100px] absolute z-[9999999] top-0 left-0 bg-black text-white flex flex-col justify-center align-middle"> 
            <div className="flex items-center mb-4">
                <input checked={envmap} id="default-checkbox" type="checkbox" value="envmap"
                onChange={(e) => {
                    storeMaster.setenvmapshow(!envmap)
                    setEnvMap(!envmap)
                }}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Show Environment Map</label>
            </div>
            <div className="flex items-center">
                <input  

                    checked={flake} 
                     onChange={(e) => {
                        storeMaster.setflaketextureshow(!flake)

                        setFlake(!flake)
                    }}
                id="checked-checkbox" type="checkbox" value="flake_texture" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label for="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Show Flake Texture</label>
            </div>
        </div>
    )
}