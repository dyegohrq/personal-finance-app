import type React from "react";

export function Container({children}:{children:React.ReactNode}):React.JSX.Element {
    return(
        <div className=" bg-beige-100 " >
            {children}
        </div>
    )
}