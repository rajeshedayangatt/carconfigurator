import { createWithEqualityFn } from 'zustand/traditional';

const useStoreMaster = createWithEqualityFn(
  (set, get) => ({
   
    color: null,
    parts : "Front Bumper",
    envmapshow : true,
    flaketextureshow : false,

    setenvmapshow: (val) => {
        set(() => ({
            envmapshow: val,
        }));
    },

    setflaketextureshow: (val) => {
        set(() => ({
            flaketextureshow: val,
        }));
    },
    
    setParts: (val) => {
        set(() => ({
            parts: val,
        }));
      },
    setColor: (val) => {
      set(() => ({
        color: val,
      }));
    },

   
  }),
  Object.is,
);

export { useStoreMaster };
